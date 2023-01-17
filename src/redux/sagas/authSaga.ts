import { LOGIN } from '../constants/auth.constant';
import { takeLatest, call, put, select, takeEvery } from 'redux-saga/effects';

export function* loginSaga({ payload, onSuccess, onError }: any) {
  const { phone, password } = payload || {};
  try {
  } catch (error) {}
}

export default function* authSaga() {
  yield takeLatest(LOGIN.HANDLER, loginSaga);
}
