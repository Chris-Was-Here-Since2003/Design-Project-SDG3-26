import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import PromoCard from './PromoCard';

export default function PromoGrid({
  //
  promos,
  favorites,
  onToggleFavorite,
  onOpenPromo,
}) {
  return (
    <View style={styles.gridContainer}>
    
      <FlatList
        data={promos}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment="start"
        snapToInterval={272}
        decelerationRate="fast"
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <PromoCard
            promo={item}
            isFavorite={favorites.includes(item.id)}
            onToggleFavorite={() => onToggleFavorite(item.id)}
            onOpen={() => onOpenPromo(item)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    height : 1,
  },
  listContent: {
    paddingLeft: 24,
    paddingRight: 12,
    height: 1,
  },
});
