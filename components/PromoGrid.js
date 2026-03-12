import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import PromoCard from './PromoCard';

export default function PromoGrid({
  promos,
  favorites,
  onToggleFavorite,
  onOpenPromo,
  onLoadMore,
  showLoadMore,
}) {
  return (
    <View style={styles.gridContainer}>
      <FlatList
        data={promos}
        keyExtractor={(item) => item.id}
        horizontal={false}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <PromoCard
            promo={item}
            isFavorite={favorites.includes(item.id)}
            onToggleFavorite={() => onToggleFavorite(item.id)}
            onOpen={() => onOpenPromo(item)}
          />
        )}
        ListFooterComponent={() =>
          showLoadMore ? (
            <View style={styles.loadMoreContainer}>
              <Text style={styles.loadMoreBtn} onPress={onLoadMore}>
                Load more promos
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
  },
  listContent: {
    paddingVertical: 8,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  loadMoreContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  loadMoreBtn: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 50,
    backgroundColor: '#1f4b77',
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});
