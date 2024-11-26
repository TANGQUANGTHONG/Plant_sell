import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, PermissionsAndroid, Alert } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import axios from 'react-native-axios';

const Demo5 = () => {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        requestCameraPermission();
    }, []);

    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: 'Camera Permission',
                    message: 'App cần quyền truy cập vào camera của bạn.',
                    buttonNeutral: 'Hỏi Lại Sau',
                    buttonNegative: 'Hủy',
                    buttonPositive: 'OK',
                }
            );
            if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
                Alert.alert(
                    'Quyền Bị Từ Chối',
                    'Quyền truy cập camera bị từ chối. Bạn không thể chụp ảnh.',
                    [{ text: 'OK', onPress: () => console.log('OK Đã Bấm') }]
                );
            }
        } catch (err) {
            console.warn(err);
        }
    };

    const uploadImage = async () => {
        if (!image) {
            Alert.alert('Không có ảnh để tải lên.');
            return;
        }

        try {
            const data = new FormData();
            data.append('file', {
                uri: image.uri,
                type: image.type,
                name: image.fileName,
            });
            data.append('upload_preset', 'ml_default');

            const cloudinaryCloudName = 'dzlomqxnn';

            axios({
                url: `https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/image/upload`,
                method: 'post',
                data,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }).then((res) => {
                console.log('uploadImage -> ', res.data);
                setUrl(res.data.secure_url); // Set URL ảnh đã tải lên
            }).catch((error) => {
                console.log('uploadImage -> ', error.response.data);
            });
        } catch (error) {
            console.log('uploadImage -> ', error);
        }
    };

    const onOpenCamera = async () => {
        try {
            const options = {
                mediaType: 'photo',
                quality: 1,
                cameraType: 'back',
                saveToPhotos: true,
            }
            launchCamera(options, (response) => {
                if (response.didCancel) {
                    console.log('Người dùng đã hủy chọn ảnh');
                } else if (response.errorMessage) {
                    console.log('Lỗi ImagePicker: ', response.errorMessage);
                } else {
                    console.log('response -> ', response);
                    setImage(response.assets[0]);
                }
            });
        } catch (error) {
            console.log('onOpenCamera -> ', error);
        }
    };

    const onOpenLibrary = async () => {
        try {
            const options = {
                mediaType: 'photo',
                quality: 1,
            }
            launchImageLibrary(options, (response) => {
                if (response.didCancel) {
                    console.log('Người dùng đã hủy chọn ảnh');
                } else if (response.errorMessage) {
                    console.log('Lỗi ImagePicker: ', response.errorMessage);
                } else {
                    console.log('response -> ', response);
                    setImage(response.assets[0]);
                }
            });
        } catch (error) {
            console.log('onOpenLibrary -> ', error);
        }
    };

    return (
        <View style={styles.container}>
            {image ? (
                <Image
                    source={{ uri: image.uri }}
                    style={styles.image}
                />
            ) : (
                <View style={styles.placeholder} />
            )}
            {url ? (
                <Image
                    source={{ uri: url }}
                    style={styles.image}
                />
            ) : (
                <View style={styles.placeholder} />
            )}
            <TouchableOpacity onPress={onOpenCamera} style={styles.btn}>
                <Text style={styles.label}>Chụp hình</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onOpenLibrary} style={styles.btn}>
                <Text style={styles.label}>Chọn ảnh từ thư viện</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={uploadImage} style={styles.btn}>
                <Text style={styles.label}>Tải lên</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    placeholder: {
        width: 200,
        height: 200,
        margin: 10,
        borderWidth: 1,
        borderColor: 'black',
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    btn: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        margin: 10,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        margin: 10,
    },
});

export default Demo5;
