import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import axios from 'react-native-axios';
import { appcontext } from './appcontext';


const bai2 = (props) => {
  const {navigation} = props;
  const [UserName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const {setEmail} = useContext(appcontext);

  const validateEmail = (UserName) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(UserName);
};

const login = () => {
    if (!validateEmail(UserName)) {
        Alert.alert('Lỗi', 'Email không hợp lệ.');
        return;
    }

    if (password.length === 0) {
        Alert.alert('Lỗi', 'Mật khẩu không được để trống.');
        return;
    }

    
    axios.post('https://cro10z1-b166e76cc76a.herokuapp.com/users/login', {
            email: UserName,
            password: password,
        })
        .then(function (response) {
          if (response.data.status == true) {
            navigation.navigate('HOME');
            setEmail(UserName);
          } else {
            
          }
            
        })
        .catch(function (error) {
            console.log(error);
            Alert.alert('Lỗi', 'Đăng nhập thất bại. Vui lòng thử lại.');
        });
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
          Login to Continue
        </Text>
        <TextInput 
          style={styles.TextInput1} 
          placeholder='Email Address' 
          keyboardType="email-address"
          placeholderTextColor="#828282"
          onChangeText={(setUserName)}
        />
        <TextInput 
          style={styles.TextInput1} 
          placeholder='Password' 
          onChangeText={setPassword}
          placeholderTextColor="#828282"
          secureTextEntry={true}
        />
        <Pressable style={styles.TextInput2} onPress={() => login()}>
          <Text style={styles.Text4}>
            Sign in
          </Text>
        </Pressable>

        <Pressable style={styles.TextInput3}>
        

          <Text style={styles.Text5}>
          <Image 
        source={require('./item/icon_google.png')}
        style={styles.image1}
        />
            Sign in with Google
          </Text>
        </Pressable>

        <Text style={styles.Text2}>
        Don’t have account? 

        <Pressable onPress={() => navigation.navigate('Register')}>
        <Text style={{color:'#D17842'}}>
        Click Register
        
          </Text></Pressable>
        </Text>

        <Text style={styles.Text2}>
        Forget Password?   
        <Text style={{color:'#D17842'}}>
         Click Reset
        </Text>
        </Text>

      </View>
    </View>
  )
}

export default bai2

const styles = StyleSheet.create({
  box1: {
    width: 415,
    height: 812,
    backgroundColor: 'black',
    left: 0,
  },
  image: {
    width: 142,
    height: 142,
  },
  image1: {
    width: 15,
    height: 15,
    
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
    color: 'white', // Đảm bảo màu chữ bên trong input là màu trắng để dễ nhìn
  },
  TextInput2: {
    margin: 10,
    width: 348,
    padding: 10,
    borderWidth: 1,
    backgroundColor: '#D17842',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  TextInput3: {
    margin: 10,
    width: 348,
    padding: 10,
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxIMG: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 81,
    flex: 1,
  }
})
