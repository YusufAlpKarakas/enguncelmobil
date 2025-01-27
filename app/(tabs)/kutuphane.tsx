import React, { useState, useEffect } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  Button,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { debounce } from 'lodash';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Product = {
  id: number;
  name: string;
  category: string;
  image: string;
};

type RootStackParamList = {
  UrunDetay: { product: Product };
};

export type NavigationProp = StackNavigationProp<RootStackParamList, 'UrunDetay'>;

const { width } = Dimensions.get('window');

export default function Kutuphane() {
  const navigation = useNavigation<NavigationProp>();
  const [text, setText] = useState(''); // Arama metni
  const [selectedCategory, setSelectedCategory] = useState(''); // Seçilen kategori
  const [categoriesVisible, setCategoriesVisible] = useState(false); // Kategorilerin görünürlüğünü kontrol eder
  const [products, setProducts] = useState<Product[]>([]); // Ürün listesi
  const [loading, setLoading] = useState(true); // Yükleniyor durumu
  const route = useRoute();
  const { userName } = route.params || {};

  // Veritabanından ürünleri alıyoruz
  useEffect(() => {
    fetch('http://192.168.56.1:3000/get-products') // IP adresini güncel tutun
      .then((response) => response.json())
      .then((data) => {
        setProducts(data); // Verileri state'e kaydet
        setLoading(false); // Yükleniyor durumunu kapat
      })
      .catch((error) => {
        console.error('Ürünler alınırken bir hata oluştu:', error);
        setLoading(false);
      });
  }, []);

  // Debounce ile arama performansı
  const handleSearch = debounce((value: string) => {
    setText(value);
  }, 300);

  // Favoriye ekleme işlemi
  const handleAddFavorite = async (productId: number) => {
    const token = await AsyncStorage.getItem('userToken'); // Kullanıcı token'ını alıyoruz

    if (!token) {
      // Kullanıcı giriş yapmadıysa, giriş yapması gerektiğini belirten bir uyarı gösteriyoruz
      Alert.alert('Uyarı', 'Lütfen önce giriş yapın.');
      return;
    }

    fetch('http://192.168.56.1:3000/add-favorite', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ productId }),
    })
    .then((response) => response.json())
    .then((data) => {
      alert('Ürün favorilere eklendi!');
    })
    .catch((error) => {
      console.error('Favoriye eklerken bir hata oluştu:', error);
    });
  };

  // Ürünleri filtreleme
  const filteredProducts = products.filter((product) => {
    const matchesText = product.name.toLowerCase().includes(text.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    return matchesText && matchesCategory;
  });

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <StatusBar translucent={true} backgroundColor="#333" barStyle="light-content" />
        <View style={styles.topMenu}>
          <View style={styles.topMenuRightBox}>
            <Icon name="shopping-cart" size={25} color="#000" style={styles.icon1} />
            <Icon name="user-o" size={22} color="#000" style={styles.icon2} />
          </View>
        </View>

        {/* Arama ve Kategori */}
        <View style={styles.searchCategoryContainer}>
          <Icon name="search" size={20} color="grey" style={styles.icon3} />
          <View style={styles.categoryContainer}>
            <Icon2
              style={styles.icon4}
              name="filter-list"
              size={30}
              color="black"
              onPress={() => setCategoriesVisible(!categoriesVisible)} // Kategorileri göster/gizle
            />
            {categoriesVisible && (
              <View style={styles.categoryList}>
                <View>
                  <Text>Dersler</Text>
                  <Button
                    title="TYT"
                    onPress={() => {
                      setSelectedCategory('TYT');
                      setCategoriesVisible(false); // Kategorileri gizle
                    }}
                  />
                </View>
                <View>
                  <Text>Yayın Evleri</Text>
                  <Button
                    title="AYT"
                    onPress={() => {
                      setSelectedCategory('AYT');
                      setCategoriesVisible(false); // Kategorileri gizle
                    }}
                  />
                </View>
              </View>
            )}
          </View>
          <TextInput
            style={styles.input}
            placeholder="Arama"
            onChangeText={handleSearch} // Arama metni debounce ile güncelle
          />
        </View>

        {/* Kategori Başlığı */}
        {selectedCategory && (
          <Text style={styles.categoryTitle}>{`Seçilen Kategori: ${selectedCategory}`}</Text>
        )}

        {/* Yükleniyor Durumu */}
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : filteredProducts.length === 0 ? (
          <Text style={styles.noResultText}>Hiç ürün bulunamadı.</Text>
        ) : (
          <View style={styles.productContainer}>
            {filteredProducts.map((product) => (
              <TouchableOpacity
                key={product.id}
                style={styles.productItem}
                onPress={() => navigation.navigate('UrunDetay', { product })}
              >
                <Image style={styles.urunImage} source={require('../../assets/images//kitap.png')} />
                <Text>{product.name}</Text>
                <Text>{product.price}</Text>
                <TouchableOpacity onPress={() => handleAddFavorite(product.id)}>
                  <Text style={styles.favoriteButton}>Favorilere Ekle</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  topMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
  topMenuRightBox: {
    flexDirection: 'row',
  },
  icon1: {
    marginRight: 15,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  icon2: {
    marginRight: 15,
  },
  icon3: {
    position: 'absolute',
    left: 40,
  },
  icon4: {
    position: 'absolute',
    left: -30,
  },
  categoryList: {
    position: 'absolute',
    top: 40,
    backgroundColor: '#fff',
    elevation: 5,
    zIndex: 10,
    width: 200,
    height: 200,
    left: 100,
  },
  input: {
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 5,
    width: '90%',
    paddingHorizontal: 40,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
    marginLeft: 10,
  },
  productContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  productItem: {
    width: width * 0.4, // Dinamik genişlik
    margin: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  urunImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
    objectFit: 'contain',
  },
  noResultText: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
  searchCategoryContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
