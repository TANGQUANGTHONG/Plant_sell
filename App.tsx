import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider } from 'react-redux';
import { store, persistor } from './src/CRO102/ASM/Components/rtk/Store';
import { PersistGate } from 'redux-persist/integration/react';

import Bai6 from './src/CRO102/Demo/interpolate';
import Bai1 from './src/CRO102/lab/lab3/Bai3';
import Main_React2 from './src/CRO102/lab/Main_React2';
import Bottom from './src/CRO102/ASM/Components/Products/BottomTab';

import AppNavigation from './src/CRO102/ASM/Components/navigations/AppNavigation';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
    <AppNavigation/>
    </PersistGate>
    </Provider>
  );
}


export default App;
