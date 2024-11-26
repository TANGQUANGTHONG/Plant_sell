import React, { memo } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = memo((props) => {
    const { user } = props;
    console.log('header rendering...');
    console.log('user.avatar:', user.avatar); 

    return (
        <View style={styles.header}>
            <Image
                resizeMode="center"
                style={styles.avatar}
                source={{ uri: user.avatar }}
                onError={(error) => {
                    console.log('Error loading image: ', error.nativeEvent.error);
                }}
            />
            <View>
                <Text style={styles.headerText}>Chào ngày mới</Text>
                <Text style={styles.headerSubText}>{user.name}</Text>
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
    header: {
        height: 100,
        backgroundColor: 'white',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    headerSubText: {
        fontSize: 16,
        color: '#999',
    },
});
export default Header;
