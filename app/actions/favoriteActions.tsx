import { ADD_FAVORITE, SET_FAVORITES, REMOVE_FAVORITE } from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Product } from '../types';

// Favori ürünü ekleme
export const addFavorite = (product: Product) => async (dispatch: any) => {
  try {
    const token = await AsyncStorage.getItem('userToken');
    if (!token) {
      throw new Error('Kullanıcı girişi yapılmamış.');
    }

    // Mevcut favori ürünleri AsyncStorage'dan çek
    const storedFavorites = await AsyncStorage.getItem('favorites');
    let favorites = storedFavorites ? JSON.parse(storedFavorites) : [];

    // Eğer ürün zaten favorilere eklenmişse, işlemi sonlandır
    const isAlreadyFavorite = favorites.some((fav: Product) => fav.id === product.id);
    if (isAlreadyFavorite) return;

    // Yeni favoriyi AsyncStorage'a ekle
    favorites.push(product);
    await AsyncStorage.setItem('favorites', JSON.stringify(favorites));

    // Redux store'a ekle
    dispatch({ type: ADD_FAVORITE, payload: product });

    // Veritabanına da favoriyi ekle
    const response = await fetch('http://192.168.56.1:3000/add-favorite', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        productId: product.id,
      }),
    });

    if (!response.ok) {
      throw new Error('Veritabanına favori eklenirken hata oluştu.');
    }
  } catch (error) {
    console.error('Favorilere eklerken hata:', error);
  }
};

// Favori ürünleri set etme
export const setFavorites = (favorites: Product[]) => ({
  type: SET_FAVORITES,
  payload: favorites,
});

// Favori ürünü kaldırma
export const removeFavorite = (productId: number) => async (dispatch: any) => {
  try {
    const token = await AsyncStorage.getItem('userToken');
    if (!token) {
      throw new Error('Kullanıcı girişi yapılmamış.');
    }

    // Mevcut favori ürünleri AsyncStorage'dan çek
    const storedFavorites = await AsyncStorage.getItem('favorites');
    let favorites = storedFavorites ? JSON.parse(storedFavorites) : [];

    // Favoriyi AsyncStorage'dan sil
    favorites = favorites.filter((product: Product) => product.id !== productId);
    await AsyncStorage.setItem('favorites', JSON.stringify(favorites));

    // Redux store'dan favoriyi kaldır
    dispatch({ type: REMOVE_FAVORITE, payload: productId });

    // Veritabanından favoriyi sil
    const response = await fetch('http://192.168.56.1:3000/remove-favorite', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        productId: productId,
      }),
    });

    if (!response.ok) {
      throw new Error('Veritabanından favori kaldırılırken hata oluştu.');
    }
  } catch (error) {
    console.error('Favori kaldırılırken hata:', error);
  }
};
