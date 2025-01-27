// reducers.ts
const initialState = {
    selectedProduct: null, // Başlangıçta seçilen ürün yok
  };
  
  export const productReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'SET_SELECTED_PRODUCT':
        return {
          ...state,
          selectedProduct: action.payload, // Seçilen ürün bilgilerini state'e kaydediyoruz
        };
      default:
        return state;
    }
  };
  