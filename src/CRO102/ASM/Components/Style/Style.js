import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
  },
  cartButton: {
    padding: 10,
  },
  headerButtonText: {
    fontSize: 20,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  imageSlider: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 250,
    height: 250,
  },
  imageIndicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  indicator: {
    width: 10,
    height: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: '#000',
  },
  productInfo: {
    alignItems: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  plantButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    margin: 5,
  },
  shadeButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    margin: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  price: {
    fontSize: 24,
    color: '#000',
    marginVertical: 20,
  },
  productDetails: {
    alignItems: 'center',
    marginBottom: 20,
  },
  detailText: {
    margin: 10,
    width: 300,
    marginBottom: 5,
    fontSize: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  inStock: {
    color: '#4CAF50',
  },
  boldText: {
    fontWeight: 'bold',
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  quantityTotalPriceControlText: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  quantityTotalPriceControl: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  decrement: {
    padding: 1,
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: 'black',
  },
  increment: {
    padding: 1,
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: 'black',
  },
  controlText: {
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 25,
  },
  totalPrice: {
    fontSize: 23,
    marginBottom: 20,
    marginLeft: 140,
    color: 'black',
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 20,
    marginLeft: -30,
    marginBottom: 10,
  },
  totalPriceText: {
    fontSize: 20,
    marginLeft: 85,
    marginBottom: 10,
  },
  buyButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    width: '100%',
    alignItems: 'center',
    borderRadius: 5,
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 15,
  },
});
