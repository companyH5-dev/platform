import request from '@/utils/request'

export function getTabList(data) {
  return request({
    url: 'api/tabList?picType='+data,
    method: 'get'
  });
}

export function getTabDetail(data) {
  return request({
    url: 'api/tabDetail',
    method: 'get'
  });
}
export function addTabDetail(data) {
  return request({
    url: 'api/tabDetail',
    method: 'post',
    data
  });
}

export function saveTabDetail(data) {
  return request({
    url: 'api/tabDetail',
    method: 'put',
    data
  });
}
export function delTabDetail(data) {
  return request({
    url: 'api/tabDetail/'+ data,
    method: 'delete',
  });
}
export function uploadFile(data) {//封面
  return request({
    url: 'api/file/upload',
    method: 'post',
    data
  });
}
export function addStar(data) {
  return request({
    url: 'api/addStar',
    method: 'put',
    data
  });
}
