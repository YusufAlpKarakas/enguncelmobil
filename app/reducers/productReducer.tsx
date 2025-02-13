// reducers/productReducer.tsx
/*

import { SET_PRODUCTS, SET_SEARCH_TEXT, SET_SELECTED_CATEGORY, SET_PRODUCT_DETAIL } from '../actions/types';

const initialState = {
  products: [],
  searchText: '',
  selectedCategory: '',
  productDetail: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    case SET_SEARCH_TEXT:
      return { ...state, searchText: action.payload };
    case SET_SELECTED_CATEGORY:
      return { ...state, selectedCategory: action.payload };
    case SET_PRODUCT_DETAIL:
      return { ...state, productDetail: action.payload };
    default:
      return state;
  }
};

export default productReducer; // Default export
*/


import { SET_PRODUCTS, SET_SELECTED_CATEGORY, SET_PRODUCT_DETAIL, ADD_TO_SEPET } from '../actions/types';

const initialState = {
  products: [],
  selectedCategory: '',
  productDetail: null,
  sepet:[]
};

const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
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

    default:
      return state;
  }
};

export default productReducer;
