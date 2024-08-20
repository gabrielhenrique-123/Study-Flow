import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { insertProva, fetchProvas } from '../db/database.js';

const ProvasScreen = () => {
  const [nome, setNome] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [data, setData] = useState('');
  const [provas, setProvas] = useState([]);

  const loadProvas = async () => {
    fetchProvas((result) => {
      setProvas(result);
    });
  };

  useEffect(() => {
    loadProvas();
  }, []);

  const addProva = () => {
    if (nome && disciplina && data) {
      insertProva(nome, disciplina, data)
        .then(() => {
          loadProvas();
          setNome('');
          setDisciplina('');
          setData('');
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Prova</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Disciplina"
        value={disciplina}
        onChangeText={setDisciplina}
      />
      <TextInput
        style={styles.input}
        placeholder="Data"
        value={data}
        onChangeText={setData}
      />
      <Button title="Adicionar Prova" onPress={addProva} />
      <FlatList
        data={provas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.nome}</Text>
            <Text>{item.disciplina}</Text>
            <Text>{item.data}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 18,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ProvasScreen;
