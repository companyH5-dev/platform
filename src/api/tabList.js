import request from '@/utils/request'



export function getTabList(data) {
  return request({
    url: 'api/tabList',
    method: 'get'
  });
}
export function addTabList(data) {
  return request({
    url: 'api/tabList',
    method: 'post',
    data
  });
}

export function saveTabList(data) {
  return request({
    url: 'api/tabList',
    method: 'put',
    data
  });
}
export function delTabList(data) {
  return request({
    url: 'api/tabList/'+ data,
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
