// // // // import { View } from "react-native"
// // // // import Counter from "./src/Counter";
// // // // import SignupForm from "./src/SignupForm";
// // // // import AlertBox from "./src/Alert/AlertBox";
// // // // import ToastMessage from "./src/Alert/ToastMessage";

import { View } from "react-native"
import AsyncStorage from "./src/AsyncStorage/AsyncStorage";
import AsyncStorageDemo from "./src/AsyncStorage/AsyncStorage";
import ScrollviewData from "./src/Scrollview/ScrollviewData";
import StylesheetData from "./src/components/StylesheetData";








// // // // const App=()=>{
// // // //   return(
// // // //     <View>
// // // // {/* <Counter/> */}
// // // // {/* <SignupForm/> */}

// // // //     </View>
// // // //   )
// // // // }

// // // // export default App;


// // // // App.jsx or AlertBox.jsx

// // // import React from 'react';
// // // import { View, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
// // // import Toast from 'react-native-toast-message';

// // // const App = () => {
// // //   const showToast = () => {
// // //     Toast.show({
// // //       type: 'success',
// // //       text1: 'Toast Message 🎉',
// // //       text2: 'This is a React Native toast!',
// // //       position: 'top',
// // //     });
// // //   };

// // //   const showAlert = () => {
// // //     Alert.alert(
// // //       'Confirmation ⚠️',
// // //       'Do you want to continue?',
// // //       [
// // //         {
// // //           text: 'Cancel',
// // //           onPress: () => console.log('Cancel Pressed'),
// // //           style: 'cancel',
// // //         },
// // //         {
// // //           text: 'OK',
// // //           onPress: () => console.log('OK Pressed'),
// // //         },
// // //       ],
// // //       { cancelable: true }
// // //     );
// // //   };

// // //   return (
// // //     <View style={styles.container}>

// // //     <Text style={styles.heading}>Alert and Toast Message</Text>

// // //       {/* Toast Button */}
// // //       <TouchableOpacity style={styles.toastBtn} onPress={showToast}>
// // //         <Text style={styles.btnText}>Show Toast</Text>
// // //       </TouchableOpacity>

// // //       {/* Alert Button */}
// // //       <TouchableOpacity style={styles.alertBtn} onPress={showAlert}>
// // //         <Text style={styles.btnText}>Show Alert</Text>
// // //       </TouchableOpacity>

// // //       <Toast />
// // //     </View>
// // //   );
// // // };

// // // export default App;

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     marginTop: 200,
// // //     flex: 1,
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     gap: 20,
// // //   },

// // //   heading: {
// // //   fontSize: 24,
// // //   fontWeight: 'bold',
// // //   textAlign: 'center',
// // //   color: '#007bff',
// // //   marginBottom: 30,
// // //   textTransform: 'uppercase',
// // //   letterSpacing: 1,
// // //   textShadowColor: 'rgba(0, 0, 0, 0.2)',
// // //   textShadowOffset: { width: 2, height: 2 },
// // //   textShadowRadius: 2,
// // // },

// // //   toastBtn: {
// // //     backgroundColor: '#28a745',
// // //     paddingVertical: 12,
// // //     paddingHorizontal: 25,
// // //     borderRadius: 8,
// // //   },
// // //   alertBtn: {
// // //     backgroundColor: '#dc3545',
// // //     paddingVertical: 12,
// // //     paddingHorizontal: 25,
// // //     borderRadius: 8,
// // //   },
// // //   btnText: {
// // //     color: '#fff',
// // //     fontSize: 16,
// // //     fontWeight: 'bold',
// // //   },
// // // });

// // import React from 'react';
// // import { View, Text, FlatList, StyleSheet } from 'react-native';

// // const fruits = [
// //   { id: '1', name: 'Apple 🍎' },
// //   { id: '2', name: 'Banana 🍌' },
// //   { id: '3', name: 'Grapes 🍇' },
// //   { id: '4', name: 'Mango 🥭' },
// //   { id: '5', name: 'Pineapple 🍍' },
// //   { id: '6', name: 'Orange 🍊' },
// // ];

// // const App = () => {
// //   const renderItem = ({ item }) => (
// //     <View style={styles.card}>
// //       <Text style={styles.text}>{item.name}</Text>
// //     </View>
// //   );

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Flaglist in Recat Native</Text>
// //       <Text style={styles.title}>🍇 Vertical Fruit List</Text>
// //       <FlatList
// //         data={fruits}
// //         renderItem={renderItem}
// //         keyExtractor={(item) => item.id}
// //       />

// //       <Text style={styles.title}>🍍 Horizontal Fruit List</Text>
// //       <FlatList
// //         data={fruits}
// //         renderItem={renderItem}
// //         keyExtractor={(item) => item.id}
// //         horizontal
// //         showsHorizontalScrollIndicator={false}
// //       />
// //     </View>
// //   );
// // };

// // export default App;

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 20,
// //     paddingTop: 40,
// //     backgroundColor: '#f9f9f9',
// //   },
// //   title: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     marginVertical: 10,
// //     color: '#333',
// //   },
// //   card: {
// //     backgroundColor: '#fff',
// //     padding: 15,
// //     margin: 5,
// //     borderRadius: 8,
// //     elevation: 3,
// //     minWidth: 100,
// //     alignItems: 'center',
// //   },
// //   text: {
// //     fontSize: 18,
// //     color: '#555',
// //   },
// // });




// import React, { useState } from 'react';
// import { Modal, View, Text, Button, StyleSheet } from 'react-native';

// const App = () => {
//   const [modalVisible, setModalVisible] = useState(false);

//   return (
//     <View style={styles.container}>
//       <Button title="Open Modal" onPress={() => setModalVisible(true)} />

//       <Modal
//         animationType="slide" // "none", "slide", or "fade"
//         transparent={true}    // Makes the modal background transparent
//         visible={modalVisible}
//         onRequestClose={() => setModalVisible(false)} // Android back button
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalText}>This is a Modal!</Text>
//             <Button title="Close" onPress={() => setModalVisible(false)} />
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0,0,0,0.5)', // dim background
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   modalContent: {
//     width: 300,
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 10,
//     elevation: 5
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center',
//     fontSize: 18
//   }
// });


const App=()=>{
  return(
    <View>
{/* <AsyncStorageDemo/> */}
{/* <ScrollviewData/> */}
<StylesheetData/>
    </View>
  )
}

export default App;