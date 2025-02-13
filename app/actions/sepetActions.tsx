// actions/sepetActions.ts
import { ADD_TO_SEPET, REMOVE_FROM_SEPET } from '../actions/types';

export const addToSepet = (product) => {
  return {
    type: ADD_TO_SEPET,
    payload: product,
  };
};

export const removeFromSepet = (productId) => {
  return {
    type: REMOVE_FROM_SEPET,
    payload: productId,
  };
};
