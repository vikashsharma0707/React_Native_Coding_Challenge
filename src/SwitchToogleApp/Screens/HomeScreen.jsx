v// screens/HomeScreen.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomSwitch from '../Components/CostomSwitch';
import ToggleButton from '../Components/ToogleButton';

const HomeScreen = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isToggleOn, setIsToggleOn] = useState(false);

  return (
    <View style={styles.container}>
      <CustomSwitch
        isEnabled={isSwitchOn}
        onToggle={() => setIsSwitchOn(previousState => !previousState)}
      />

      <ToggleButton
        isOn={isToggleOn}
        onPress={() => setIsToggleOn(prev => !prev)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default HomeScreen;
