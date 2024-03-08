import {createSlice} from '@reduxjs/toolkit'; //next js redux toolkit
import {AppState} from '../models/appModels';

const initialState: AppState = {
  userData: [],
  isLoading: false,
  error: null,
};

export const ranSlice = createSlice({
  name: 'ranSlice',
  initialState,
  reducers: {
    setRandomUser: (state, action) => {
      state.userData = action.payload;
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
    clearRandomUser: state => {
      state.userData = [];
    },
  },
});
// case under reducers becomes an action
export const {setRandomUser, startLoading, setError, clearRandomUser} =
  ranSlice.actions;
export default ranSlice.reducer;
