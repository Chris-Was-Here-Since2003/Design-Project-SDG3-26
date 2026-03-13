import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import HospitalCard from './HospitalCard';

export default function HospitalGrid({ hospitals, favorites, onToggleFavorite }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={hospitals}
        keyExtractor={(item) => item.id}
        horizontal={false}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
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
    paddingVertical: 4,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});
