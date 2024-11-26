import { Alert, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../rtk/API'; // Đảm bảo đường dẫn đúng đến file API

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { status, error } = useSelector(state => state.app); // Sử dụng state từ Redux store

  const [Email, setEmail] = useState('');
  const [PassWord, setPassWord] = useState('');

  const handleLogin = () => {
    dispatch(login({ Email, PassWord }))
      .then((result) => {
        if (result.meta.requestStatus === 'fulfilled') {
          // Điều hướng đến màn hình chính sau khi đăng nhập thành công
          navigation.navigate('ProductNavigation');
        } else {
          Alert.alert('Lỗi', 'Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.');
        }
      })
      .catch(() => {
        Alert.alert('Lỗi', 'Đăng nhập thất bại. Vui lòng thử lại.');
      });
  };

  return (
    <View style={styles.box1}>
      <View style={styles.boxIMG}>
        <Image  
          source={require('../item/cayLogin.png')}
          style={styles.image}
        />
        <Text style={styles.Text1}>Chào mừng bạn</Text>
        <Text style={styles.Text2}>Đăng nhập tài khoản</Text>
        <TextInput 
          style={styles.TextInput1} 
          placeholder='Nhập email hoặc số điện thoại' 
          keyboardType="email-address"
          onChangeText={setEmail} 
          placeholderTextColor="#828282" 
        />
        <TextInput 
          style={styles.TextInput1} 
          placeholder='Mật khẩu' 
          placeholderTextColor="#828282"
          onChangeText={setPassWord}
          secureTextEntry={true}
        />
        <View style={styles.BenDuoiPassInput}>
          <Pressable onPress={() => navigation.navigate('Register')}>
            <Text style={{color:'#009245'}}>Nhớ mật khẩu</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Register')}>
            <Text style={{color:'#009245'}}>Forgot Password ?</Text>
          </Pressable>
        </View>
        <Pressable style={styles.TextInput2} onPress={handleLogin}>
          <Text style={styles.Text4}>Đăng nhập</Text>
        </Pressable>
        <Text style={styles.Text2}>
          <View style={styles.horizontalLine} />
          Hoặc  
          <View style={styles.horizontalLine} />
        </Text>
        <Pressable style={styles.TextInput3}>
          <Image 
            source={require('../item/icon_google.png')}
            style={styles.image1}
          />
          <Image 
            source={require('../item/facebook.png')}
            style={styles.image1}
          />
        </Pressable>
        <Text style={styles.Text2}>
          Không có tài khoản ?  {' '} 
          <Pressable onPress={() => navigation.navigate('Register')}>
            <Text style={{color:'#009245'}}>Tạo tài khoản</Text>
          </Pressable>
        </Text>
      </View>
    </View>
  );
}

export default Login

const styles = StyleSheet.create({
  box1: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 100
  },
  image: {
    width: 450,
    height: 350,
    marginTop: -200,
  },
  image1: {
    width: 30,
    height: 30,
  },
  Text1: {
    fontSize: 24,
    color: 'black',
    marginTop: 10,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
  },
  Text2: {
    fontSize: 12,
    color: '#828282',
    marginTop: 10,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
  },
  Text3: {
    fontSize: 14,
    color: '#828282',
    fontWeight: 'bold',
    fontFamily: 'Poppins',
  },
  Text4: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    textAlign: 'center',
  },
  Text5: {
    fontSize: 14,
    color: '#121212',
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    textAlign: 'center',
  },
  TextInput1: {
    margin: 10,
    width: 348,
    padding: 10,
    borderWidth: 1,
    borderColor: '#252A32',
    borderRadius: 8,
    color: 'black',
  },
  TextInput2: {
    margin: 10,
    width: 348,
    padding: 10,
    borderWidth: 1,
    backgroundColor: 'green',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextInput3: {
    margin: 10,
    width: 348,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  BenDuoiPassInput: {
    width: 348,
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boxIMG: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 81,
    flex: 1,
  },
  horizontalLine: {
    width: 100,
    borderBottomColor: '#828282',
    borderBottomWidth: 1,
  }
});
