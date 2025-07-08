import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import AppBar from '../components/AppBar';
import { mockGenres } from '../mockGenres';
import { mockGames } from '../mockGames';

export default function GenresScreen({ navigation }) {
  // Calcular el número real de juegos por género
  const genres = mockGenres.map(genre => ({
    ...genre,
    games_count: mockGames.filter(g => g.genre && g.genre.toLowerCase() === genre.name.toLowerCase()).length
  }));

  return (
    <View style={styles.container}>
      <AppBar title="Catálogos" />
      <FlatList
        contentContainerStyle={styles.centered}
        data={genres}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Catálogo', { genre: item })}
          >
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.count}>{item.games_count} juegos</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(153,153,153,0.1)',
  },
  centered: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    width: 260,
    marginVertical: 10,
    padding: 20,
    borderRadius: 12,
    backgroundColor: '#222',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },
  count: {
    color: '#aaa',
    fontSize: 14,
    marginTop: 4,
  },
});
