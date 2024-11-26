// import React, { useState } from 'react';
// import { Button, View, StyleSheet } from 'react-native';
// import Animated, {
//   useSharedValue,
//   withSpring,
//   useAnimatedStyle,
// } from 'react-native-reanimated';

// export default function App() {
//   const translateX = useSharedValue(0);
//   const translateY = useSharedValue(0);
//   const [direction, setDirection] = useState(0);

//   const handlePress = () => {
//     switch (direction) {
//       case 0:
//         translateY.value += 200; 
//         break;
//       case 1:
//         translateX.value += 200; 
//         break;
//       case 2:
//         translateY.value -= 200; 
//         break;
//       case 3:
//         translateX.value -= 200; 
//         break;
//     }
//     setDirection((prev) => (prev + 1) % 4); 
//   };

//   const animatedStyles = useAnimatedStyle(() => ({
//     transform: [
//       { translateX: withSpring(translateX.value) },
//       { translateY: withSpring(translateY.value) },
//     ],
//   }));

//   return (
//     <>
//       <Animated.View style={[styles.box, animatedStyles]} />
//       <View style={styles.container}>
//         <Button onPress={handlePress} title="Click me" />
//       </View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   box: {
//     height: 120,
//     width: 120,
//     backgroundColor: '#b58df1',
//     borderRadius: 20,
//     marginVertical: 50,
//   },
// });

//Timming

// import React from 'react';
// import { StyleSheet, View, Text, Dimensions } from 'react-native';
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
//   withTiming,
//   withSpring,
//   Easing,
//   withRepeat,
// } from 'react-native-reanimated';

// const duration = 2000;
// const { width } = Dimensions.get('window'); // Lấy chiều rộng của màn hình

// export default function App() {
//   const defaultAnim = useSharedValue(width / 2 - 160);
//   const linear = useSharedValue(width / 2 - 160);

//   const animatedDefault = useAnimatedStyle(() => ({
//     transform: [{ translateX: withSpring(defaultAnim.value, {
//       mass: 1,
//       damping: 10,
//       stiffness: 100,
//       overshootClamping: false,
//       restDisplacementThreshold: 0.01,
//       restSpeedThreshold: 2,
//     }) }],
//   }));

//   const animatedChanged = useAnimatedStyle(() => ({
//     transform: [{ translateX: withTiming(linear.value, {
//       duration,
//       easing: Easing.linear,
//     }) }],
//   }));

//   React.useEffect(() => {
//     linear.value = withRepeat(
//       withTiming(-linear.value, {
//         duration,
//         easing: Easing.linear,
//       }),
//       -1,
//       true
//     );
//     defaultAnim.value = withRepeat(
//       withTiming(-defaultAnim.value, {
//         duration,
//       }),
//       -1,
//       true
//     );
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Animated.View style={[styles.box, animatedDefault]}>
//         <Text style={styles.text}>spring</Text>
//       </Animated.View>

//       <Animated.View style={[styles.box, animatedChanged]}>
//         <Text style={styles.text}>linear</Text>
//       </Animated.View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100%',
//   },
//   box: {
//     height: 80,
//     width: 80,
//     margin: 20,
//     borderWidth: 1,
//     borderColor: '#b58df1',
//     borderRadius: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     color: '#b58df1',
//     textTransform: 'uppercase',
//     fontWeight: 'bold',
//   },
// });

//Sequence
import React from 'react';
import { StyleSheet, View, Dimensions, Button } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
  Easing,
  withRepeat,
} from 'react-native-reanimated';



export default function App() {

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
const handlePress = () => {
  withSequence(
    withTiming(-width / 2 + 240, { duration, easing: Easing.cubic }),
    withTiming(0, { duration, easing: Easing.cubic }),
    withTiming(width / 2 - 240, { duration, easing: Easing.cubic })
  )
}

  return (
    
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyles]} />
         <Button onPress={handlePress} title="Click me" />
       </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  box: {
    height: 120,
    width: 120,
    backgroundColor: '#b58df1',
    borderRadius: 20,
  },
});

