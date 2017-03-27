import { fromJS } from 'immutable';

import {
  LOGIN_REQUESTED, LOGOUT_REQUESTED, LOGIN_SUCCESS, LOGOUT_SUCCESS,
  LOGIN_FAILURE, SESSION_EXPIRED, REQUEST_PROFILE, PROFILE_SUCCESS
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  errors: [],
  currentUser: process.env.NODE_ENV === 'development' ? localStorage.getItem('user') : null,
  userData: {
    repositories: false,
  },
  tokenIsExpired: false,
  token: process.env.NODE_ENV === 'development' ? localStorage.getItem('token') : null,
  tokenId: process.env.NODE_ENV === 'development' ? localStorage.getItem('tokenId') : null,
  isAuthenticating: false,
});

export default function appReducer(state = initialState, action) {
  switch(action.type) {
    case 'LOGIN_REQUESTED':
      return {
        ...state,
        errors: errors(state.errors, action),
        loading: loading(state.loading, action)
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        token: token(state.token, action),
        tokenId: tokenId(state.tokenId, action),
        errors: errors(state.errors, action),
        tokenIsExpired: tokenIsExpired(state.tokenIsExpired, action),
        loading: loading(state.loading, action),
        isAuthenticating: false
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        token: token(state.token, action),
        tokenId: tokenId(state.tokenId, action),
        errors: errors(state.errors, action),
        loading: loading(state.loading, action),
      };
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        token: token(state.token, action),
        tokenId: tokenId(state.tokenId, action),
      };
    case 'LOGGING_IN':
      return {
        ...state,
        isAuthenticating: true,
      };
    case 'SESSION_EXPIRED':
      return {
        ...state,
        tokenIsExpired: tokenIsExpired(state.tokenIsExpired, action),
      };
    case 'PROFILE_SUCCESS':
      return {
        ...state,
        profile: profile(state.profile, action)
      };
    default:
      return state
  }
}

function token(state, action) {
  switch(action.type) {
    case 'LOGIN_SUCCESS':
      return action.payload.token;
    case 'LOGOUT_SUCCESS':
    case 'LOGIN_FAILURE':
      return null;
    default:
      return state
  }
}

function tokenId(state, action) {
  switch(action.type) {
    case 'LOGIN_SUCCESS':
      return action.payload.idToken;
    case 'LOGOUT_SUCCESS':
    case 'LOGIN_FAILURE':
      return null;
    default:
      return state
  }
}

function user(state, action) {
  switch(action.type) {
    case 'LOGIN_SUCCESS':
      return action.payload.token;
    case 'LOGOUT_SUCCESS':
    case 'LOGIN_FAILURE':
      return null;
    default:
      return state
  }
}

function errors(state, action) {
  switch(action.type) {
    case 'LOGIN_REQUESTED':
    case 'LOGIN_SUCCESS':
      return [];
    case 'LOGIN_FAILURE':
      return action.payload.errors;
    default:
      return state
  }
}

function tokenIsExpired(state, action) {
  switch(action.type) {
    case 'LOGIN_SUCCESS':
      return false;
    case 'SESSION_EXPIRED':
      return true;
    default:
      return state
  }
}

function loading(state, action) {
  switch(action.type) {
    case 'LOGIN_REQUESTED':
      return true;
    case 'LOGIN_FAILURE':
    case 'LOGIN_SUCCESS':
      return false;
    default:
      return state
  }
}

function profile(state, action) {
  switch(action.type) {
    case 'LOGOUT_SUCCESS':
      return null;
    case 'PROFILE_SUCCESS':
      return action.payload.profile;
    default:
      return state
  }
}