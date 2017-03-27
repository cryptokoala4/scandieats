import { take, call, put, select } from 'redux-saga/effects';
import { takeEvery, takeLatest } from 'redux-saga';
import { LOGIN_REQUESTED, LOGOUT_REQUESTED, LOGIN_SUCCESS, LOGOUT_SUCCESS, LOGIN_FAILURE, SESSION_EXPIRED, REQUEST_PROFILE, PROFILE_SUCCESS } from 'containers/App/constants';
import { loginSuccess, loginFailure, navigate, profileSuccess, logoutSuccess } from '../../containers/App/actions'
import { login, profile, saveAuthentication, deleteAuthentication } from '../../api/authenticationApi'

export function* globalSagas() {
  yield [
    takeEvery('LOGOUT_REQUESTED', logoutRequested),
  ]
}

export function* logoutRequested() {
  console.log("global sagas logout requested");
  yield call(deleteAuthentication);
  yield put(navigate('/'));
  yield put(logoutSuccess())
}

export default [
  globalSagas,
];