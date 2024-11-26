import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
  withRepeat,
} from 'react-native-reanimated';

const { width: windowWidth } = Dimensions.get('window');

export default function App({}) {
  const offset = useSharedValue(windowWidth / 2 - 160);

  const animatedStyles = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      offset.value,
      [windowWidth / 2 - 160, -windowWidth / 2 + 160],
      [ 'red', 'yellow']
    ),
    transform: [{ translateX: offset.value }],
  }));

  React.useEffect(() => {
    offset.value = withRepeat(
      withTiming(-offset.value, { duration: 1750, useNativeDriver: true }),
      -1,
      true
    );
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyles]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 120,
    height: 120,
    borderRadius: 20,
    backgroundColor: '#8A2BE2', 
  },
});
