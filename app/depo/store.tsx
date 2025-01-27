// depo/store.ts
import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer'; // Doğru bir şekilde rootReducer'ı import edin

const store = createStore(rootReducer);

export default store;
