import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, View, Button, Pressable, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SettingScreen = (props) => {
  const {navigation} = props;

  const handleLogout = () => {
    // Clear user data (if any, e.g., AsyncStorage)
    // AsyncStorage.clear();

    // Navigate to login screen
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Setting</Text>
      <Pressable style={styles.option} onPress={() => navigation.navigate('PersonalDetails')}>
        <Image source={require('./item/history.png')} style={styles.icon} />
        <Text style={styles.optionText}>Personal Details</Text>
      </Pressable>
      <Pressable style={styles.option} onPress={() => navigation.navigate('Profile')}>
        <Image source={require('./item/account.png')} style={styles.icon} />
        <Text style={styles.optionText}>Personal Details</Text>
      </Pressable>
      <Pressable style={styles.option}>
        <Image source={require('./item/location.png')} style={styles.icon} />
        <Text style={styles.optionText}>Address</Text>
      </Pressable>
      <Pressable style={styles.option}>
        <Image source={require('./item/payment.png')} style={styles.icon} />
        <Text style={styles.optionText}>Payment Method</Text>
      </Pressable>
      <Pressable style={styles.option}>
        <Image source={require('./item/about.png')} style={styles.icon} />
        <Text style={styles.optionText}>About</Text>
      </Pressable>
      <Pressable style={styles.option}>
        <Image source={require('./item/help.png')} style={styles.icon} />
        <Text style={styles.optionText}>Help</Text>
      </Pressable>
      <Pressable style={styles.option} onPress={handleLogout}>
        <Image source={require('./item/logout.png')} style={styles.icon} />
        <Text style={styles.optionText}>Log out</Text>
      </Pressable>

    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  header: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  optionText: {
    color: '#fff',
    fontSize: 18,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 450,
  },
  menuIcon: {
    width: 40,
    height: 40,
  },
});
