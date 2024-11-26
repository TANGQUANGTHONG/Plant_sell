import React, { useEffect, useState, useContext } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList, Button, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'react-native-axios';
import ItemCate from './itemcata';
import ItemProduct from './itemProduct';
import { appcontext } from './appcontext';

const Bai2 = (props) => {
  const { navigation } = props;
  const { Email } = useContext(appcontext);

  console.log(Email);

   // Danh sách sản phẩm
   const products = [
    {
      type: 'Cappuccino',
      image: require('./item/coffe1.png'),
      description: 'With Steamed Milk',
      price: '$4.50',
    },
    {
      type: 'Cappuccino',
      image: require('./item/coffe2.png'),  
      description: 'With Foam',
      price: '$4.70',
    },
    {
      type: 'Espresso',
      image: require('./item/coffe3.png'),
      description: 'Strong Espresso Shot',
      price: '$3.00',
    },
  ];

  const Coffe = [
    {
      type: 'Robusta Beans',
      image: require('./item/coffe3.png'),
      description: 'Medium Roasted',
      price: '$5.00',
    },
    {
      type: 'Cappuccino',
      image: require('./item/coffe3.png'),
      description: 'With Foam',
      price: '$4.70',
    },
    {
      type: 'Cappuccino',
      image: require('./item/coffe3.png'),
      description: 'With Foam',
      price: '$4.70',
    },
  ];

  const [DataCata, setDataCata] = useState([]);
  const [IdCate, setIdCate] = useState("");
  const [DataProduct, setDataProduct] = useState([]);
  const [ProductDetails, setProductDetails] = useState(null);

  useEffect(() => {
    axios.get("https://cro101-b166e76cc76a.herokuapp.com/categories")
      .then(function (response) {
        if (response.data.status === true) {
          setDataCata(response.data.categories);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (IdCate) {
      axios.get("https://cro101-b166e76cc76a.herokuapp.com/products", {
        params: {
          category: IdCate
        }
      }).then(function (response) {
        if (response.data.status === true) {
          setDataProduct(response.data.products);
        }
      })
        .catch(function (error) {
          console.error(error);
        });
    }
  }, [IdCate]);

  const getProductDetails = (id) => {
    axios.get(`https://cro101-b166e76cc76a.herokuapp.com/products/${id}`)
      .then(function (response) {
        if (response.data.status === true) {
          setProductDetails(response.data.product);
          navigation.navigate('ProductDetails', { product: response.data.product });
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.box1}>
        <View style={styles.imageContainer}>
          <Image
            source={require('./angle-small-left.png')}
            style={styles.imageLeft}
          />
          <Image
            source={require('./item/avt.png')}
            style={styles.imageRight}
          />
        </View>
        <Text style={styles.Text1}>
          Find the best
        </Text>
        <Text style={styles.Text1}>
          coffee for you
        </Text>
        <TextInput
          style={styles.searchBar}
          placeholder='Search'
          placeholderTextColor="#828282"
        />

        <FlatList
          data={DataCata}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setIdCate(item._id)}>
              <ItemCate data={item} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item._id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.cataList}
        />

        <FlatList
          data={DataProduct}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => getProductDetails(item._id)}>
              <ItemProduct data={item} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item._id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
   <View style={styles.productContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.productContainer}>
            {products.map((product, index) => (
              <View key={index} style={styles.product}>
                <Image source={product.image} style={styles.productImage} />
                <Text style={styles.productName}>{product.type}</Text>
                <Text style={styles.productDescription}>{product.description}</Text>
                <View style={styles.priceButtonContainer}>
    <Text style={styles.productPrice}>{product.price}</Text>
    <View style={styles.cachtrai}>
    <Button title="+" color="#D17842" onPress={() => { }} />
</View>
</View>
              </View>
            ))}
          </ScrollView>

          <Text style={styles.productHeader}>
            Coffee beans
          </Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.productContainer}>
            {Coffe.map((coffee, index) => (
              <View key={index} style={styles.product}>
                <Image source={coffee.image} style={styles.productImage} />
                <Text style={styles.productName}>{coffee.type}</Text>
                <Text style={styles.productDescription}>{coffee.description}</Text>
                <View style={styles.priceButtonContainer}>
                  <Text style={styles.productPrice}>{coffee.price}</Text>
                  <View style={styles.cachtrai}>
               <Button title="+" color="#D17842" onPress={() => { }} />
                </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.menuContainer}>
          <TouchableOpacity>
            <Image
              source={require('./item/menu1.png')}
              style={styles.menuIcon}
            />
          </TouchableOpacity>
          <Pressable onPress={() => navigation.navigate('Cart')}>
            <Image
              source={require('./item/menu2.png')}
              style={styles.menuIcon}
            />
          </Pressable>
          <TouchableOpacity>
            <Image
              source={require('./item/menu3.png')}
              style={styles.menuIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
            <Image
              source={require('./item/menu4.png')}
              style={styles.menuIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default Bai2;

const styles = StyleSheet.create({

cachtrai:{
  marginLeft:30
},
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  box1: {
    width: '100%',
    height: '100%',
    padding: 20,
  },

  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 30,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  imageLeft: {
    width: 30,
    height: 30,
    marginLeft: 0
  },
  imageRight: {
    width: 30,
    height: 30,
    marginRight: 0
  },
  Text1: {
    fontSize: 28,
    color: 'white',
    marginTop: 10,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    marginLeft: 30,
  },
  searchBar: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#252A32',
    borderRadius: 8,
    color: 'white',
    backgroundColor: '#252A32',
    fontSize: 16,
  },
  cataList: {
    flexDirection: 'row',
  },
  productContainer: {
    marginTop: 20,
  },
  productImage: {
    width: 126,
    height: 126,
    marginBottom: 10,
    borderRadius: 0,
  },
  productName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Poppins',
    marginBottom: 10,
  },
  productDescription: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Poppins',
    textAlign: 'center',
  },
  productPrice: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  priceButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  addButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FFFFFF', // Màu trắng
    borderRadius: 16,
    width: 32, // Độ rộng mong muốn của nút "+"
    height: 32, // Độ cao mong muốn của nút "+"
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10, // Khoảng cách giữa nút và giá
  },
  addButtonText: {
    color: '#FFFFFF', // Màu trắng
    fontSize: 18,
  },
  productDetails: {
    backgroundColor: '#252A32',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  menuIcon: {
    width: 40,
    height: 40,
  },
});
