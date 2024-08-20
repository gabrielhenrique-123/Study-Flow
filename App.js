import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons'; // Importando Ionicons

import HomeScreen from './components/HomeScreen';
import ProvasScreen from './screens/ProvasScreen';
import TrabalhosScreen from './screens/TrabalhosScreen';
import HorariosScreen from './screens/HorariosScreen';
import CalendarScreen from './components/CalendarScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerShown: false }} // Esconder cabeçalho na tela Home
      />
      <Stack.Screen 
        name="Provas" 
        component={ProvasScreen} 
        options={{ headerTitle: "Provas" }} // Mostrar cabeçalho com o título "Provas"
      />
      <Stack.Screen 
        name="Trabalhos" 
        component={TrabalhosScreen} 
        options={{ headerTitle: "Trabalhos" }} // Mostrar cabeçalho com o título "Trabalhos"
      />
      <Stack.Screen 
        name="Horários" 
        component={HorariosScreen} 
        options={{ headerTitle: "Horários" }} // Mostrar cabeçalho com o título "Horários"
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'My Calendar') {
              iconName = focused ? 'calendar' : 'calendar-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#00BFA5',
          tabBarInactiveTintColor: '#37474F',
        })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="My Calendar" component={CalendarScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
