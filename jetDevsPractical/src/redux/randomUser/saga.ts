import {call, takeEvery, put, select} from 'redux-saga/effects';
import {GET_USER_LIST} from '../../constants/actionNames';
import {setRandomUser, setError, startLoading, clearRandomUser} from './slice';
import {userList} from '../../helper/api';
import {FetchAction} from './models';

export function* randomUser(action: FetchAction): any {
  const {payload} = action;
  try {
    yield put(startLoading());
    // if response data is big then plz create a seperate modal file
    if (payload.page == 0) {
      yield put(clearRandomUser());
    }
    const response: {results: []} = yield call(userList, payload);
    const previousData = yield select(state => state.user.userData);
    const newData = response.results;
    // here previous and new data concat when loadMore call
    const updatedData = [...previousData, ...newData];
    yield put(setRandomUser(updatedData));
  } catch (error) {
    yield put(setError('Something went worng, plz try again...'));
  }
}

export default function* randomSaga() {
  yield takeEvery(GET_USER_LIST, randomUser);
}
