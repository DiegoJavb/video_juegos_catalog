import React, { useState } from 'react';
import { View, FlatList, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import AppBar from '../components/AppBar';
import { mockGames } from '../mockGames';

export default function CatalogScreen({ route, navigation }) {
  const genre = route?.params?.genre;
  // Filtrar por género usando una propiedad mock 'genre' en los juegos
  const games = genre
    ? mockGames.filter(g => g.genre && g.genre.toLowerCase() === genre.name.toLowerCase())
    : mockGames;

  return (
    <View style={{ flex: 1, backgroundColor: '#222' }}>
      <AppBar
        title={genre ? genre.name : 'Catálogo'}
        showBack={!!genre}
        onBack={() => navigation.goBack()}
      />
      <FlatList
        data={games}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Juego', { gameId: item.id })}>
            <View style={styles.item}>
              <Image source={{ uri: item.background_image }} style={styles.image} />
              <View style={styles.info}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.rating}>Rating: {item.rating}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    width: 100,
    height: 60,
  },
  info: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  rating: {
    color: '#888',
  },
});
