import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import Toast from 'react-native-toast-message';
import React from 'react';

const Root = () => (
  <>
    <App />
    <Toast /> {/* Global toast */}
  </>
);

AppRegistry.registerComponent(appName, () => Root);
