import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const DESCRIPTION_BY_KEYWORD = {
  Heart: {
    desc: 'Full cardiology screening including ECG and consultation. Subsidized for low-income families.',
    eligibility: 'Income below $30k/year or government aid card',
  },
  Asthma: {
    desc: 'Asthma care pack includes inhaler, spacer, and education session.',
    eligibility: 'Open to all low-income patients (no insurance needed)',
  },
  Vision: {
    desc: 'Comprehensive eye exam + free basic glasses. Upgrade available for $5.',
    eligibility: 'Priority for children, elderly, and disabled',
  },
  Dental: {
    desc: 'Urgent dental extraction (pain relief). Includes follow-up.',
    eligibility: 'Uninsured / low-income only',
  },
};

export default function PromoModal({ visible, promo, onClose }) {
  if (!promo) return null;

  const key = Object.keys(DESCRIPTION_BY_KEYWORD).find((k) => promo.name.includes(k));
  const dynamic = DESCRIPTION_BY_KEYWORD[key] || {
    desc: 'Contact hospital for more details.',
    eligibility: 'Low-income families',
  };

  return (
    <Modal animationType="fade" transparent visible={visible} onRequestClose={onClose}>
      <View style={styles.backdrop}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.close} onPress={onClose}>
            <Text style={styles.closeText}>×</Text>
          </TouchableOpacity>
          <Text style={styles.title}>{promo.name}</Text>
          <Text style={styles.subtitle}>
            <FontAwesome name="hospital" size={16} color="#1f4b77" /> {' '}
            {promo.hospital}
          </Text>

          <View style={styles.highlight}> 
            <Text style={styles.priceCurrent}>{promo.price}</Text>
            <Text style={styles.priceOld}>{promo.oldPrice}</Text>
          </View>

          <Text style={styles.paragraph}>{dynamic.desc}</Text>
          <Text style={styles.paragraph}>
            <FontAwesome name="tag" size={14} color="#1f4b77" /> {' '}
            <Text style={styles.paragraphStrong}>Eligibility:</Text> {dynamic.eligibility}
          </Text>
          <Text style={styles.paragraph}>
            <FontAwesome name="bus" size={14} color="#1f4b77" /> {' '}
            {promo.transport}
          </Text>

          <TouchableOpacity style={styles.claimBtn} onPress={() => {
            alert('Thank you for your interest! A community health worker will contact you soon.');
            onClose();
          }}>
            <Text style={styles.claimText}>I'm interested – show details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  content: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: 'white',
    borderRadius: 32,
    padding: 32,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 20,
  },
  close: {
    position: 'absolute',
    top: 16,
    right: 18,
    zIndex: 10,
  },
  closeText: {
    fontSize: 30,
    color: '#777',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1f4b77',
    marginBottom: 8,
  },
  subtitle: {
    marginBottom: 16,
    fontSize: 16,
    color: '#4b6584',
  },
  highlight: {
    backgroundColor: '#e6f2ff',
    padding: 16,
    borderRadius: 20,
    marginBottom: 20,
  },
  priceCurrent: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1f4b77',
  },
  priceOld: {
    fontSize: 16,
    color: '#94a3b8',
    textDecorationLine: 'line-through',
    marginLeft: 10,
  },
  paragraph: {
    fontSize: 15,
    marginBottom: 12,
    color: '#1e2b3c',
  },
  paragraphStrong: {
    fontWeight: '700',
  },
  claimBtn: {
    marginTop: 20,
    backgroundColor: '#1f4b77',
    paddingVertical: 14,
    borderRadius: 50,
    alignItems: 'center',
  },
  claimText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 15,
  },
});
