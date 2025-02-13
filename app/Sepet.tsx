import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromSepet } from './actions/sepetActions';

const Sepet = () => {
  const dispatch = useDispatch();
  const sepet = useSelector((state) => state.sepetReducer.sepet);

  const handleRemoveFromSepet = (productId) => {
    dispatch(removeFromSepet(productId));  // Yalnızca belirtilen ürün silinecek
  };

  // Ürünlerin toplam fiyatını hesapla
  const totalPrice = sepet.reduce((total, product) => total + parseFloat(product.price), 0).toFixed(2);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.topMenu}>
          <Text style={styles.headerText}>Sepetim</Text>
          <Icon name="shopping-cart" size={24} color="#000" />
        </View>

        {sepet.length > 0 ? (
          <>
            {sepet.map((product, index) => (
              <View key={index} style={styles.cartItem}>
                <Image source={require('../assets/images/kitap.png')} style={styles.productImage} />
                <View style={styles.productDetails}>
                  <Text style={styles.productName}>{product.name}</Text>
                  <Text style={styles.productPrice}>{product.price} TL</Text>
                </View>
                {/* Silme butonunu sadece bu ürüne ait olacak şekilde ekledik */}
                <TouchableOpacity style={styles.removeButton} onPress={() => handleRemoveFromSepet(product.id)}>
                  <Icon name="trash" size={20} color="red" />
                </TouchableOpacity>
              </View>
            ))}
            <View style={styles.totalPriceContainer}>
              <Text style={styles.totalPriceText}>Toplam Fiyat: {totalPrice} TL</Text>
            </View>
          </>
        ) : (
          <Text style={styles.emptyText}>Sepetiniz boş.</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 16,
  },
  topMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  productImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: '#666',
  },
  removeButton: {
    padding: 8,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginTop: 20,
  },
  totalPriceContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    alignItems: 'center',
  },
  totalPriceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Sepet;
