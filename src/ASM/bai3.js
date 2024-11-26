import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import axios from 'react-native-axios';

const bai3 = (props) => {
  const {navigation} = props;
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [fullName, setFullName] = useState('');

  const Dangky = () => {
      // Kiểm tra nếu email không hợp lệ
      if (!validateEmail(email)) {
          console.log("Email không hợp lệ");
          return;
      }
      // Gửi yêu cầu đăng ký
      axios.post("https://cro101-b166e76cc76a.herokuapp.com/users/register", {
          email: email,
          password: pass,
          name: fullName
      })
      .then(function (response) {
          console.log("HTTP Status" + response.status);
          console.log("Data" + response.data);
          console.log("Data ben trong" + response.data.status);
  
          console.log("Data returned from API:", response.data);
          navigation.navigate('Login');
      })
      .catch(function (error) {
          console.log(error);
      });
  };
    // Hàm kiểm tra email
    const validateEmail = (email) => {
      // Sử dụng một biểu thức chính quy đơn giản để kiểm tra
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <View style={styles.box1}>
      <View style={styles.boxIMG}>  
        <Image  
          source={require('./item/item1.png')}
          style={styles.image}
        />
        <Text style={styles.Text1}>
          Welcome to Lungo !!
        </Text>
        <Text style={styles.Text2}>
          Register to Continue
        </Text>
        <TextInput 
          style={styles.TextInput1} 
          placeholder='Name' 
          onChangeText={(text) => setFullName(text)}
          placeholderTextColor="#828282"
        />
        <TextInput 
          style={styles.TextInput1} 
          placeholder='Email' 
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          placeholderTextColor="#828282"
        />
        <View style={styles.PassInput}>
          <TextInput 
            style={styles.IconInput} 
            placeholder='Password' 
            placeholderTextColor="#828282"
            secureTextEntry={true}
            onChangeText={(text) => setPass(text)}
          />
          <Image 
            source={require('./item/mat.png')} 
            style={styles.icon} 
          />
        </View>
        <View style={styles.PassInput}>
          <TextInput 
            style={styles.IconInput} 
            placeholder='Re-type password' 
            placeholderTextColor="#828282"
            secureTextEntry={true}   
          />
          <Image 
            source={require('./item/mat.png')} 
            style={styles.icon} 
          />
        </View>
        <Pressable style={styles.TextInput2} onPress={() => Dangky()}>
          <Text style={styles.Text4}>
            Sign in
          </Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Login')}>
        <Text style={styles.Text2}>
          You have an account? <Text style={{color:'#D17842'}}>Click Login</Text>
        </Text>
        </Pressable>
      </View>
    </View>
  )
}

export default bai3

const styles = StyleSheet.create({
  box1: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    paddingHorizontal: 10,
  },
  image: {
    width: 142,
    height: 142,
  },
  Text1: {
    fontSize: 16,
    color: 'white',
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
  Text4: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    textAlign: 'center',
  },
  TextInput1: {
    margin: 10,
    width: '90%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#252A32',
    borderRadius: 8,
    color: 'white',
  },
  TextInput2: {
    margin: 10,
    width: '90%',
    padding: 10,
    borderWidth: 1,
    backgroundColor: '#D17842',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxIMG: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 81,
    flex: 1,
  },
  PassInput: {
    margin: 10,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#252A32',
    borderRadius: 8,
  },
  IconInput: {
    flex: 1,
    padding: 10,
    color: 'white',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
})
