import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert } from 'react-native';
import axios from 'react-native-axios';

const TracNghiem = () => {

    
    const [Cau_Hoi, setCau_Hoi] = useState([]);
    const [Vi_Tri_Cau_Hoi, setVi_Tri_Cau_Hoi] = useState(0);
    const [Diem, setDiem] = useState(0);
    const [Ket_Qua, setKet_Qua] = useState(false);


    useEffect(() => {
        const fetchCau_Hoi = async () => {
          try {
            const response = await axios.get('https://chungnhanthamgia.io.vn/questionLv1/getAllQuestion?utm_source=zalo&utm_medium=zalo&utm_campaign=zalo');
            setCau_Hoi(response.data);
          } catch (error) {
            console.error('Failed to fetch Cau_Hoi:', error);
            Alert.alert('Lỗi', 'Không thể tải dữ liệu câu hỏi.');
          }
        };
    
        fetchCau_Hoi();
      }, []);
    
      const XULYCAUHOI = (isCorrect) => {
        if (isCorrect) {
          setDiem(Diem + 1);
        }
    
        if (Vi_Tri_Cau_Hoi + 1 < Cau_Hoi.length) {
          setVi_Tri_Cau_Hoi(Vi_Tri_Cau_Hoi + 1);
        } else {
          setKet_Qua(true);
        }
      };
    
      if (Cau_Hoi.length === 0) {
        return (
          <View style={styles.container}>
            <Text style={styles.loadingText}>Đang tải câu hỏi...</Text>
          </View>
        );
      }
    
      if (Ket_Qua) {
        return (
          <View style={styles.container}>
            <Text style={styles.resultText}>Bạn đã hoàn thành trò chơi!</Text>
          </View>
        );
      }
    
      const Cau_Hoi_Hien_Tai = Cau_Hoi[Vi_Tri_Cau_Hoi];
    
      return (
        <View style={styles.container}>
          <Text style={styles.question}>{Cau_Hoi_Hien_Tai.question}</Text>
          {Cau_Hoi_Hien_Tai.answers.map((answer, index) => (
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
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      },
      loadingText: {
        fontSize: 18,
        textAlign: 'center',
      },
      resultText: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
      },
      question: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
      },
      button: {
        backgroundColor: '#00FF00',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        width: '100%',
      },
      buttonText: {
        color: 'white',
        textAlign: 'center',
      },
    });
    
    export default TracNghiem;