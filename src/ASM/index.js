import React from 'react';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppConTextProvider } from './appcontext'; // Import appcontextProvider từ tệp appcontext
import bai1 from './bai1';
import bai2 from './bai2';
import bai3 from './bai3';
import bai4 from './bai4';
import bai5 from './bai5';
import bai6 from './bai6';
import Profile from './Profile';
import Setting from './Setting';
import ProductDetails from './ProductDetails';


enableScreens();

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <AppConTextProvider> 
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name='hi' component={bai1} options={{ headerShown: false }} />
          <Stack.Screen name='Login' component={bai2} options={{ headerShown: false }} />
          <Stack.Screen name='Register' component={bai3} options={{ headerShown: false }} />
          <Stack.Screen name='HOME' component={bai4} options={{ headerShown: false }} />
          <Stack.Screen name='RV' component={bai5} options={{ headerShown: false }} />
          <Stack.Screen name='Cart' component={bai6} options={{ headerShown: false }} />
          <Stack.Screen name='Setting' component={Setting} options={{ headerShown: false }} />
          <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
          <Stack.Screen name='ProductDetails' component={ProductDetails} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppConTextProvider>
  );
};

export default App;
