import React, { useEffect, useMemo, useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';

import FilterBar from './components/FilterBar';
import PromoGrid from './components/PromoGrid';
import HospitalGrid from './components/HospitalGrid';
import PromoModal from './components/PromoModal';

import { initialPromos, hospitals } from './data/data';
//^database, change when database is established


export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [ratingFilter, setRatingFilter] = useState('all');
  const [discountOnly, setDiscountOnly] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [promos, setPromos] = useState(initialPromos);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPromo, setSelectedPromo] = useState(null);


//part of database, change when database is established
  const filteredPromos = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return promos.filter((promo) => {
      const matchesQuery =
        query === '' ||
        promo.name.toLowerCase().includes(query) ||
        promo.hospital.toLowerCase().includes(query);

      const matchesRating = ratingFilter === 'all' ? true : parseFloat(promo.rating) >= parseFloat(ratingFilter);
      const matchesDiscount = !discountOnly || !!promo.discount;
      return matchesQuery && matchesRating && matchesDiscount;
    });
  }, [promos, searchQuery, ratingFilter, discountOnly]);

  const filteredHospitals = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return hospitals.filter((hospital) => {
      const matchesQuery =
        query === '' ||
        hospital.name.toLowerCase().includes(query) ||
        hospital.address.toLowerCase().includes(query);
      const matchesRating = ratingFilter === 'all' ? true : parseFloat(hospital.rating) >= parseFloat(ratingFilter);
      return matchesQuery && matchesRating;
    });
  }, [searchQuery, ratingFilter]);

  const toggleFavorite = (id) => {
    setFavorites((current) => {
      if (current.includes(id)) {
        return current.filter((item) => item !== id);
      }
      return [...current, id];
    });
  };

  const openPromotion = (promo) => {
    setSelectedPromo(promo);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedPromo(null);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#f4f7fb" />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.topBar}>
          <View style={styles.logoArea}>
            <View style={styles.logoIcon}>
              <FontAwesome5 name="hand-holding-heart" size={20} color="white" />
            </View>
            <Text style={styles.logoText}>
              xxx
              <Text style={styles.logoTextAccent}>xxx</Text>
              {' '}· Hospital Promos
            </Text>
          </View>
          <View style={styles.noteBadge}>
            <FontAwesome name="heart" size={14} color="#e67e22" style={styles.noteIcon} />
            <Text style={styles.noteText}></Text>
          </View>
        </View>

        <FilterBar
          query={searchQuery}
          onQueryChange={setSearchQuery}
          ratingFilter={ratingFilter}
          onRatingChange={setRatingFilter}
          discountOnly={discountOnly}
          onDiscountToggle={setDiscountOnly}
        />


        <View style={styles.sectionTitleRow}>
          <View style={styles.sectionTitleWithIcon}>
            <View style={styles.sectionIcon}>
              <FontAwesome name="hospital-alt" size={16} color="white" />
            </View>
            <Text style={styles.sectionTitle}>Hospital promos & treatments</Text>
          </View>
          <Text style={styles.sectionNote}>showing {filteredPromos.length} promos</Text>
        </View>

        <View style = {styles.separator}>
        <PromoGrid
          promos={filteredPromos}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          onOpenPromo={openPromotion}
        />
        </View>

        <View style={styles.sectionTitleRow}>
          <View style={styles.sectionTitleWithIcon}>
            <View style={styles.sectionIcon}>
              <FontAwesome name="clinic-medical" size={16} color="white" />
            </View>
            <Text style={styles.sectionTitle}>Hospitals & free transport</Text>
          </View>
          <Text style={styles.sectionNote}>showing {filteredHospitals.length} hospitals</Text>
        </View>

        <View style={styles.separator}>
        <HospitalGrid
          hospitals={filteredHospitals}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
        </View>

      </ScrollView>

      <PromoModal
        visible={isModalVisible}
        promo={selectedPromo}
        onClose={closeModal}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  separator:{
    padding: 50,
    height :'100vh'
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#f4f7fb',
  },
  container: {
    padding: 16,
    paddingBottom: 40,
  },
  topBar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 28,
  },
  logoArea: {
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 1,
  },
  logoIcon: {
    backgroundColor: '#1e3c5c',
    width: 42,
    height: 42,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  logoText: {
    fontWeight: '700',
    fontSize: 18,
    color: '#1e2b3c',
  },
  logoTextAccent: {
    color: '#2f7fc9',
    fontWeight: '400',
  },
  noteBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 40,
    backgroundColor: '#e8f0fe',
    borderWidth: 1,
    borderColor: '#bdd3f0',
    shadowColor: '#000',
    shadowOpacity: 0.02,
    shadowRadius: 6,
  },
  noteIcon: {
    marginRight: 8,
  },
  noteText: {
    color: '#1f4977',
    fontSize: 13,
  },
  promoBanner: {
    backgroundColor: '#102b47',
    borderRadius: 28,
    padding: 24,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  promoText: {
    flex: 1,
    minWidth: 240,
  },
  promoTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: 'white',
  },
  promoSubtitleRow: {
    marginTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  promoSubtitle: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 15,
  },
  promoCta: {
    marginTop: 12,
    backgroundColor: '#ffb347',
    borderRadius: 60,
    paddingHorizontal: 18,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#b16200',
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  promoCtaText: {
    fontWeight: '700',
    color: '#0b2a3e',
    marginLeft: 46,
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 0,
  },
  sectionTitleWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  sectionIcon: {
    backgroundColor: '#1f4b77',
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#1e2b3c',
  },
  sectionNote: {
    backgroundColor: '#e2ebf3',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 30,
    fontSize: 13,
    color: '#1e405e',
  },
  mapPreview: {
    marginTop: 40,
    backgroundColor: '#e2eaf3',
    borderRadius: 24,
    padding: 16,
    alignItems: 'center',
  },
  mapPreviewText: {
    fontSize: 14,
    color: '#1e2b3c',
    textAlign: 'center',
  },
  footerRow: {
    marginTop: 60,
    borderTopWidth: 1,
    borderTopColor: '#b9d0e7',
    paddingTop: 24,
  },
  footerText: {
    fontSize: 13,
    color: '#3d6184',
    textAlign: 'center',
  },
});
