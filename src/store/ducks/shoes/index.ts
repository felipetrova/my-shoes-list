import { Reducer } from 'redux';
import { ShoesState, ShoesTypes } from './types';

const INITIAL_STATE: ShoesState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<ShoesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShoesTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case ShoesTypes.LOAD_SUCCCES:
      return {
      ...state, loading: false, error: false, data: action.payload.data,
      };
    case ShoesTypes.LOAD_FAILURE:
      return {
      ...state, loading: false, error: true, data: [],
      };
    default:
      return state;
  }
};

export default reducer;
