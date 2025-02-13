/*
const initialState = {
  userName: '',        // Başlangıçta kullanıcı adı boş
  isLoggedIn: false,   // Başlangıçta kullanıcı giriş yapmamış
  selectedProduct: null, // Seçilen ürün başlangıçta yok
  products: [],        // Ürünlerin listesi
  selectedCategory: '',  // Seçilen kategori
  productDetail: null,  // Ürün detayları
  favorites: [],        // Favori ürünler
};

export const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        userName: action.payload.userName, // Kullanıcı adı
        isLoggedIn: true, // Giriş yapıldı
      };

    case 'LOGOUT':
      return {
        ...state,
        userName: '',
        isLoggedIn: false, // Çıkış yapıldığında
      };

    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload, // Ürünleri güncelle
      };

    case 'SET_SELECTED_CATEGORY':
      return {
        ...state,
        selectedCategory: action.payload, // Kategori seçimi
      };

    case 'SET_PRODUCT_DETAIL':
      return {
        ...state,
        productDetail: action.payload, // Ürün detayını güncelle
      };

    case 'ADD_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload], // Favorilere ürün ekle
      };

    case 'SET_FAVORITES':
      return {
        ...state,
        favorites: action.payload, // Favori ürünleri set et
      };

    default:
      return state;
  }
};
*/