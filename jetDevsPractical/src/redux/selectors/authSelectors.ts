import {RootState} from '../store';

// for random user
export const getRandomUser = (state: RootState) => state.user.userData;

export const getLoader = (state: RootState) => state.user.isLoading;

export const getError = (state: RootState) => state.user.error;

// for favourite
export const getFavUser = (state: RootState) => state.fav.favUser;

export const getFavLoader = (state: RootState) => state.fav.isLoading;

export const getFavError = (state: RootState) => state.fav.error;
