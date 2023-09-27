import { all } from 'redux-saga/effects';

import AppSaga from './services/saga';
export default function* appSaga() {
  yield all([AppSaga]);
}
