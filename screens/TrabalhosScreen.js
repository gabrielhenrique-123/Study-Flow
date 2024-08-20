import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity, Modal, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TrabalhosScreen() {
  const [trabalhos, setTrabalhos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [nomeTrabalho, setNomeTrabalho] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [data, setData] = useState('');
  const [descricao, setDescricao] = useState('');

  // Função para adicionar um trabalho
  const handleAddTrabalho = () => {
    if (nomeTrabalho && disciplina && data && descricao) {
      setTrabalhos([...trabalhos, { nomeTrabalho, disciplina, data, descricao }]);
      setNomeTrabalho('');
      setDisciplina('');
      setData('');
      setDescricao('');
      setShowModal(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Lista de Trabalhos */}
      <FlatList
        data={trabalhos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.trabalhoItem}>
            <Text style={styles.trabalhoText}>{item.nomeTrabalho} - {item.disciplina} - {item.data}</Text>
            <Text style={styles.trabalhoDescricao}>{item.descricao}</Text>
          </View>
        )}
      />

      {/* Modal para adicionar trabalho */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="Nome do Trabalho"
              value={nomeTrabalho}
              onChangeText={setNomeTrabalho}
            />
            <TextInput
              style={styles.input}
              placeholder="Disciplina"
              value={disciplina}
              onChangeText={setDisciplina}
            />
            <TextInput
              style={styles.input}
              placeholder="Data (DD-MM-YYYY)"
              value={data}
              onChangeText={setData}
            />
            <TextInput
              style={styles.input}
              placeholder="Descrição"
              value={descricao}
              onChangeText={setDescricao}
            />
            <Button title="Adicionar" onPress={handleAddTrabalho} />
            <Button title="Cancelar" color="red" onPress={() => setShowModal(false)} />
          </View>
        </SafeAreaView>
      </Modal>

      {/* Botão para abrir o modal */}
      <TouchableOpacity 
        onPress={() => setShowModal(true)} 
        style={styles.addButton}
        activeOpacity={0.7}
      >
        <Ionicons name="add" size={40} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  trabalhoItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  trabalhoText: {
    fontSize: 18,
  },
  trabalhoDescricao: {
    fontSize: 14,
    color: '#555',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#00BFA5',
    borderRadius: 50,
    padding: 15,
    elevation: 5, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
});
