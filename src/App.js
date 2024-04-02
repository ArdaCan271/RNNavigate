import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { HomeScreen, } from '@/screens';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store/store';
import Navigation from './navigator/navigator';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
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