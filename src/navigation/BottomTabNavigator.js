import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PopularStack from './PopularStack';
import CatalogStack from './CatalogStack';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#111', // negro
          borderTopColor: '#111',
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#888',
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Populares') {
            iconName = 'flame';
          } else if (route.name === 'Catálogos') {
            iconName = 'list';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Populares" component={PopularStack} />
      <Tab.Screen name="Catálogos" component={CatalogStack} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}
