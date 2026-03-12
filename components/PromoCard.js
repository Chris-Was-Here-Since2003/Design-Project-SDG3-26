import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function PromoCard({ promo, isFavorite, onToggleFavorite, onOpen }) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={onOpen}>
      <Image source={{ uri: promo.img }} style={styles.image} />
      <View style={styles.tagsRow}>
        {!!promo.discount && <Text style={styles.discountTag}>{promo.discount}</Text>}
        <Text style={styles.tag}>{promo.tag}</Text>
        <Text style={styles.availabilityTag}>subsidized</Text>
      </View>

      <View style={styles.headerRow}>
        <Text style={styles.title}>{promo.name}</Text>
        <TouchableOpacity onPress={onToggleFavorite} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <FontAwesome name={isFavorite ? 'heart' : 'heart-o'} size={20} color={isFavorite ? '#e63946' : '#ccc'} />
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle}>
        <FontAwesome name="hospital" size={12} color="#4b6584" style={styles.subtitleIcon} />
        {promo.hospital} <Text style={styles.rating}>⭐ {promo.rating}</Text>
      </Text>

      <View style={styles.priceRow}>
        <Text style={styles.currentPrice}>{promo.price}</Text>
        <Text style={styles.oldPrice}>{promo.oldPrice}</Text>
      </View>

      <View style={styles.transportRow}>
        <FontAwesome name="shuttle-van" size={14} color="#1f5170" style={styles.transportIcon} />
        <Text style={styles.transportText}>{promo.transport}</Text>
      </View>

      <View style={styles.buttonRow}>
        <Text style={styles.buttonText}>see promo</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 16,
    shadowColor: '#002040',
    shadowOpacity: 0.08,
    shadowRadius: 25,
    borderWidth: 1,
    borderColor: 'rgba(0,70,120,0.05)',
    width: '48%',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 20,
    marginBottom: 16,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
  },
  tag: {
    backgroundColor: '#ecf3fa',
    borderRadius: 40,
    paddingHorizontal: 12,
    paddingVertical: 4,
    fontSize: 12,
    fontWeight: '600',
    color: '#1e4b70',
    marginRight: 8,
    marginBottom: 8,
  },
  discountTag: {
    backgroundColor: '#f97316',
    borderRadius: 40,
    paddingHorizontal: 12,
    paddingVertical: 4,
    fontSize: 12,
    fontWeight: '700',
    color: 'white',
    marginRight: 8,
    marginBottom: 8,
  },
  availabilityTag: {
    backgroundColor: '#dcfce7',
    borderRadius: 40,
    paddingHorizontal: 12,
    paddingVertical: 4,
    fontSize: 12,
    fontWeight: '700',
    color: '#166534',
    marginRight: 8,
    marginBottom: 8,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
    color: '#1e2b3c',
    flex: 1,
    paddingRight: 8,
  },
  subtitle: {
    color: '#4b6584',
    fontSize: 12,
    marginBottom: 12,
  },
  subtitleIcon: {
    marginRight: 6,
  },
  rating: {
    marginLeft: 4,
    color: '#f4b400',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 12,
  },
  currentPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0f2b42',
  },
  oldPrice: {
    fontSize: 13,
    color: '#94a3b8',
    textDecorationLine: 'line-through',
  },
  transportRow: {
    backgroundColor: '#f0f7ff',
    padding: 8,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#c7dfff',
  },
  transportIcon: {
    color: '#1f5170',
  },
  transportText: {
    color: '#1f5170',
    fontSize: 12,
    flex: 1,
  },
  buttonRow: {
    backgroundColor: 'white',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#d4e2f0',
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#1f4b77',
    fontWeight: '600',
    fontSize: 13,
  },
});
