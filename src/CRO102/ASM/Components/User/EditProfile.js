import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile, editUserProfile } from '../rtk/API';

const EditProfile = ({ navigation }) => {
  const dispatch = useDispatch();
  const { user, status, error } = useSelector(state => state.app);
  const [UserName, setUserName] = useState('');
  const [Email, setEmail] = useState('');
  const [PassWord, setPassWord] = useState('');

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  useEffect(() => {
    if (status === 'succeeded' && user) {
      setUserName(user.UserName || '');
      setEmail(user.Email || '');
    }
  }, [status, user]);

  useEffect(() => {
    if (status === 'failed' && error) {
      Alert.alert('Lỗi', error.message || 'Không thể lấy thông tin người dùng.');
    }
  }, [status, error]);

  const handleEditProfile = () => {
    const userProfile = { UserName, Email, PassWord };
    dispatch(editUserProfile(userProfile))
      .then((result) => {
        if (result.meta.requestStatus === 'fulfilled') {
          Alert.alert('Thành công', 'Cập nhật hồ sơ thành công.');
          navigation.goBack();
        } else {
          Alert.alert('Lỗi', 'Cập nhật hồ sơ thất bại.');
        }
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Chỉnh sửa hồ sơ</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Tên</Text>
        <TextInput
          style={styles.input}
          value={UserName}
          onChangeText={setUserName}
          placeholder="Nhập tên của bạn"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={Email}
          onChangeText={setEmail}
          placeholder="Nhập email của bạn"
          keyboardType="email-address"
          editable={false} // Không cho phép sửa email
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Mật khẩu</Text>
        <TextInput
          style={styles.input}
          value={PassWord}
          onChangeText={setPassWord}
          placeholder="Nhập mật khẩu của bạn (nếu cần)"
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
        <Text style={styles.buttonText}>Lưu</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
  },
  button: {
    height: 40,
    backgroundColor: '#009245',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditProfile;
