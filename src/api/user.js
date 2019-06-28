import request from '@/utils/request'
export function getUserList(data) {
  return request({
    url: 'user/search?userId='+window.sessionStorage.getItem('userId'),
    method: 'get'
  });
}
export function getorgList(data) {
  return request({
    url: 'org/searchByOrgName?orgName='+data,
    method: 'get'
  });
}

export function addUser(data) {
  return request({
    url: 'user/save',
    method: 'post',
    data
  });
}
export function saveUser(data) {
  return request({
    url: 'user/save',
    method: 'post',
    data
  });
}
export function editUser(data) {
  return request({
    url: 'user/update',
    method: 'post',
    data
  });
}
export function delUser(id) {
  return request({
    url: 'user/delete?id='+id+'&userId='+window.sessionStorage.getItem('userId'),
    method: 'get',

  });
}


export function resetPwd(data) {
  return request({
    url: 'user/updatePwd?id='+window.sessionStorage.getItem('userId')+'&oldPwd='+data.oldPwd+'&newPwd='+data.newPwd,
    method: 'get',
  });
}
