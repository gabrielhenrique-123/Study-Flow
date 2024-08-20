import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Bem vindo, Aluno!</Text>
      <View style={styles.datesButton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Provas')}
        >
          <Text style={styles.buttonText}>Provas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Trabalhos')}
        >
          <Text style={styles.buttonText}>Trabalhos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Horários')}
        >
          <Text style={styles.buttonText}>Horário</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  datesButton: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 10,
    width: 300,
    height: 100,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    alignSelf: 'center',
  },
});
