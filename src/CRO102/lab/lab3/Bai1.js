import React, { useRef, useEffect, useState } from 'react';
import { View, Button, Animated, Easing, Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');

const Bai1  = () => {
  const position = useRef(new Animated.Value(0)).current;
  const [targetY, setTargetY] = useState(0);

  const moveBlock = () => {
    const randomY = Math.random() * (height - 100); // Random vị trí Y
    setTargetY(randomY);
    Animated.timing(position, {
      toValue: randomY,
      duration: 1000, // Thời gian di chuyển
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    moveBlock(); // Di chuyển lần đầu khi khởi động
  }, []);

  return (
    <View style={styles.container}>
      <Button title="Move" onPress={moveBlock} />
      <Animated.View style={[styles.block, { top: position }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  block: {
    width: 50,
    height: 50,
    backgroundColor: '#0000FF',
    position: 'absolute',
  },
});

export default Bai1;
