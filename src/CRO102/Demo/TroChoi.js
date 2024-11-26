import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import AppStyle from '../Custom/AppStyle';

const TroChoi = () => {
  const [diem, setDiem] = useState(0);
  const [caoNhat, setCaoNhat] = useState(0);
  const [soThuNhat, setSoThuNhat] = useState(0);
  const [soThuHai, setSoThuHai] = useState(0);
  const [ketQuas, setKetQuas] = useState([0, 0, 0]);

  useEffect(() => {
    const _soThuNhat = Math.floor(Math.random() * 10);
    const _soThuHai = Math.floor(Math.random() * 10);
    setSoThuNhat(_soThuNhat);
    setSoThuHai(_soThuHai);

    const viTri = Math.floor(Math.random() * 3);
    const results = [Math.floor(Math.random() * 20), Math.floor(Math.random() * 20), Math.floor(Math.random() * 20)];
    results[viTri] = _soThuNhat + _soThuHai;
    setKetQuas(results);
  }, [diem]);

  const onPress = (value) => {
    if (value === soThuHai + soThuNhat) {
      const newScore = diem + 1;
      setDiem(newScore);
      if (newScore > caoNhat) {
        setCaoNhat(newScore);
      }
    } else {
      setDiem(0); 
    }
  };

  return (
    <View style={AppStyle.container}>
      <Text style={AppStyle.text}>Điểm: {diem}</Text>
      <Text style={AppStyle.text}>Điểm cao nhất: {caoNhat}</Text>
      <Text style={AppStyle.text}>{soThuNhat} + {soThuHai} = ?</Text>
      {ketQuas.map((ketQua, index) => (

        <CustomButton key={index} title={ketQua} onPress={() => onPress(ketQua)} />

      ))}
    </View>
  );
};

const CustomButton = ({ title, onPress }) => (
  <TouchableOpacity style={AppStyle.button} onPress={onPress}>
    <Text style={AppStyle.buttonText}>{title}</Text>
  </TouchableOpacity>
);

export default TroChoi;
