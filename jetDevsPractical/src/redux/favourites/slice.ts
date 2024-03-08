import {createSlice} from '@reduxjs/toolkit'; //next js redux toolkit
import {FavUState} from '../models/appModels';

const initialState: FavUState = {
  favUser: [],
  isLoading: false,
  error: null,
};

export const favSlice = createSlice({
  name: 'favSlice',
  initialState,
  reducers: {
    setFavouriteUser: (state, action) => {
      state.favUser = action.payload;
      state.isLoading = false;
    },
    startLoading: state => {
      state.isLoading = true;
      state.error = null;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
// case under reducers becomes an action
export const {setFavouriteUser, startLoading, setError} = favSlice.actions;
export default favSlice.reducer;
