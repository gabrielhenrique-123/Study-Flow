import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity, Modal, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { insertProva, fetchProvas } from '../database';


export default function ProvasScreen() {
  const [provas, setProvas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [nomeProva, setNomeProva] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [data, setData] = useState('');

  const handleAddProva = () => {
    if (nomeProva && disciplina && data) {
      setProvas([...provas, { nomeProva, disciplina, data }]);
      setNomeProva('');
      setDisciplina('');
      setData('');
      setShowModal(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={provas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.provaItem}>
            <Text style={styles.provaText}>{item.nomeProva} - {item.disciplina} - {item.data}</Text>
          </View>
        )}
      />

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
              placeholder="Nome da Prova"
              value={nomeProva}
              onChangeText={setNomeProva}
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
            <Button title="Adicionar" onPress={handleAddProva} />
            <Button title="Cancelar" color="red" onPress={() => setShowModal(false)} />
          </View>
        </SafeAreaView>
      </Modal>

      <TouchableOpacity 
        onPress={() => setShowModal(true)} 
        style={styles.addButton}
        activeOpacity={0.7} // Feedback visual ao pressionar
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
  provaItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  provaText: {
    fontSize: 18,
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
