import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Home';
import CadastroPaciente from './CadastroPaciente';
import ListaPacientes from './ListaPacientes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CadastroPaciente" component={CadastroPaciente} />
        <Stack.Screen name="ListaPacientes" component={ListaPacientes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
