import React, { useState, useEffect } from 'react';
import { Text, View, ActivityIndicator, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FavoriUrun = () => {
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFavorites = async () => {
      const token = await AsyncStorage.getItem('userToken'); // Kullanıcı token'ını alıyoruz

      if (!token) {
        setError('Önce giriş yapın.');
        setLoading(false);
        return;
      }

      fetch('http://192.168.56.1:3000/get-favorites', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      })
      .then((response) => response.json())
      .then((data) => {
        setFavorites(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Favoriler alınırken bir hata oluştu:', error);
        setError('Favoriler yüklenemedi.');
        setLoading(false);
      });
    };

    fetchFavorites();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View>
      <Text>Favori Ürünler</Text>
      {favorites.length === 0 ? (
        <Text>Henüz favori ürününüz yok.</Text>
      ) : (
        <FlatList
          data={favorites}
          renderItem={({ item }) => (
            <View>
              <Text>{item.name}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

export default FavoriUrun;
