import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';


const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function HomeScreen({navigation}){
  return(
    <SafeAreaView style = {styles.container}>
      <Text marginLeft = {17} style = {styles.titleText}>Bem vindo, Aluno!</Text>
      <View style = {styles.datesButton}>
        <TouchableOpacity backgroundColor='brown' style = {styles.button}>
          <Text style = {styles.buttonText}>Provas</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.button}>
          <Text style = {styles.buttonText}>Trabalhos</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.button}>
          <Text style = {styles.buttonText}>Horário</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
    </View>
  );
}

function CalendarScreen(){
  return(
    <View style = {styles.container}><Text>Calendar time</Text><StatusBar style="auto"/></View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="My Calendar" component={CalendarScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  datesButton: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleText: {
    fontSize: 20,
  },

  button: {
    backgroundColor: 'green',
    paddingVertical: 15, // Altura (espaçamento interno)
    paddingHorizontal: 30, // Largura (espaçamento interno)
    borderRadius: 5, // Bordas arredondadas
    marginVertical: 10, // Espaçamento
    width: 300,
    height: 100,
    justifyContent: 'center',  
  },

  buttonText: {
    color: 'white', // Cor do texto do botão
    fontSize: 18, // Tamanho do texto
    alignSelf: 'center',
  }
});
