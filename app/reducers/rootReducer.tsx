// reducers/rootReducer.ts
import { combineReducers } from 'redux';
import productReducer from './productReducer'; // Ürünlerle ilgili reducer'ı import edin

const rootReducer = combineReducers({
  product: productReducer, // Product reducer'ını buraya ekleyin
});

export default rootReducer;
