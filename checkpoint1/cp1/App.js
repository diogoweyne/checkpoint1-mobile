import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FormScreen from './FormScreen';
import ResultScreen from './ResultScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Form">
        <Stack.Screen name="Form" component={FormScreen} />
        <Stack.Screen name="Resultado" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}