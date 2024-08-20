import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity, Modal, SafeAreaView, ScrollView } from 'react-native';

export default function HorariosScreen() {
  const [horarios, setHorarios] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [dia, setDia] = useState('Segunda-feira');
  const [horario, setHorario] = useState('');
  const [disciplina, setDisciplina] = useState('');

  // Função para adicionar um horário
  const handleAddHorario = () => {
    if (dia && horario && disciplina) {
      setHorarios([...horarios, { dia, horario, disciplina }]);
      setDia('Segunda-feira');
      setHorario('');
      setDisciplina('');
      setShowModal(false);
    }
  };

  // Função para renderizar os horários para um dia específico
  const renderHorarios = (dia) => (
    <View style={styles.dayContainer}>
      <Text style={styles.dayText}>{dia}</Text>
      {['8:20 - 10:00', '10:10 - 11:50', '13:30 - 15:10', '15:20 - 17:00', '17:10 - 18:50', '19:00 - 20:40', '20:50 - 22:30'].map(time => (
        <View key={time} style={styles.timeSlot}>
          <Text>{time}</Text>
          <Text>{horarios.find(h => h.dia === dia && h.horario === time)?.disciplina || 'Livre'}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Renderiza horários para cada dia da semana */}
        {['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira'].map(dia => (
          <View key={dia} style={styles.daySection}>
            {renderHorarios(dia)}
          </View>
        ))}
      </ScrollView>

      {/* Modal para adicionar horário */}
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
              placeholder="Dia da Semana"
              value={dia}
              onChangeText={setDia}
            />
            <TextInput
              style={styles.input}
              placeholder="Horário (e.g., 8:20 - 10:00)"
              value={horario}
              onChangeText={setHorario}
            />
            <TextInput
              style={styles.input}
              placeholder="Disciplina"
              value={disciplina}
              onChangeText={setDisciplina}
            />
            <Button title="Adicionar" onPress={handleAddHorario} />
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
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  daySection: {
    marginBottom: 20,
  },
  dayContainer: {
    marginBottom: 10,
  },
  dayText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  timeSlot: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  addButtonText: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  }
});
