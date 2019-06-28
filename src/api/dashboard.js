import request from '@/utils/request'

export function getneDeviceType(data) {
  return request({
    url:'/neDeviceType/search',
    // url: 'neDeviceType/searchByByMultiConditions?userId='+data.userId+'&nbTypeName='+data.nbTypeName+'&nbModel='+data.nbModel,
    method: 'get'
  });
}
export function saveneDeviceType(data) {
  return request({
    url: 'neDeviceType/save',
    method: 'post',
    data
  });
}




export function getdashboardList(data) {
  return request({
    url: 'api/dashboardList?picType='+data,
    method: 'get'
  });
}
export function addDashboard(data) {
  return request({
    url: 'api/dashboard',
    method: 'post',
    data
  });
}

export function saveDashboard(data) {
  return request({
    url: 'api/dashboard',
    method: 'put',
    data
  });
}
export function delDashboard(data) {
  return request({
    url: 'api/dashboard/'+ data,
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
