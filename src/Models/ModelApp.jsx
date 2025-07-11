import React, { useState } from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

const ModelApp = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="Open Modal" onPress={() => setModalVisible(true)} />

      <Modal
        animationType="slide" // "none", "slide", or "fade"
        transparent={true}    // Makes the modal background transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} // Android back button
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>This is a Modal!</Text>
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModelApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // dim background
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContent: {
    width: 300,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18
  }
});
