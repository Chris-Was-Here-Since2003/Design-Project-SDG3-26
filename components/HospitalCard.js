import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function HospitalCard({ hospital, isFavorite, onToggleFavorite }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: hospital.img }} style={styles.image} />

      <View style={styles.tagsRow}>
        {hospital.tags.map((tag) => (
          <Text key={tag} style={styles.tag}>
            {tag}
          </Text>
        ))}
        <Text style={styles.tag}>⭐ {hospital.rating}</Text>
      </View>

      <View style={styles.headerRow}>
        <Text style={styles.title}>{hospital.name}</Text>
        <TouchableOpacity onPress={onToggleFavorite} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <FontAwesome name={isFavorite ? 'heart' : 'heart-o'} size={20} color={isFavorite ? '#e63946' : '#ccc'} />
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle}>
        {hospital.address}
      </Text>

      {hospital.transport.map((line) => (
        <View key={line} style={styles.transportRow}>
          <Text style={styles.transportText}>{line}</Text>
        </View>
      ))}

      <TouchableOpacity style={styles.actionBtn} activeOpacity={0.8} onPress={() => alert(`🚍 Showing route to ${hospital.name} with free transport options.`)}>
        <FontAwesome name="directions" size={14} color="#1f4b77" style={{ marginRight: 8 }} />
        <Text style={styles.actionText}>get direction</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'light blue',
    borderRadius: 18,
    padding: 20,
    shadowColor: '#002040',
    shadowOpacity: 0.08,
    shadowRadius: 25,
    borderWidth: 1,
    borderColor: 'rgba(0,70,120,0.05)',
    width: 250,
    margin: 10,
    height: 420,
    justifyContent: 'flex-start',
    overflow: 'hidden',
    alignItems: 'center',
  },
  image: {
    width:'60%',
    aspectRatio: 0.85,
    borderRadius: 16,
    marginBottom: 8,
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
    fontSize: 10,
    fontWeight: '600',
    color: '#1e4b70',
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
    fontSize: 12,
    color: '#1e2b3c',
    flex: 1,
    paddingRight: 8,
  },
  subtitle: {
    color: '#4b6584',
    fontSize: 10,
    marginBottom: 12,
  },
  subtitleIcon: {
    marginRight: 6,
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
    color: '#0284c7',
  },
  transportText: {
    color: '#1f4b77',
    fontSize: 12,
    flex: 1,
  },
  actionBtn: {
    marginTop: 8,
    paddingVertical: 12,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#d4e2f0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
  },
  actionText: {
    color: '#1f4b77',
    fontWeight: '600',
    fontSize: 10,
  },
});
