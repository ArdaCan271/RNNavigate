import { Platform, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { HomeScreen, } from '@/screens';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store/store';
import Navigation from './navigator/navigator';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

const App = () => {

  useEffect(() => {
    if(Platform.OS === 'android'){
      SplashScreen.hide();
    }
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({});