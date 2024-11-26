import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
const Main_Screen = (props) => {
    const { navigation } = props;
    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.lab}>
                <Text style={styles.text_lab}>Lab 1</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Lab1Bai1')} style={styles.button}>
                    <Text style={styles.text}>Bài 1</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Lab1Bai2')} style={styles.button}>
                    <Text style={styles.text}>Bài 2</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.lab}>
                <Text style={styles.text_lab}>Lab 2</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Lab2Bai1')} style={styles.button}>
                    <Text style={styles.text}>Bài 1</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.lab}>
                <Text style={styles.text_lab}>Lab 3</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Lab3Bai1')} style={styles.button}>
                    <Text style={styles.text}>Bài 1</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Lab3Bai2')} style={styles.button}>
                    <Text style={styles.text}>Bài 2</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Lab3Bai3')} style={styles.button}>
                    <Text style={styles.text}>Bài 3</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.lab}>
                <Text style={styles.text_lab}>ASM</Text>
                <TouchableOpacity onPress={() => navigation.navigate('ASM')} style={styles.button}>
                    <Text style={styles.text}>ASM</Text>
                </TouchableOpacity>
            </View>

        </View>
        </ScrollView>
    )
}

export default Main_Screen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: '#f0f4f7',
    },
    button: {
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        margin: 10,
        padding: 15,
        marginHorizontal: 20,
        backgroundColor: '#4A90E2',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    lab: {
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 2,
    },
    text_lab: {
        fontWeight: 'bold',
        fontSize: 26,
        color: '#333333',
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
    }
})
