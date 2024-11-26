import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList, SafeAreaView, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../rtk/API'; // Đường dẫn file API của bạn

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.app.products);
  const loading = useSelector((state) => state.app.loading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return (
      <View style={styles.loading}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>ToTa - Ngọt ngào từng ngụm, vui tươi từng ngày</Text>
        <Image source={require('../item/shopping-cart.png')} style={styles.icon} />
      </View>
      <Pressable onPress={() => navigation.navigate('ProductList')}>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Xem hàng mới về</Text>
          <Image source={require('../item/MuiTen.png')} style={styles.arrowIcon} />
        </View>
      </Pressable>
      <Text style={styles.sectionTitle}>Nước uống</Text>
      <View style={styles.productContainer}>
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <View style={styles.productItem}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productDescription}>{item.Description}</Text>
              <Text style={styles.productType}>{item.type}</Text>
              <Text style={styles.productSize}>{item.size}</Text>
              <Text style={styles.productPrice}>{item.price}đ</Text>
            </View>
          )}
          keyExtractor={item => item._id}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAF0',
    paddingHorizontal: 20,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF6F61',
  },
  subtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#FF6F61',
  },
  arrowIcon: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#FF6F61',
  },
  productContainer: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  productItem: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  productImage: {
    width: 135,
    height: 135,
    borderRadius: 10,
  },
  productName: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
    color: '#FF6F61',
  },
  productDescription: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
  productType: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
  productSize: {
    fontSize: 14,
    color: '#888',
  },
  productPrice: {
    fontSize: 16,
    color: '#FF6F61',
    marginTop: 5,
    fontWeight: 'bold',
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default HomeScreen;
