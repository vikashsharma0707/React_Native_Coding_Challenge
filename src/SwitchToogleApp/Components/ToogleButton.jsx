// components/ToggleButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ToggleButton = ({ isOn, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: isOn ? 'green' : 'gray' }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{isOn ? 'ON' : 'OFF'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 16
  }
});

export default ToggleButton;
