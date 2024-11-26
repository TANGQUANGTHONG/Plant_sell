import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../rtk/Reducer'; 

const Detail = ({ route }) => {
  const { product } = route.params;
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [price, setPrice] = useState(product.price);

  useEffect(() => {
    if (selectedSize) {
      switch (selectedSize) {
        case 'S':
          setPrice(product.price - 2000);
          break;
        case 'M':
          setPrice(product.price);
          break;
        case 'L':
          setPrice(product.price + 4000);
          break;
        default:
          setPrice(product.price);
          break;
      }
    } else {
      setPrice(product.price);
    }
  }, [selectedSize]);

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleBuyPress = () => {
    if (!selectedSize) {
      Alert.alert('Lỗi', 'Vui lòng chọn kích thước trước khi mua!');
      return;
    }

    // Truyền dữ liệu đến CartScreen
    navigation.navigate('CartScreen', {
      product,
      quantity,
      selectedSize,
      price
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.headerButtonText}>&lt;</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{product.name}</Text>
        <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate('CartScreen')}>
          <Text style={styles.headerButtonText}>&#128722;</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageSlider}>
        <Image style={styles.image} source={{ uri: product.image }} />
      </View>
      <View style={styles.productInfo}>
        <Text style={styles.price}>{price.toLocaleString()}đ</Text>
        {product.size && Object.keys(product.size).length > 0 && (
          <View style={styles.sizeSelector}>
            {['S', 'M', 'L'].map(size => (
              <TouchableOpacity
                key={size}
                style={[
                  styles.sizeButton,
                  selectedSize === size && styles.selectedSizeButton
                ]}
                onPress={() => handleSizeSelect(size)}
              >
                <Text style={styles.sizeButtonText}>{size}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        <View style={styles.quantityControl}>
          <TouchableOpacity style={styles.decrement} onPress={handleDecrement}>
            <Text style={styles.controlText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity style={styles.increment} onPress={handleIncrement}>
            <Text style={styles.controlText}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.totalPrice}>{(quantity * price).toLocaleString()}đ</Text>
      </View>
      <TouchableOpacity style={styles.buyButton} onPress={handleBuyPress}>
        <Text style={styles.buyButtonText}>CHỌN MUA</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FFFAF0',
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
  cartButton: {
    marginLeft: 10,
  },
  imageSlider: {
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  productInfo: {
    alignItems: 'center',
    marginBottom: 60, // To make space for the buy button
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FF6F61',
  },
  sizeSelector: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  sizeButton: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    margin: 10,
  },
  selectedSizeButton: {
    backgroundColor: '#FF6F61',
  },
  sizeButtonText: {
    fontSize: 18,
    color: 'black',
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  decrement: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    marginRight: 10,
  },
  increment: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    marginLeft: 10,
  },
  controlText: {
    fontSize: 22,
    color: 'black',
  },
  quantity: {
    fontSize: 22,
    marginHorizontal: 10,
    color: 'black',
  },
  totalPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FF6F61',
  },
  buyButton: {
    position: 'absolute',
    bottom: 20,
    left: 10,
    right: 10,
    padding: 15,
    backgroundColor: '#FF6F61',
    borderRadius: 20,
    alignItems: 'center',
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Detail;
