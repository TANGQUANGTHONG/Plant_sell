import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ItemCate = (props) => {
  const { data } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{data.name}</Text>
    </View>
  )
}

export default ItemCate

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#D17842',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#252A32',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
