import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { register } from '../rtk/API'; // Đảm bảo đường dẫn đúng đến file API

const Register = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [UserName, setUserName] = useState('');
  const [PassWord, setPassWord] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [Address, setAddress] = useState('');

  const handleRegister = () => {
    dispatch(register({ UserName, PassWord, Email, Phone, Address }))
      .then((result) => {
        if (result.meta.requestStatus === 'fulfilled') {
          // Điều hướng đến màn hình đăng nhập sau khi đăng ký thành công
          navigation.navigate('Login');
        } else {
          Alert.alert('Lỗi', 'Đăng ký thất bại. Vui lòng kiểm tra lại thông tin.');
        }
      })
      .catch(() => {
        Alert.alert('Lỗi', 'Đăng ký thất bại. Vui lòng thử lại.');
      });
  };

  return (
    <View style={styles.box1}>
      <View style={styles.boxIMG}>
        <Image  
          source={require('../item/cayLogin.png')}
          style={styles.image}
        />

        <Text style={styles.Text1}>Đăng ký</Text>
        <Text style={styles.Text2}>Tạo tài khoản</Text>

        <TextInput 
          style={styles.TextInput1} 
          placeholder='Họ tên' 
          placeholderTextColor="#828282" 
          onChangeText={setUserName}
        />

        <TextInput 
          style={styles.TextInput1} 
          placeholder='Email' 
          keyboardType='email-address'
          placeholderTextColor="#828282"
          onChangeText={setEmail}
        />
          
        <TextInput 
          style={styles.TextInput1} 
          placeholder='Mật khẩu' 
          placeholderTextColor="#828282"
          secureTextEntry={true}
          onChangeText={setPassWord}
        />

        <TextInput 
          style={styles.TextInput1} 
          placeholder='Số điện thoại' 
          keyboardType='number-pad'
          placeholderTextColor="#828282"
          onChangeText={setPhone}
        />

        <TextInput 
          style={styles.TextInput1} 
          placeholder='Địa chỉ' 
          placeholderTextColor="#828282"
          onChangeText={setAddress}
        />

        <View style={styles.BenDuoiPassInputDuocCanGiua}>
          <Text style={styles.text}>
            Để đăng ký tài khoản, bạn đồng ý{' '}
            <Text style={styles.link}>Terms & Conditions</Text>{' '}
            and{' '}
            <Text style={styles.link}>Privacy Policy</Text>
          </Text>
        </View>

        <Pressable style={styles.TextInput2} onPress={handleRegister}>
          <Text style={styles.Text4}>Đăng ký</Text>
        </Pressable>

        <Text style={styles.Text2}>
          --------------  Hoặc  --------------
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
          Tôi đã có tài khoản {' '}
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Đăng nhập</Text>
          </Pressable>
        </Text>
      </View>
    </View>
  );
}

export default Register;

const styles = StyleSheet.create({
  box1: {
    flex: 1,
    backgroundColor: 'white',
    left: 0,
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
    fontSize: 18,
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
  BenDuoiPassInputDuocCanGiua: {
    padding: 10,
    alignItems: 'center', // Căn giữa theo chiều ngang
    justifyContent: 'center', // Căn giữa theo chiều dọc
  },
  text: {
    color: 'black',
    textAlign: 'center', // Căn giữa nội dung văn bản
  },
  link: {
    color: 'green',
    textDecorationLine: 'underline',
  },
  boxIMG: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 81,
    flex: 1,
  }
});
