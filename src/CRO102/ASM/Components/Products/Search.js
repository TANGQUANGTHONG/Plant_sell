import { StyleSheet, Text, View, Image, TextInput, FlatList, Pressable } from 'react-native';
import React, { useState } from 'react';

const Search = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [data] = useState([
    { 
      id: '1',
      name: 'Panse Đen | Hybrid',
      price: '250.000đ',
      image: require('../item/cay1.png'),
      stock: 'Còn 156 sp',
    },
    { 
      id: '2',
      name: 'Panse a | Hybrid',
      price: '250.000đ',
      image: require('../item/cay1.png'),
      stock: 'Còn 156 sp',
    },
    { 
      id: '3',
      name: 'Panse bebb | Hybrid',
      price: '250.000đ',
      image: require('../item/cay1.png'),
      stock: 'Còn 156 sp',
    },
    { 
      id: '4',
      name: 'Panse deee | Hybrid',
      price: '250.000đ',
      image: require('../item/cay1.png'),
      stock: 'Còn 156 sp',
    },
    { 
      id: '5',
      name: 'Panse okkk | Hybrid',
      price: '250.000đ',
      image: require('../item/cay1.png'),
      stock: 'Còn 156 sp',
    },
  ]);

  const filteredData = data.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
        <Text style={styles.itemStock}>{item.stock}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate('HomeScreen')}>
          <Image source={require('../item/back.png')} style={styles.icon} />
        </Pressable>
        <Text style={styles.title}>Tìm kiếm</Text>
      </View>
      <TextInput
        style={styles.searchBar}
        placeholder="Spider Plant"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  itemDetails: {
    justifyContent: 'center',
  },
  itemName: {
    fontWeight: 'bold',
  },
  itemPrice: {
    color: 'green',
  },
  itemStock: {
    color: 'gray',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 135,
    color: '#000',
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default Search;
