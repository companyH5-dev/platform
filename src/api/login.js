import request from '@/utils/request'


export function login(data) {
  return request({
    url: '/login/loginCheck',
    method: 'post',
    data
  });
}
export function getTreeList(data) {
  return request({
    url: 'auth/getAllAuthByUserId?userId='+ window.sessionStorage.getItem('userId'),
    method: 'get'
  });
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'get'
  })
}
