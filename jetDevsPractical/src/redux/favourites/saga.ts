import {takeEvery, put, select} from 'redux-saga/effects';
import {FAV_USER_SAGA} from '../../constants/actionNames';
import {setError, setFavouriteUser} from './slice';
import {FavAction} from './models';

// handle favourite and unFavourite logic in redux
export function* favouriteUser(action: FavAction): any {
  const {payload} = action;
  try {
    const previousData = yield select(state => state.fav.favUser);
    // convert array in set to proper delete and compare for too much data
    const newSetPreviousData = new Set(previousData);
    const newData = payload;
    let updatedData;
    if (newSetPreviousData.has(newData)) {
      newSetPreviousData.delete(newData);
      // convert convert set to array original type
      updatedData = Array.from(newSetPreviousData);
    } else {
      // concat data handle
      updatedData = [...newSetPreviousData, newData];
    }
    yield put(setFavouriteUser(updatedData));
  } catch (error) {
    yield put(setError('Something went worng, plz try again...'));
  }
}

export default function* favSaga() {
  yield takeEvery(FAV_USER_SAGA, favouriteUser);
}
