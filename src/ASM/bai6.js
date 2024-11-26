import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Pressable } from 'react-native';

export default function App(props) {
  const { navigation } = props;
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'Cappuccino',
      description: 'With Steamed Milk',
      size: 'Small',
      price: 4.20,
      quantity: 1,
      image: 'https://via.placeholder.com/50'
    },
    {
      id: '2',
      name: 'Cappuccino',
      description: 'With Foamed Milk',
      size: 'Medium',
      price: 6.20,
      quantity: 1,
      image: 'https://via.placeholder.com/50'
    },
    {
      id: '3',
      name: 'Robusta Beans',
      description: '250gms',
      size: 'Medium Roast',
      price: 6.20,
      quantity: 1,
      image: 'https://via.placeholder.com/50'
    },
    {
      id: '4',
      name: 'Liberica Coffee Beans',
      description: 'With Roasted Nuts',
      size: '250gms',
      price: 4.20,
      quantity: 1,
      image: 'https://via.placeholder.com/50'
    },
  ]);

  const incrementQuantity = (id) => {
    const newCartItems = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(newCartItems);
  };

  const decrementQuantity = (id) => {
    const newCartItems = cartItems.map(item => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(newCartItems);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
        <View style={styles.itemOptions}>
          <Text style={styles.itemSize}>{item.size}</Text>
          <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.itemQuantity}>
        <TouchableOpacity onPress={() => decrementQuantity(item.id)} style={styles.quantityButton}>
          <Text style={styles.quantityText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityInput}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => incrementQuantity(item.id)} style={styles.quantityButton}>
          <Text style={styles.quantityText}>+</Text>
        </TouchableOpacity>
      </View>
      
    </View>
    
  );

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>7:11</Text>
      </View>
      <Text style={styles.cartHeader}>Cart</Text>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.cartList}
      />
      <View style={styles.totalPriceContainer}>
        <Text style={styles.totalPrice}>Total Price: ${getTotalPrice()}</Text>
      </View>
      <TouchableOpacity style={styles.payButton}>
        <Text style={styles.payButtonText}>Pay</Text>
      </TouchableOpacity>
      <View style= {styles.menuContainer}>
        <Pressable>
          <Image
            source={require('./item/home.png')}
            style={styles.menuIcon}
          />
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Cart')}>
          <Image
            source={require('./item/bag-2.png')}
            style={styles.menuIcon}
          /></Pressable>
          <Pressable>
          <Image
            source={require('./item/menu3.png')}
            style={styles.menuIcon}
          /></Pressable>
          <Pressable onPress={() => navigation.navigate('Setting')}>
            <Image
              source={require('./item/menu4.png')}
              style={styles.menuIcon}
            />
          </Pressable>
        </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    padding: 20,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topBarText: {
    color: '#fff',
    fontSize: 16,
  },
  cartHeader: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 24,
    marginVertical: 20,
  },
  cartList: {
    flex: 1,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2e2e2e',
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  itemName: {
    color: '#fff',
    fontSize: 16,
  },
  itemDescription: {
    color: '#aaa',
    fontSize: 14,
  },
  itemOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemSize: {
    color: '#aaa',
  },
  itemPrice: {
    color: '#fff',
  },
  itemQuantity: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#444',
    borderRadius: 4,
    padding: 5,
  },
  quantityText: {
    color: '#fff',
  },
  quantityInput: {
    color: '#fff',
    textAlign: 'center',
    marginHorizontal: 10,
  },
  totalPriceContainer: {
    alignItems: 'flex-end',
    marginVertical: 20,
  },
  totalPrice: {
    color: '#fff',
    fontSize: 18,
  },
  payButton: {
    backgroundColor: '#ff6600',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  payButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
