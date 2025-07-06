// src/Alert/ToastMessage.jsx
import Toast from 'react-native-toast-message';

export const showToast = (type, title, message) => {
  Toast.show({
    type,       // 'success' | 'error' | 'info'
    text1: title,
    text2: message,
    position: 'top',
    visibilityTime: 3000,
    autoHide: true,
    topOffset: 50,
  });
};
