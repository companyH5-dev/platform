import request from '@/utils/request'

export function getAllAuthList(data) {
  return request({
    url: 'auth/getAllAuthByUserId?userId='+window.sessionStorage.getItem('userId'),
    method: 'get'
  });
}
export function addAuth(data) {
  return request({
    url: 'auth/save',
    method: 'post',
    data
  });
}

export function editAuth(data) {
  return request({
    url: 'auth/update',
    method: 'post',
    data
  });
}


export function delAuth(id) {
  return request({
    url: 'auth/delete?id='+id,
    method: 'get',
  });
}


export function resetPwd(data) {
  return request({
    url: 'api/user/resetPwd',
    method: 'post',
    data
  });
}
