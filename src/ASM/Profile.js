import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Image, Alert } from 'react-native';
import axios from 'react-native-axios';

const PersonalDetailsScreen = (props) => {
  const { navigation } = props;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');

  const handleSave = async () => {
    if (password !== retypePassword) {
      Alert.alert("Mật khẩu không khớp");
      return;
    }

    const userData = {
      email,
      password,
      name,
    };

    try {
      const response = await axios.post('https://cro101-b166e76cc76a.herokuapp.com/users/update-profile', userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        Alert.alert('Thành công', 'Cập nhật hồ sơ thành công');
        // Xử lý phản hồi thành công
      } else {
        Alert.alert('Lỗi', response.data.message || 'Có lỗi xảy ra');
        // Xử lý phản hồi lỗi
      }
    } catch (error) {
      Alert.alert('Email  sai');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cài đặt</Text>
      <Image source={require('./item/avt.png')} style={styles.avatar} />
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#828282"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#828282"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        placeholderTextColor="#828282"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập lại mật khẩu"
        placeholderTextColor="#828282"
        secureTextEntry
        value={retypePassword}
        onChangeText={setRetypePassword}
      />
      <Button title="Lưu" color="#D17842" onPress={handleSave} />
    </View>
  );
};

export default PersonalDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    alignItems: 'center',
  },
  header: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#252A32',
    color: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
});
