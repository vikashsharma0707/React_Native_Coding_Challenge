import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const fruits = [
  { id: '1', name: 'Apple 🍎' },
  { id: '2', name: 'Banana 🍌' },
  { id: '3', name: 'Grapes 🍇' },
  { id: '4', name: 'Mango 🥭' },
  { id: '5', name: 'Pineapple 🍍' },
  { id: '6', name: 'Orange 🍊' },
];

const FlagListPage = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍇 Vertical Fruit List</Text>
      <FlatList
        data={fruits}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <Text style={styles.title}>🍍 Horizontal Fruit List</Text>
      <FlatList
        data={fruits}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default FlagListPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    margin: 5,
    borderRadius: 8,
    elevation: 3,
    minWidth: 100,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#555',
  },
});
