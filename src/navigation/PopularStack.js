import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PopularScreen from '../screens/PopularScreen';
import GameDetailScreen from '../screens/GameDetailScreen';

const Stack = createNativeStackNavigator();

export default function PopularStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Populares" component={PopularScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Juego" component={GameDetailScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
