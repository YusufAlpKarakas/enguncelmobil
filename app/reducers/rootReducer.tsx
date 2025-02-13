/*
import { SET_USER, LOGOUT, SET_PRODUCTS, SET_SELECTED_CATEGORY, SET_PRODUCT_DETAIL, ADD_FAVORITE, SET_FAVORITES } from '../actions/types';

const initialState = {
  userName: '',
  isLoggedIn: false,
  selectedProduct: null,
  products: [],
  selectedCategory: '',
  productDetail: null,
  favorites: [],
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        userName: action.payload.userName,
        isLoggedIn: true,
      };

    case LOGOUT:
      return {
        ...state,
        userName: '',
        isLoggedIn: false,
      };

    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };

    case SET_PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: action.payload,
      };

    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
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

export default rootReducer;
*/
import { combineReducers } from 'redux';
import userReducer from './userReducer';
import productReducer from './productReducer';
import { favoritesReducer } from './favoriteReducer';
import sepetReducer from './sepetReducer';

const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
  favorites: favoritesReducer,
  sepetReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
