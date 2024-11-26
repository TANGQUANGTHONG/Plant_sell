import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppStyle from './AppStyle'

const Button = ({title, onPress}) => {
  return (
    <View>
    <TouchableOpacity
     style = {AppStyle.Button}
      onPress={onPress}>
        <Text style = {AppStyle.ButtonText}>{title}</Text>
    </TouchableOpacity>
    </View>
  )
}

export default Button;
