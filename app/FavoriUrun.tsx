import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { removeFavorite } from './actions/favoriteActions';

interface Product {
  id: number;
  name: string;
  price: string;
}

const FavoriUrun = () => {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        if (!token) {
          Alert.alert('Uyarı', 'Lütfen önce giriş yapın.');
          return;
        }

        const response = await fetch('http://192.168.56.1:3000/get-favorites', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (response.status === 200) {
          setFavorites(data);
        } else {
          Alert.alert('Hata', 'Favoriler alınırken bir hata oluştu.');
        }
      } catch (error) {
        console.error('Favoriler çekilirken hata:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  const handleRemoveFavorite = async (productId: number) => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      if (!token) {
        Alert.alert('Uyarı', 'Lütfen önce giriş yapın.');
        return;
      }

      // Backend'e silme isteği gönder
      const response = await fetch(`http://192.168.56.1:3000/remove-favorite/${productId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        // Redux'dan favoriyi kaldır
        dispatch(removeFavorite(productId));
        setFavorites((prevFavorites) => prevFavorites.filter((item) => item.id !== productId));
        Alert.alert('Başarılı', 'Favori başarıyla kaldırıldı!');
      } else {
        const data = await response.json();
        Alert.alert('Hata', data.error || 'Favori silinirken bir hata oluştu.');
      }
    } catch (error) {
      console.error('Favori silinirken hata:', error);
      Alert.alert('Hata', 'Favori silinirken bir hata oluştu.');
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="blue" />;
  }

  return (
    <View>
      <Text>Favori Ürünler</Text>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name} - {item.price}₺</Text>
            <Button title="Favoriden Kaldır" onPress={() => handleRemoveFavorite(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

export default FavoriUrun;

