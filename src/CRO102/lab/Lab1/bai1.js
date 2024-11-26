import {  ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TextCus from './TextCus'
import AppStyle from './AppStyle'
const lab1 = () => {
  return (
    <View style={AppStyle.Container} >
      <Text style={AppStyle.Title}>
        Lịch Trình
        </Text>

    <TextCus/>
      
      <Text style={AppStyle.Title}>
        Lịch Trình
        </Text>

        <View style={AppStyle.Container1}>
        <Text style={AppStyle.TextXam}>
            Tên khách sạn
        </Text>
        <Text style={AppStyle.TextDen}>
            Hông Quỳnh
        </Text>

        <Text style={AppStyle.TextXam}>
            Giờ mở cửa
        </Text>
        <Text style={AppStyle.TextDen}>
            06:00 AM - 12:00 AM
        </Text>

        <Text style={AppStyle.TextXam}>
            Địa Điểm
        </Text>
        <Text style={AppStyle.TextDen}>
            234 Quang Trung, Hồ Chí Minh
        </Text>
        <TouchableOpacity
            style = {AppStyle.button}>
        <Text style={AppStyle.ChiTiet}>Chi Tiết</Text>
    </TouchableOpacity>

      </View>
    </View>
  )
}

export default lab1

