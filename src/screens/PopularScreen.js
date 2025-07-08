import React, { useState } from 'react';
import { View, FlatList, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import AppBar from '../components/AppBar';
import { mockGames } from '../mockGames';

export default function PopularScreen({ navigation }) {
  const [games] = useState(mockGames.slice(0, 10));

  return (
    <View style={{ flex: 1, backgroundColor: '#222' }}>
      <AppBar title="Más Jugados" />
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
