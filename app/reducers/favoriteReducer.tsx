/*

import { ADD_FAVORITE, SET_FAVORITES } from '../actions/types';
import { Product } from '../types'; // Product tipini import edin

interface FavoriteState {
  favorites: Product[]; // Product türünde bir dizi olmalı
}

const initialState: FavoriteState = {
  favorites: [], // Buradaki başlangıç değeri doğru şekilde Product[] tipiyle uyumlu
};

export const favoritesReducer = (state = initialState, action: any): FavoriteState => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload], // Yeni favori ekleniyor
      };
    case SET_FAVORITES:
      return {
        ...state,
        favorites: action.payload, // Yeni favoriler listesi set ediliyor
      };
    default:
      return state;
  }
};
*/


import { ADD_FAVORITE, SET_FAVORITES, REMOVE_FAVORITE } from '../actions/types';
import { Product } from '../types';

interface FavoriteState {
  favorites: Product[];
}

const initialState: FavoriteState = {
  favorites: [],
};

export const favoritesReducer = (state = initialState, action: any): FavoriteState => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((product: Product) => product.id !== action.payload),
      };
    case SET_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      };
    default:
      return state;
  }
};


