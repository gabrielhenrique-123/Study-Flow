import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseAsync('studyflow.db');

export const initDb = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS provas (
          id INTEGER PRIMARY KEY NOT NULL,
          nome TEXT NOT NULL,
          disciplina TEXT NOT NULL,
          data TEXT NOT NULL
        );`,
        [],
        () => resolve(),
        (_, error) => reject(error)
      );

      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS trabalhos (
          id INTEGER PRIMARY KEY NOT NULL,
          descricao TEXT NOT NULL,
          disciplina TEXT NOT NULL,
          data TEXT NOT NULL
        );`,
        [],
        () => resolve(),
        (_, error) => reject(error)
      );

      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS horarios (
          id INTEGER PRIMARY KEY NOT NULL,
          horario TEXT NOT NULL,
          disciplina TEXT NOT NULL,
          dia TEXT NOT NULL
        );`,
        [],
        () => resolve(),
        (_, error) => reject(error)
      );
    });
  });
};

// Funções para adicionar e buscar dados
export const insertProva = (nome, disciplina, data) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO provas (nome, disciplina, data) VALUES (?, ?, ?);`,
        [nome, disciplina, data],
        () => resolve(),
        (_, error) => reject(error)
      );
    });
  });
};

export const insertTrabalho = (descricao, disciplina, data) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO trabalhos (descricao, disciplina, data) VALUES (?, ?, ?);`,
        [descricao, disciplina, data],
        () => resolve(),
        (_, error) => reject(error)
      );
    });
  });
};

export const insertHorario = (horario, disciplina, dia) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO horarios (horario, disciplina, dia) VALUES (?, ?, ?);`,
        [horario, disciplina, dia],
        () => resolve(),
        (_, error) => reject(error)
      );
    });
  });
};

export const fetchProvas = (callback) => {
  db.transaction(tx => {
    tx.executeSql(
      `SELECT * FROM provas;`,
      [],
      (_, result) => callback(result.rows._array),
      (_, error) => console.error(error)
    );
  });
};

export const fetchTrabalhos = (callback) => {
  db.transaction(tx => {
    tx.executeSql(
      `SELECT * FROM trabalhos;`,
      [],
      (_, result) => callback(result.rows._array),
      (_, error) => console.error(error)
    );
  });
};

export const fetchHorarios = (callback) => {
  db.transaction(tx => {
    tx.executeSql(
      `SELECT * FROM horarios;`,
      [],
      (_, result) => callback(result.rows._array),
      (_, error) => console.error(error)
    );
  });
};
