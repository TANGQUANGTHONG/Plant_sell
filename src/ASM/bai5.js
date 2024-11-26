import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

const bai5 = (props) => {
  const {navigation} = props;
  const [size, setSize] = useState('');

  const handlePress = (selectedSize) => {
    setSize(selectedSize);
  };

  return (
    <View style={styles.box1}>
      <View style={styles.imageContainer}>
        <Image  
          source={require('./item/back.png')}
          style={styles.imageLeft}
        />
        <Image  
          source={require('./item/traitim.png')}
          style={styles.imageRight}
        />
      </View>
      <View style={styles.boxIMG}>
        <Image
          source={require('./item/coffe1.png')}
          style={styles.image}
        />
        <View style={styles.overlayBox}>
          <View style={styles.overlayLeft}>
            <Text style={styles.overlayText}>Robusta Beans</Text>
            <Text style={styles.overlay2}>From Africa</Text>
            <View style={styles.starAndTextContainer}>
              <Image source={require('./item/star.png')} style={styles.star} />
              <Text style={styles.newText}>4.5 <Text style={{color:'#AEAEAE'}}>(6,879)</Text></Text>
            </View>
          </View>
          <View style={styles.overlayRight}>
            <View style={styles.overlayTopRow}>
              <View>
                <Image source={require('./item/nut1.png')}
                  style={styles.nut1}
                /> 
              </View>
              <View>
                <Image source={require('./item/nut2.png')}
                  style={styles.nut2}
                /> 
              </View>
            </View>
            <View>
              <Image source={require('./item/nut3.png')}
                style={styles.nut3}
              /> 
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.description}>Description</Text>
      <Text style={styles.descriptionText}>Arabica beans are by far the most popular type of coffee beans, making up about 60% of the world’s coffee. These tasty beans originated many centuries ago in the highlands of Ethiopia, and may even be the first coffee beans ever consumed!</Text>
      
      <View style={styles.sizeButtons}>
        <Pressable style={size === 'S' ? styles.sizeButtonSelected : styles.sizeButton} onPress={() => handlePress('S')}>
          <Text style={styles.sizeButtonText}>S</Text>
        </Pressable>

        <Pressable style={size === 'M' ? styles.sizeButtonSelected : styles.sizeButton} onPress={() => handlePress('M')}>
          <Text style={styles.sizeButtonText}>M</Text>
        </Pressable>

        <Pressable style={size === 'L' ? styles.sizeButtonSelected : styles.sizeButton} onPress={() => handlePress('L')}>
          <Text style={styles.sizeButtonText}>L</Text>
        </Pressable>

      </View>
      <View style={styles.addToCartContainer}>
        <View>
          <Text style={styles.priceLabel}>Price</Text>
          <Text style={styles.price}><Text style={styles.dola}>$</Text>4.50</Text>
        </View>
        <View style={styles.addToCartButton}>
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </View>
      </View>

    </View>
  );
}

export default bai5;

const styles = StyleSheet.create({
  box1: {
    width: 435,
    height: 812,
    backgroundColor: 'black',
    left: 0,
  },
  image: {
    width: 410,
    height: 400,
  },
  nut1: {
    width: 60,
    height: 60,
    left:20,
    top:0,
    bottom:10
  },
  nut2: {
    width: 60,
    height: 60,
    right:20,
    top:0,
    bottom:10
  },
  nut3: {
    width: 150,
    height: 45,
    marginLeft: 20,
    top:5,
    marginBottom: 20,
  },
  boxIMG: {
    position: 'relative',
    zIndex: 1,
    width: 410,
    height: 400,
  },
  imageContainer: {
    position: 'absolute',
    top: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    zIndex: 2,
  },
  imageLeft: {
    width: 30,
    height: 30,
    marginLeft: 30,
  },
  imageRight: {
    width: 30,
    height: 30,
    marginRight: 30,
  },
  overlayBox: {
    position: 'absolute',
    top: '68%',
    left: 0,
    width: '100%',
    height: '35%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flexDirection: 'row',
    zIndex: 3,
  },
  overlayLeft: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:100
  },
  overlayRight: {
    width: '50%',
    justifyContent: 'space-between',
    padding: 10,
  },
  overlayTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  overlayText: {
    color: 'white',
    fontSize: 20,
    marginTop: -100,
  },
  overlay2: {
    color: '#AEAEAE',
    fontSize: 18,
    marginLeft: -40,
  },
  starAndTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  star: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  newText: {
    color: 'white',
    fontSize: 16,
  },
  description: {
    width: 375,
    color: '#AEAEAE',
    fontSize: 18,
    fontFamily: 'Poppins',
    marginLeft: 10,
    textAlign: 'left',
    marginTop: 10,
  },
  descriptionText: {
    width: 375,
    color: 'white',
    fontFamily: 'Poppins',
    fontSize: 18,
    marginLeft: 10,
    textAlign: 'left',
    marginTop: 10,
  },
  sizeButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    marginRight: 40,
  },
  sizeButton: {
    backgroundColor: '#141921',
    borderRadius: 8,
    paddingVertical: 10,
    width: 100,
    height: 40,
    alignItems: 'center',
  },
  sizeButtonSelected: {
    backgroundColor: '#141921',
    borderRadius: 8,
    paddingVertical: 10,
    borderColor: '#D17842',
    borderWidth: 1,
    width: 100,
    height: 40,
    alignItems: 'center',
  },
  sizeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  addToCartContainer: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 50,
  },
  priceLabel: {
    color: '#AEAEAE',
    fontSize: 16,
  },
  price: {
    color: 'white',
    fontSize: 20,
  },
  dola: {
    color: '#D17842',
    fontSize: 20,
  },
  addToCartButton: {
    backgroundColor: '#D17842',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 200,
    marginRight: 90,
  },
  addToCartButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
