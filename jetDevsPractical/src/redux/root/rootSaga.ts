import {spawn} from 'redux-saga/effects';
import favSaga from '../favourites/saga';
import randomSaga from '../randomUser/saga';

//Register all possible saga's here. E.g: randomSaga, favSaga
export default function* rootSaga() {
  yield spawn(randomSaga);
  yield spawn(favSaga);
}
