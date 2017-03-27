/*
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */
import { push } from 'react-router-redux'
import { LOGIN_REQUESTED, LOGOUT_REQUESTED, LOGIN_SUCCESS, LOGOUT_SUCCESS, LOGIN_FAILURE, SESSION_EXPIRED, REQUEST_PROFILE, PROFILE_SUCCESS
} from './constants';

export function navigate(url) {
  return push(url)
}

export function requestLogin(username, password) {
  return { type: 'LOGIN_REQUESTED', payload: { username, password } }
}

export function requestLogout() {
  console.log("logout requested");
  return { type: 'LOGOUT_REQUESTED' }
}

export function loginSuccess(token, idToken, username) {
  // console.log("loginSuccess token: ", token)
  return { type: 'LOGIN_SUCCESS', payload: { token, idToken, username } }
}

export function logoutSuccess() {
  return { type: 'LOGOUT_SUCCESS' }
}

export function loginFailure(errors) {
  return { type: 'LOGIN_FAILURE', payload: { errors } }
}

export function sessionExpired() {
  return { type: 'SESSION_EXPIRED' }
}

export function requestProfile() {
  return { type: 'REQUEST_PROFILE' }
}

export function profileSuccess(profile) {
  return { type: 'PROFILE_SUCCESS', payload: { profile } }
}

export function resourceUnauthorized(resource) {
  return { type: 'RESOURCE_UNAUTHORIZED', payload: { resource } }
}

export function resourceForbidden(resource) {
  return { type: 'RESOURCE_FORBIDDEN', payload: { resource } }
}

export function generalError(msg) {
  const errors = Array.isArray(msg) ? msg : [msg];
  return { type: 'GENERAL_ERROR', payload: { errors } }
}

export function cleanMessages() {
  return { type: 'CLEAN_MESSAGES'}
}