import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

export default function ScrollviewData() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>📜 Stylish Scroll List</Text>

      {/* List Items */}
      {Array.from({ length: 10 }).map((_, index) => (
        <View key={index} style={styles.itemBox}>
          <Text style={styles.itemText}>Item {index + 1}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#f0f4f7',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  itemBox: {
    backgroundColor: '#4da6ff',
    padding: 15,
    marginBottom: 12,
    borderRadius: 10,
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  itemText: {
    color: 'white',
    fontSize: 18,
  },
});
