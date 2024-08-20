// Para Expo
import * as SQLite from 'expo-sqlite';

// Para React Native CLI
// import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase('studyflow.db');

export const initDb = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS provas (
        id INTEGER PRIMARY KEY NOT NULL,
        nome TEXT NOT NULL,
        disciplina TEXT NOT NULL,
        data TEXT NOT NULL
      );`
    );
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS trabalhos (
        id INTEGER PRIMARY KEY NOT NULL,
        descricao TEXT NOT NULL,
        disciplina TEXT NOT NULL,
        data TEXT NOT NULL
      );`
    );
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS horarios (
        id INTEGER PRIMARY KEY NOT NULL,
        horario TEXT NOT NULL,
        disciplina TEXT NOT NULL,
        dia TEXT NOT NULL
      );`
    );
  });
};

// Funções para adicionar e buscar dados
export const insertProva = (nome, disciplina, data) => {
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO provas (nome, disciplina, data) VALUES (?, ?, ?);`,
      [nome, disciplina, data]
    );
  });
};

export const insertTrabalho = (descricao, disciplina, data) => {
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO trabalhos (descricao, disciplina, data) VALUES (?, ?, ?);`,
      [descricao, disciplina, data]
    );
  });
};

export const insertHorario = (horario, disciplina, dia) => {
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO horarios (horario, disciplina, dia) VALUES (?, ?, ?);`,
      [horario, disciplina, dia]
    );
  });
};

export const fetchProvas = (callback) => {
  db.transaction(tx => {
    tx.executeSql(
      `SELECT * FROM provas;`,
      [],
      (_, result) => callback(result.rows._array)
    );
  });
};

export const fetchTrabalhos = (callback) => {
  db.transaction(tx => {
    tx.executeSql(
      `SELECT * FROM trabalhos;`,
      [],
      (_, result) => callback(result.rows._array)
    );
  });
};

export const fetchHorarios = (callback) => {
  db.transaction(tx => {
    tx.executeSql(
      `SELECT * FROM horarios;`,
      [],
      (_, result) => callback(result.rows._array)
    );
  });
};
