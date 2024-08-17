import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function HomeScreen(){
  return(
    <View style = {styles.container}><Text>Study Flow</Text><StatusBar style="auto"/></View>
  );
}

function CalendarScreen(){
  return(
    <View style = {styles.container}><Text>Calendar time</Text><StatusBar style="auto"/></View>
  );
}

export default function App() {
  return (
    <NavigationContainer><Tab.Navigator><Tab.Screen name="Home" component={HomeScreen} /><Tab.Screen name="My Calendar" component={CalendarScreen} /></Tab.Navigator></NavigationContainer>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
