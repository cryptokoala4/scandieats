import { request, url } from './utils'

export function login(email, password) {
  return request({
    url: url('/signin'),
    method: 'POST',
    type: 'json',
    contentType: 'application/json',
    data: JSON.stringify({ email, password }),
    crossOrigin: true,
    success: function(success){
      // console.log("success", success)
    },
    error: function(err){
      console.log(err)
    },
  })
}

export function profile(token) {
  return request({
    url: 'https://vop6x5cocf.execute-api.ap-northeast-1.amazonaws.com/dev/profile',
    method: 'GET',
    type: 'json',
    contentType: 'application/json',
    crossOrigin: true,
    headers: {
      'Authorization': token
    },
    success: function(success){
      console.log("success", success)
    },
    error: function(err){
      console.log("error", err)
    },
  }, token)
}

export function profile2(token) {
  return request({
    url: 'https://p15el39av9.execute-api.ap-northeast-1.amazonaws.com/dev/requestme',
    method: 'GET',
    type: 'json',
    contentType: 'application/json',
    crossOrigin: true,
    headers: {
      'Authorization': token
    }
  }, token)
}



export function saveAuthentication(token, tokenId, profile) {
  if(localStorage) {
    localStorage.setItem('token', token);
    localStorage.setItem('tokenId', tokenId);
    localStorage.setItem('profile', JSON.stringify(profile))
  }
}

export function deleteAuthentication() {
  if(localStorage) {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenId');
    localStorage.removeItem('profile');
  }
}
