import React from 'react';
import { View, Text, ScrollView, StyleSheet, Animated, Image } from 'react-native';

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default function CollapsingHeader() {
  const scrollY = new Animated.Value(0);

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  const headerTitleOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 0, 1],
    extrapolate: 'clamp',
  });

  const headerImageOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp',
  });

  const headerContentTranslate = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -50],
    extrapolate: 'clamp',
  });

  const headerContentStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: headerTitleOpacity,
  };

  return (
    <View style={styles.fill}>
      <Animated.ScrollView
        style={styles.fill}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
      >
        <View style={styles.scrollViewContent}>
          {Array.from({ length: 20 }).map((_, index) => (
            <View key={index} style={styles.item}>
              <Text style={styles.itemText}>  {index + 1}</Text>
            </View>
          ))}
        </View>
      </Animated.ScrollView>

      <Animated.View style={[styles.header, { height: headerHeight }]}>
        <Animated.View
          style={[
            styles.headerContent,
            {
              opacity: headerImageOpacity,
              transform: [{ translateY: headerContentTranslate }],
            },
          ]}
        >
          <Image
            style={styles.headerImage}
            source={require('./avatar.jpg')}
          />
          <Text style={styles.headerText}>Nguyen Van A</Text>
        </Animated.View>
        
        <Animated.Image
          style={[styles.headerTitleImage, { opacity: headerTitleOpacity }]}
          source={require('./avatar.jpg')}
        />
        <Animated.Text style={[styles.headerTitle, { opacity: headerTitleOpacity }]}>
          Nguyen Van A
        </Animated.Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    padding: 20,
  },
  itemText: {
    fontSize: 16,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#4CAF50',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContent: {
    alignItems: 'center',
  },
  headerImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    position: 'absolute',
    bottom: 10,
  },
  headerTitleImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  scrollViewContent: {
    marginTop: HEADER_MAX_HEIGHT,
  },
});
