import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GenresScreen from '../screens/GenresScreen';
import CatalogScreen from '../screens/CatalogScreen';
import GameDetailScreen from '../screens/GameDetailScreen';

const Stack = createNativeStackNavigator();

export default function CatalogStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Catálogos" component={GenresScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Catálogo" component={CatalogScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Juego" component={GameDetailScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
