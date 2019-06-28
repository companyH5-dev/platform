import request from '@/utils/request'

export function getAllOrgList(data) {
  return request({
    url: 'org/search?userId='+window.sessionStorage.getItem('userId'),
    method: 'get'
  });
}

export function getAllAuthList(id) {
  return request({
    url: 'orgAuthRela/searchByOrgId?orgId='+id,
    method: 'get'
  });
}
export function saveOrgAuthRela(data) {
  return request({
    url: 'orgAuthRela/update',
    method: 'post',
    data
  });
}


export function AddOrg(data) {
  return request({
    url: 'org/save',
    method: 'post',
    data
  });
}

export function editOrg(data) {
  return request({
    url: 'org/update',
    method: 'post',
    data
  });
}


export function delOrg(id) {
  return request({
    url: 'org/delete?id='+id,
    method: 'get',

  });
}
