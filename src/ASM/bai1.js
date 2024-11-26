import { Image, StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const bai1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.box1}>
      
      <View style={styles.boxIMG}>

      
    <Image
    source={require('./item/item1.png')} // Đường dẫn đến hình ảnh của bạn

    style={styles.image}
    />
</View>
<Pressable style={styles.TextInput3} onPress={()=> navigation.navigate('Bai2')}>
        

        <Text style={styles.Text5}>
          Sign in with Google
        </Text>
      </Pressable>
    </View>
  )
}

export default bai1

const styles = StyleSheet.create({
    box1:{
        width:415,
        height:812,
        backgroundColor:'black',
        left:0,
    },

    image: {
        width: 200, 
        height: 200,
      },

      boxIMG:{
        alignItems:'center',
        justifyContent:'center',
        flex:1
      }
})