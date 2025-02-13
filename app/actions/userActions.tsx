import { SET_USER, LOGOUT } from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const setUser = (userName: string) => ({
  type: SET_USER,
  payload: { userName },
});


export const logout = () => async (dispatch: any) => {
  try {
    await AsyncStorage.removeItem('favorites'); // Favorileri temizle
    dispatch({ type: LOGOUT });
  } catch (error) {
    console.error('Çıkış yaparken hata:', error);
  }
};

