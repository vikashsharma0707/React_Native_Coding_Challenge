// components/CustomSwitch.js
import React from 'react';
import { View, Switch, Text, StyleSheet } from 'react-native';

const CustomSwitch = ({ isEnabled, onToggle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Switch is {isEnabled ? 'On' : 'Off'}</Text>
      <Switch
        value={isEnabled}
        onValueChange={onToggle}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20
  },
  label: {
    fontSize: 18,
    marginBottom: 10
  }
});

export default CustomSwitch;
