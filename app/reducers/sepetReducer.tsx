// reducers/sepetReducer.ts
import { ADD_TO_SEPET, REMOVE_FROM_SEPET } from '../actions/types'

const initialState = {
  sepet: [],
};

export default function sepetReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_SEPET:
      return {
        ...state,
        sepet: [...state.sepet, action.payload],
      };
    case REMOVE_FROM_SEPET:
      return {
        ...state,
        sepet: state.sepet.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}
