import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import AppStyle from '../Custom/AppStyle';
import Button from '../Custom/Button';

const DemoTroChoi = () => {
    const [Diem, setDiem] = useState(0);
    const [CaoNhat, setCaoNhat] = useState(0);
    const [SoThuNhat, setSoThuNhat] = useState(0);
    const [SoThuHai, setSoThuHai] = useState(0);
    const [KetQua, setKetQua] = useState([0, 0, 0]);

    useEffect(() => {
        const _SoThuNhat = Math.floor(Math.random() * 10);
        const _SoThuHai = Math.floor(Math.random() * 10);
        setSoThuNhat(_SoThuNhat);
        setSoThuHai(_SoThuHai);

        const viTri = Math.floor(Math.random() * 3);
        const results = [Math.floor(Math.random() * 20), Math.floor(Math.random() * 20), Math.floor(Math.random() * 20)];
        results[viTri] = _SoThuNhat + _SoThuHai;
        setKetQua(results);
    }, [Diem]);

    const onPress = (value) => {
        if (value === SoThuHai + SoThuNhat) {
            const DiemMoi = Diem + 1;
            setDiem(DiemMoi);
            if (DiemMoi > CaoNhat) {
                setCaoNhat(DiemMoi);
            }
        } else {
            setDiem(0);
        }
    };

    return (
        <View style={AppStyle.container}>
            <Text style={AppStyle.text}>Điểm: {Diem}</Text>
            <Text style={AppStyle.text}>Điểm cao nhất: {CaoNhat}</Text>
            <Text style={AppStyle.text}>{SoThuNhat} + {SoThuHai} = ?</Text>
            {KetQua.map((KetQua, index) => (
                <Button key={index} title={KetQua} onPress={() => onPress(KetQua)} />
            ))}
        </View>
    );
};
export default DemoTroChoi;