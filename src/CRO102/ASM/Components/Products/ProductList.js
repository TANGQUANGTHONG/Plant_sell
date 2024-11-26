import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../rtk/API'; // Đường dẫn file API của bạn

const categories = ['All', 'Trà sữa', 'Nước ngọt', 'Ăn vật'];

const ProductList = ({ navigation }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.app.products);
  const loading = useSelector((state) => state.app.loading);
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    filterProducts(search, selectedCategory);
  }, [products]);

  const handleSearch = (text) => {
    setSearch(text);
    filterProducts(text, selectedCategory);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    filterProducts(search, category);
  };

  const filterProducts = (searchText, category) => {
    let newData = products;

    if (category !== 'All') {
      newData = newData.filter(item => item.type.trim() === category);
    }

    if (searchText) {
      const textData = searchText.toUpperCase();
      newData = newData.filter(item => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
    }

    setFilteredProducts(newData);
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

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
        placeholder="Tìm kiếm"
        value={search}
        onChangeText={(text) => handleSearch(text)}
      />
      <View style={styles.filterBar}>
        {categories.map(category => (
          <TouchableOpacity
            key={category}
            style={[
              styles.filterButton,
              selectedCategory === category && styles.selectedFilterButton
            ]}
            onPress={() => handleCategorySelect(category)}
          >
            <Text style={styles.filterButtonText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigation.navigate('Detail', { product: item })}>
            <View style={styles.item}>
              {item.image ? (
                <Image source={{ uri: item.image }} style={styles.image} />
              ) : (
                <Text>Image not available</Text>
              )}
              <View style={styles.itemText}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.productDescription}>{item.Description}</Text>
                <Text style={styles.productType}>{item.type}</Text>
                <Text style={styles.productSize}>{item.size}</Text>
                <Text style={styles.productPrice}>{item.price}đ</Text>
              </View>
            </View>
          </Pressable>
        )}
        numColumns={2}
        contentContainerStyle={styles.flatListContentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 10,
    backgroundColor: '#FFFAF0',
  },
  searchBar: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  filterBar: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'center',
  },
  filterButton: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    margin: 10,
    backgroundColor: '#fff',
  },
  selectedFilterButton: {
    backgroundColor: '#32CD32',
  },
  filterButtonText: {
    color: 'black',
    fontSize: 14,
  },
  item: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    maxWidth: 250,
    justifyContent: 'center',
  },
  image: {
    width: 155,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemText: {
    alignItems: 'center',
    width: 150,
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: 'bold',
    color: '#000',
  },
  icon: {
    width: 30,
    height: 30,
  },
  productDescription: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginBottom: 5,
  },
  productType: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginBottom: 5,
  },
  productSize: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    color: '#32CD32',
    fontWeight: 'bold',
  },
  flatListContentContainer: {
    alignItems: 'center',
  },
});

export default ProductList;
