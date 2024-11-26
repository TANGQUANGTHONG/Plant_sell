import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Alert } from 'react-native';

const CartScreen = ({ route, navigation }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (route.params) {
      const { product, quantity, selectedSize, price } = route.params;
      const cartItem = {
        product,
        quantity,
        selectedSize,
        price
      };
      setCartItems([cartItem]); 
      calculateTotal([cartItem]); 
    }
  }, [route.params]);

  const calculateTotal = (items) => {
    const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setTotalPrice(total);
  };

  const handleQuantityChange = (productId, change) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.product._id === productId) {
        const newQuantity = item.quantity + change;
        if (newQuantity > 0) {
          return { ...item, quantity: newQuantity };
        }
      }
      return item;
    });
    setCartItems(updatedCartItems);
    calculateTotal(updatedCartItems);
  };

  const handleRemoveItem = (productId) => {
    const updatedCartItems = cartItems.filter(item => item.product._id !== productId);
    setCartItems(updatedCartItems);
    calculateTotal(updatedCartItems);
  };

  const handleCheckout = () => {
    Alert.alert('Thanh toán', 'Bạn đã tiến hành thanh toán thành công!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.headerButtonText}>&lt;</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Giỏ hàng</Text>
      </View>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={{ uri: item.product.image }} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{item.product.name}</Text>
              <Text style={styles.productSize}>Kích thước: {item.selectedSize}</Text>
              <View style={styles.quantityControl}>
                <TouchableOpacity
                  style={styles.controlButton}
                  onPress={() => handleQuantityChange(item.product._id, -1)}
                >
                  <Text style={styles.controlText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{item.quantity}</Text>
                <TouchableOpacity
                  style={styles.controlButton}
                  onPress={() => handleQuantityChange(item.product._id, 1)}
                >
                  <Text style={styles.controlText}>+</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.productTotalPrice}>{item.quantity * item.price}đ</Text>
            </View>
            <TouchableOpacity onPress={() => handleRemoveItem(item.product._id)} style={styles.removeButton}>
              <Text style={styles.removeButtonText}>Xóa</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.product._id}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Tổng cộng:</Text>
        <Text style={styles.totalPrice}>{totalPrice}đ</Text>
      </View>
      <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
        <Text style={styles.checkoutButtonText}>Thanh toán</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAF0',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  backButton: {
    marginRight: 10,
  },
  headerButtonText: {
    fontSize: 24,
  },
  headerTitle: {
    fontSize: 18,
    flex: 1,
    textAlign: 'center',
    color: '#FF6F61',
    fontWeight: 'bold',
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  productDetails: {
    flex: 1,
    marginLeft: 15,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6F61',
  },
  productSize: {
    fontSize: 16,
    color: '#888',
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  controlButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    marginHorizontal: 5,
  },
  controlText: {
    fontSize: 18,
    color: 'black',
  },
  quantity: {
    fontSize: 18,
    marginHorizontal: 10,
    color: 'black',
  },
  productTotalPrice: {
    fontSize: 16,
    color: '#FF6F61',
    fontWeight: 'bold',
    marginTop: 10,
  },
  removeButton: {
    padding: 5,
    backgroundColor: '#FF6F61',
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF6F61',
  },
  totalPrice: {
    fontSize: 20,
    color: '#FF6F61',
    fontWeight: 'bold',
  },
  checkoutButton: {
    height: 50,
    backgroundColor: '#FF6F61',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CartScreen;
