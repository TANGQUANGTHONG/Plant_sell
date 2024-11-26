import React, { useState } from 'react';
import { View, Button, StyleSheet, TextInput } from 'react-native';

const Body = ({ onUpdateInfor, onClickChangeBigFooter }) => {
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');

    return (
        <View style={styles.body}>
            <TextInput
                style={styles.input}
                placeholder="Nhập tên mới"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Dán địa chỉ avatar mới"
                value={avatar}
                onChangeText={setAvatar}
            />
            <View style={styles.Button}>
            <Button title="Cập nhật thông tin" onPress={() => onUpdateInfor(name, avatar)} />
            <Button title="Đổi màu footer" onPress={onClickChangeBigFooter} />
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        width: '80%',
    },
    Button:{
        margin:0
    }
});

export default Body;
