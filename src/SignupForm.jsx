// import React, { useState } from "react";
// import { SafeAreaView, Text, TextInput, TouchableOpacity, StyleSheet, View } from "react-native";

// const SignupForm = () => {
//   const [input, setInput] = useState({
//     fullname: "",
//     phone: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (name, value) => {
//     setInput((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSignUp = () => {
//     console.log("Form Data:", input);
//     setInput("")
//     // You can add Toast or validation here
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.heading}>Create new account</Text>

// <Text >Create new account</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Full Name"
//         placeholderTextColor="#999"
//         value={input.fullname}
//         onChangeText={(text) => handleChange("fullname", text)}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Phone Number"
//         placeholderTextColor="#999"
//         keyboardType="phone-pad"
//         value={input.phone}
//         onChangeText={(text) => handleChange("phone", text)}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="E-mail Address"
//         placeholderTextColor="#999"
//         keyboardType="email-address"
//         value={input.email}
//         onChangeText={(text) => handleChange("email", text)}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         placeholderTextColor="#999"
//         secureTextEntry
//         value={input.password}
//         onChangeText={(text) => handleChange("password", text)}
//       />

//      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
//   <Text style={styles.buttonText}>Sign Up</Text>
// </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// export default SignupForm;

// const styles = StyleSheet.create({
//   container: {

//     marginTop:400,
//     flex: 1,
//     padding: 24,
//     backgroundColor: "#fff",
//     justifyContent: "center",
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: "700",
//     color: "#ff4d4d",
//     marginBottom: 30,
//     alignSelf: "center",
//   },
//   input: {
//     height: 50,
//     borderColor: "#ccc",
//     borderWidth: 1,
//     borderRadius: 25,
//     paddingHorizontal: 20,
//     fontSize: 16,
//     marginBottom: 15,
//     backgroundColor: "#fff",
//   },
// button: {
//   backgroundColor: "#ff4d4d",
//   borderRadius: 25,
//   paddingVertical: 15,
//   alignItems: "center",
//   marginTop: 10,
// },

// buttonText: {
//   color: "white", // ✅ ध्यान दो कि यह string है, quotes में होना ज़रूरी है
//   fontWeight: "600",
//   fontSize: 16,
// },

// });


import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
         <Text style={styles.heading}>Create new account</Text>
      <TextInput style={styles.input} placeholder="Full Name" />
      <TextInput style={styles.input} placeholder="Phone Number" keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="E-mail Address" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />

      <TouchableOpacity style={styles.button} onPress={() => console.log("Sign Up pressed")}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 100,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 15,
    marginBottom: 15,
    borderRadius: 30,
  },

   heading: {
    fontSize: 24,
    fontWeight: "700",
    color: "#ff4d4d",
    marginBottom: 30,
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#ff4d4d",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 30,
  },
  buttonText: {
    color: "white",        // ✅ Very important
    fontSize: 16,
    fontWeight: "600",
  }
});
