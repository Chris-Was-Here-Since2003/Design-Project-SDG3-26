import React from 'react';
import { StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { FontAwesome } from '@expo/vector-icons';

export default function FilterBar({
  query,
  onQueryChange,
  ratingFilter,
  onRatingChange,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.searchRow}>
        <FontAwesome name="search" size={18} color="#a0b8cc" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search hospital, treatment, free promos..."
          placeholderTextColor="#9aafc4"
          value={query}
          onChangeText={onQueryChange}
        />
      </View>

      <View style={styles.controlsRow}>

        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={ratingFilter}
            onValueChange={onRatingChange}
            dropdownIconColor="#1e3b5a"
            style={styles.picker}
            itemStyle={styles.pickerItem}
          >
            <Picker.Item label="All ratings" value="all" />
            <Picker.Item label="⭐ 4.5+ only" value="4.5" />
          </Picker>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 60,
    paddingVertical: 6,
    paddingHorizontal: 18,
    marginLeft: 48,
    marginRight: 48,
    marginBottom:32,
    flexDirection: 'column',
    shadowColor: '#002040',
    shadowOpacity: 0.08,
    shadowRadius: 25,
    borderWidth: 1,
    borderColor: 'rgba(0,60,120,0.08)',
  },
  searchRow: {
    marginTop : 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    marginTop: 2,
  },
  searchInput: {
    flex: 1,
    color: '#3b4e62',
    paddingVertical: 14,
    fontSize: 16,
  },
  controlsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  filterChip: {
    backgroundColor: '#eef3f9',
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 1,
    marginRight: 12,
  },
  filterText: {
    fontSize: 14,
    fontWeight: '600',
  },
  filterTextActive: {
    color: 'white',
  },
  filterTextInactive: {
    color: '#1e3b5a',
  },
  pickerWrapper: {
    backgroundColor: '#eef3f9',
    borderRadius: 40,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom:20,
    flex: 1,
  },
  picker: {
    height: 40,
    color: '#1e3b5a',
  },
  pickerItem: {
    color: '#1e3b5a',
  },
});
