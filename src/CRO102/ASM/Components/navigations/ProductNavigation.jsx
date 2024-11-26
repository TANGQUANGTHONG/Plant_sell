import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import Profile from '../User/Profile';
import Home from '../Products/HomeScreen';
import ProductList from '../Products/ProductList';
import Search from '../Products/Search';
import Notification from '../Products/Notifications';
import Detail from '../Products/Detail';
import QandA from '../Products/QandA';
import EditProfile from '../User/EditProfile';
import CartScreen from '../Products/CartScreen';


const StackProfile = createNativeStackNavigator();
const ProfileNavigation = () => {
  return (
    <StackProfile.Navigator screenOptions={{ headerShown: false }} initialRouteName='Profile'>
      <StackProfile.Screen name="Profile" component={Profile} />
      <StackProfile.Screen name="QandA" component={QandA} />
      <StackProfile.Screen name="EditProfile" component={EditProfile} />
    </StackProfile.Navigator>
  )
}

const Tab = createBottomTabNavigator();
const TabHome = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
        <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Image
            source={require('../item/home.png')}
            style={{ width: size, height: size, tintColor: color }}
          />
        ),
      }}
    />
       <Tab.Screen
      name="Search"
      component={Search}
      options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({ color, size }) => (
          <Image
            source={require('../item/find.png')}
            style={{ width: size, height: size, tintColor: color }}
          />
        ),
      }}
    />
        <Tab.Screen
      name="Notification"
      component={Notification}
      options={{
        tabBarLabel: 'Updates',
        tabBarIcon: ({ color, size }) => (
          <Image
          source={require('../item/notification.png')}
          style={{ width: size, height: size, tintColor: color }}
        />
        ),
      }}
    />
      <Tab.Screen
      name="Profile"
      component={ProfileNavigation}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <Image
          source={require('../item/Profile.png')}
          style={{ width: size, height: size, tintColor: color }}
        />
        ),
      }}
    />
    </Tab.Navigator>
  )
}

const StackHome = createNativeStackNavigator();
const ProductNavigation = () => {
  return (
    <StackHome.Navigator screenOptions={{ headerShown: false }} initialRouteName='TabHome'>
      <StackHome.Screen name="TabHome" component={TabHome} />
      <StackHome.Screen name="Detail" component={Detail} />
      <StackHome.Screen name="ProductList" component={ProductList} />
      <StackHome.Screen name="ProfileNavigation" component={ProfileNavigation} />
      <StackHome.Screen name="CartScreen" component={CartScreen} />
    </StackHome.Navigator>
    
  )
}

export default ProductNavigation;
