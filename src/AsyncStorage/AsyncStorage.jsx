/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageDemo = () => {
  const [username, setUsername] = useState('');
  const [storedUsername, setStoredUsername] = useState('');

  /* ───── AsyncStorage helpers ───── */
  const saveUsername = async () => {
    if (!username.trim()) {
      Alert.alert('Validation', 'Please enter a username');
      return;
    }
    await AsyncStorage.setItem('username', username.trim());
    setUsername('');
    getUsername();
    Alert.alert('Success', 'Username saved');
  };

  const getUsername = async () => {
    const saved = await AsyncStorage.getItem('username');
    if (saved) setStoredUsername(saved);
    else Alert.alert('Not Found', 'No username stored');
  };

  const removeUsername = async () => {
    await AsyncStorage.removeItem('username');
    setStoredUsername('');
    Alert.alert('Deleted', 'Username removed');
  };

  useEffect(() => {
    getUsername();
  }, []);

  /* ───── UI ───── */
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.card}>
        <Text style={styles.heading}>AsyncStorage Demo</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter username"
          value={username}
          onChangeText={setUsername}
        />

        <Pressable style={styles.btnPrimary} onPress={saveUsername}>
          <Text style={styles.btnText}>Save Username</Text>
        </Pressable>

        <Pressable style={styles.btnSuccess} onPress={getUsername}>
          <Text style={styles.btnText}>Get Username</Text>
        </Pressable>

        <Pressable style={styles.btnDanger} onPress={removeUsername}>
          <Text style={styles.btnText}>Remove Username</Text>
        </Pressable>

        {!!storedUsername && (
          <Text style={styles.result}>
            Stored Username:{' '}
            <Text style={styles.bold}>{storedUsername}</Text>
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default AsyncStorageDemo;

/* ──────────── Styles ──────────── */
const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEF2F6',
    marginTop:200
  },
  card: {
    width: '88%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    elevation: 6,                        // Android shadow
    shadowColor: '#000',                // iOS shadow
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#C5C5C5',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
  },
  /* Buttons */
  btnBase: {
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  btnPrimary: {
    backgroundColor: '#0066FF',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  btnSuccess: {
    backgroundColor: '#28A745',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  btnDanger: {
    backgroundColor: '#DC3545',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  btnText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  result: {
    marginTop: 16,
    fontSize: 16,
    color: '#555',
  },
  bold: {
    fontWeight: 'bold',
    color: '#000',
  },
});
