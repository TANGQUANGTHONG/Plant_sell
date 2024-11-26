import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert } from 'react-native';
import axios from 'axios';

const DemoLaiQuiz = () => {
  const [Cau_Hoi, setCau_Hoi] = useState([]);
  const [Vi_Tri_Cau_Hoi, setVi_Tri_Cau_Hoi] = useState(0);
  const [Ket_Qua, setKet_Qua] = useState(false);

  useEffect(() => {
    const CauHoi = async () => {
      try {
        const TraVe = await axios.get('https://chungnhanthamgia.io.vn/questionLv1/getAllQuestion?utm_source=zalo&utm_medium=zalo&utm_campaign=zalo');
        setCau_Hoi(TraVe.data);
      } catch (error) {
        console.error(error);
        Alert.alert('Lỗi', 'Không thể tải dữ liệu.');
      }
    };
    CauHoi();
  }, []);

  const XULYCAUHOI = (isCorrect) => {
    if (Vi_Tri_Cau_Hoi + 1 < Cau_Hoi.length) {
      setVi_Tri_Cau_Hoi(Vi_Tri_Cau_Hoi + 1);
    } else {
      setKet_Qua(true);
    }
  };

  const Cau_Hoi_Hien_Tai = Cau_Hoi[Vi_Tri_Cau_Hoi];

  if (Ket_Qua) {
    return (
      <View style={styles.container}>
        <Text style={styles.resultText}>Bạn đã hoàn thành trò chơi!</Text>
      </View>
    );
  }


  return (
    <View style={styles.container}>
      <Text style={styles.question}>{Cau_Hoi_Hien_Tai.question}</Text>
      {Cau_Hoi_Hien_Tai.answers.map((answer) => (
        <TouchableOpacity
          key={answer._id}
          style={styles.button}
          onPress={() => XULYCAUHOI(answer.isCorrect)}
        >
          <Text style={styles.buttonText}>{answer.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default DemoLaiQuiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  question: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  loadingText: {
    fontSize: 18,
    textAlign: 'center',
  },
  resultText: {
    fontSize: 20,
    textAlign: 'center',
  },
});
