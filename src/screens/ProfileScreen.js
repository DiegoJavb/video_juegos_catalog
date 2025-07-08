import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppBar from '../components/AppBar';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <AppBar title="Perfil" />
      <View style={styles.content}>
        <Text>Pantalla de Perfil</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
