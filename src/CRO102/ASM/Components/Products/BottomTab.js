import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as React from 'react';
import { Image } from 'react-native';



import Feed from './HomeScreen';
import Search from './Search';
import Notifications from './Notifications';
import Profile from '../User/Profile';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
    <Tab.Screen
      name="Feed"
      component={Feed}
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
      name="Notifications"
      component={Notifications}
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
      component={Profile}
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
  
  );
}

export default MyTabs;