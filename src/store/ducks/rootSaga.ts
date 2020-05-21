import { all, takeLatest } from 'redux-saga/effects';

import { ShoesTypes } from './shoes/types';
import { load } from './shoes/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(ShoesTypes.LOAD_REQUEST, load),
  ]);
}
