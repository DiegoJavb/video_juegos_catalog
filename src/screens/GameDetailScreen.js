import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import AppBar from '../components/AppBar';
import { mockGames } from '../mockGames';

export default function GameDetailScreen({ route, navigation }) {
  const { gameId } = route.params;
  const game = mockGames.find(g => g.id === gameId);

  if (!game) {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Juego no encontrado</Text></View>;
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#222' }}>
      <AppBar title={game.name} showBack onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={{ uri: game.background_image }} style={styles.image} />
        <Text style={styles.title}>{game.name}</Text>
        <Text style={styles.rating}>Rating: {game.rating}</Text>
        <Text style={styles.desc}>{game.description_raw}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 8,
    color: '#fff',
  },
  rating: {
    color: '#888',
    marginBottom: 8,
  },
  desc: {
    fontSize: 16,
    marginTop: 8,
    color: '#fff',
  },
});
