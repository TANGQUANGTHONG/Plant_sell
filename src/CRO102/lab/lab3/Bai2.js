import React, { useRef, useEffect } from 'react';
import { View, FlatList, Animated, StyleSheet } from 'react-native';

const data = Array.from({ length: 10 }, (_, index) => `Item ${index + 1}`);

const App = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const renderItem = ({ item, index }) => {
    const inputRange = [-1, 0, 100 * index, 100 * (index + 2)];
    const opacity = scrollY.interpolate({
      inputRange,
      outputRange: [1, 1, 1, 0],
    });
    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [1, 1, 1, 0.8],
    });

    return (
      <Animated.View style={[styles.item, { opacity, transform: [{ scale }] }]}>
        <View style={styles.itemContent} />
      </Animated.View>
    );
  };

  return (
    <Animated.FlatList
      data={data}
      keyExtractor={(item) => item}
      renderItem={renderItem}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: true }
      )}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 20,
  },
  item: {
    height: 100,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#00BCD4',
  },
  itemContent: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#00BCD4',
  },

});

export default App;
