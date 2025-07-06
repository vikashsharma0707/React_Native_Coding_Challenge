// import { View } from "react-native"
// import Counter from "./src/Counter";
// import SignupForm from "./src/SignupForm";
// import AlertBox from "./src/Alert/AlertBox";
// import ToastMessage from "./src/Alert/ToastMessage";




// const App=()=>{
//   return(
//     <View>
// {/* <Counter/> */}
// {/* <SignupForm/> */}

//     </View>
//   )
// }

// export default App;


// App.jsx or AlertBox.jsx

import React from 'react';
import { View, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';

const App = () => {
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Toast Message 🎉',
      text2: 'This is a React Native toast!',
      position: 'top',
    });
  };

  const showAlert = () => {
    Alert.alert(
      'Confirmation ⚠️',
      'Do you want to continue?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>

    <Text style={styles.heading}>Alert and Toast Message</Text>

      {/* Toast Button */}
      <TouchableOpacity style={styles.toastBtn} onPress={showToast}>
        <Text style={styles.btnText}>Show Toast</Text>
      </TouchableOpacity>

      {/* Alert Button */}
      <TouchableOpacity style={styles.alertBtn} onPress={showAlert}>
        <Text style={styles.btnText}>Show Alert</Text>
      </TouchableOpacity>

      <Toast />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },

  heading: {
  fontSize: 24,
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#007bff',
  marginBottom: 30,
  textTransform: 'uppercase',
  letterSpacing: 1,
  textShadowColor: 'rgba(0, 0, 0, 0.2)',
  textShadowOffset: { width: 2, height: 2 },
  textShadowRadius: 2,
},

  toastBtn: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  alertBtn: {
    backgroundColor: '#dc3545',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
