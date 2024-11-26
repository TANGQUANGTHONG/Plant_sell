import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Bai_Lab1 from './Lab1/bai1';
import Bai2_Lab1 from './Lab1/bai2';
import Bai2 from './lab2/Main';
import Bai1_Lab3 from './lab3/Bai1';
import Bai2_Lab3 from './lab3/Bai2';
import Bai3_Lab3 from './lab3/Bai3';
import Bai3_Lab4 from './lab3/Bai4';

import Main_Screen from './Main_Screen';
import Main_ASM from '../ASM/Components/User/Login';

import Register from '../ASM/Components/User/Register'
import HomeScreen from '../ASM/Components/Products/HomeScreen';
import Search from '../ASM/Components/Products/Search'
import Detail from '../ASM/Components/Products/Detail'
import ProductList from '../ASM/Components/Products/ProductList';


const Stack = createNativeStackNavigator();


const Main_React2 = () => {
    return (
      <NavigationContainer>
            <Stack.Navigator initialRouteName='MainScreen'>
                <Stack.Screen
                    name='Lab1Bai1'
                    component={Bai_Lab1}
                />
                  <Stack.Screen
                    name='Lab1Bai2'
                    component={Bai2_Lab1}
                />
                  <Stack.Screen
                    name='Lab2Bai1'
                    component={Bai2}
                />
                  <Stack.Screen
                    name='Lab3Bai1'
                    component={Bai1_Lab3}
                />
                  <Stack.Screen
                    name='Lab3Bai2'
                    component={Bai2_Lab3}
                />
                  <Stack.Screen
                    name='Lab3Bai3'
                    component={Bai3_Lab3}
                />
                   <Stack.Screen
                    name='Lab3Bai4'
                    component={Bai3_Lab4}
                />
                 <Stack.Screen
                    name='ASM'
                    component={Main_ASM}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name='MainScreen'
                    component={Main_Screen}
                    options={{headerShown: false}}
                />
                            <Stack.Screen name='Register' component={Register} options={{headerShown: false}}/>
            <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name='Search' component={Search} options={{headerShown: false}}/>
            <Stack.Screen name='Product' component={ProductList} options={{headerShown: false}}/>
            <Stack.Screen name='Detail' component={Detail} options={{headerShown: false}}/>


            </Stack.Navigator>
            </NavigationContainer>
    )
}

export default Main_React2

