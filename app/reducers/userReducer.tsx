import { SET_USER, LOGOUT } from '../actions/types';

// reducers/userReducer.ts

interface UserState {
  id: number; // ID eklendi
  userName: string;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  id: 0, // Varsayılan id değeri
  userName: '',
  isLoggedIn: false,
};

const userReducer = (state = initialState, action: any): UserState => {
  switch (action.type) {
    // Burada login olma aksiyonları gibi işlem yapıyorsunuz
    case SET_USER:
      return { ...state, id: action.payload.id, userName: action.payload.userName, isLoggedIn: true };  
      
      case LOGOUT:
        return { 
          ...state, 
          id: 0, 
          userName: '', 
          isLoggedIn: false 
        };     
    default:
      return state;
  }
};

export default userReducer;

