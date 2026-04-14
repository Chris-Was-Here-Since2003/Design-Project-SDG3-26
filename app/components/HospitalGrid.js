import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import HospitalCard from './HospitalCard';

export default function HospitalGrid({ hospitals, favorites, onToggleFavorite }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={hospitals}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment="start"
        snapToInterval={272}
        decelerationRate="fast"
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <HospitalCard
            hospital={item}
            isFavorite={favorites.includes(item.id)}
            onToggleFavorite={() => onToggleFavorite(item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    paddingLeft: 24,
    paddingRight: 12,
    height: 200,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});
