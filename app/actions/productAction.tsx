import { SET_PRODUCTS, SET_SEARCH_TEXT, SET_SELECTED_CATEGORY, SET_PRODUCT_DETAIL } from './types';

// Action to set products
export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});

// Action to set search text
export const setSearchText = (text) => ({
  type: SET_SEARCH_TEXT,
  payload: text,
});

// Action to set selected category
export const setSelectedCategory = (category) => ({
  type: SET_SELECTED_CATEGORY,
  payload: category,
});

// Action to set product detail (tıklanan ürün)
export const setProductDetail = (product) => ({
  type: SET_PRODUCT_DETAIL,
  payload: product,
});
