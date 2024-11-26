import React, { useCallback, useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

const Main = () => {
    const [User, setUser] = useState({
        name: 'Chưa có tên',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png',
    });

    const [LastTimeUpdate, setLastTimeUpdate] = useState('Bạn chưa cập nhật thông tin');

    const color = ['#FF0000', '#00FF00', '#0000FF'];
    const [FooterColor, setFooterColor] = useState(color[0]);

    const handleUpdateInfor = useCallback((name, avatar) => {
        setUser({ name, avatar });
    }, []);

    const handleRandomColor = useCallback(() => {
        const numberRan = Math.floor(Math.random() * color.length);
        setFooterColor(color[numberRan]);
    }, [color]);

    useEffect(() => {
        const currentdate = new Date();
        const datetime =
            currentdate.getDate() +
            '/' +
            (currentdate.getMonth() + 1) +
            '/' +
            currentdate.getFullYear() +
            ' ' +
            currentdate.getHours() +
            ':' +
            currentdate.getMinutes() +
            ':' +
            currentdate.getSeconds();
        setLastTimeUpdate(datetime);
    }, [User]);

    return (
        <View style={styles.container}>
            <Header user={User} />
            <Body onUpdateInfor={handleUpdateInfor} onClickChangeBigFooter={handleRandomColor} />
            <Footer timeUpdate={LastTimeUpdate} backgroundColor={FooterColor} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Main;
    