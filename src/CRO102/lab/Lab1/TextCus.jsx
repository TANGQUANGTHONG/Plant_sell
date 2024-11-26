import {Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppStyle from './AppStyle'

const TextCus = () => {
  return (
    <View style={AppStyle.Container1}>
    <Text style={AppStyle.TextXam}>
        Địa Điểm
    </Text>
    <Text style={AppStyle.TextDen}>
        Hồ Tràm, Vũng Tàu
    </Text>

    <Text style={AppStyle.TextXam}>
        Thời gian
    </Text>
    <Text style={AppStyle.TextDen}>
        09:00 AM - 12:00 AM, 12/12/2024
    </Text>

    <Text style={AppStyle.TextXam}>
        Phương tiện duy chuyển
    </Text>
    <Text style={AppStyle.TextDen}>
        Xe bus
    </Text>

    <Text style={AppStyle.TextXam}>
        Thời gian
    </Text>
    <Text style={AppStyle.TextDen}>
        21:00 - 23:00
    </Text>
    
    <Text style={AppStyle.TextXam}>
        Hình ảnh
    </Text>
    <Image 
    source={require('./bien.png')}
    style={AppStyle.img}
    />
  </View>

  
  )
}

export default TextCus
