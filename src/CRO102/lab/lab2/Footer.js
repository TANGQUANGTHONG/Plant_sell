import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = ({ timeUpdate, backgroundColor }) => {
    return (
        <View style={[styles.footer, { backgroundColor }]}>
            <Text style={styles.footerText}>Thời gian bạn cập nhật thông tin: {timeUpdate}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    footerText: {
        fontSize: 14,
        color: '#999',
    },
});

export default Footer;
