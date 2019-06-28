import Vue from 'vue'
import ELEMENT from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import store from './store'
// import '@/icons' // 本地图标库
import '@/permission' // 权限
import validate from './utils/validate' // 验证
import VueI18n from 'vue-i18n'

import enLocale from './assets/lang/en-US'
import zhLocale from './assets/lang/zh-CN'

Vue.use(VueI18n)

// 使用多文件管理不同的语言是一个好习惯：
const i18n = new VueI18n({
  // locale: LangStorage.getLang('zh'),  // 语言标识，后面会用做切换和将用户习惯存储到本地浏览器
  locale: localStorage.getItem("CRMLang") || "zh", // 语言标识
  messages: {
    'zh': zhLocale,
    'en': enLocale
  }
})

Vue.use(ELEMENT);
// Vue.prototype.docUrl = 'http://192.168.191.1:8080/xtcx';

// Vue.prototype.imgBaseUrl = 'http://127.0.0.1:9990/upload/';
// Vue.prototype.docUrl = 'http://127.0.0.1:9990/api';

// Vue.prototype.imgBaseUrl = 'http://127.0.0.1:9009/upload/';
// Vue.prototype.docUrl = 'http://127.0.0.1:8080';


// var selfMessageCN = {
//   Name: "张三",
//   sayHello: "你好，{name}"
// }
//
// var selfMessageEN = {
//   Name: "zhangsan",
//   sayHello: "hello,{name}"
// }
// const messages = {
//   zh_CN: $.extend({}, zhLocale, selfMessageCN),
//   en_US: $.extend({}, enLocale, selfMessageEN),
// }

// Create VueI18n instance with options
// set locales

// Object.keys(messages).forEach(function(lang) {
//   Vue.locale(lang, messages[lang])
// })
//
Vue.prototype.CRMLang = localStorage.getItem("CRMLang") || "ch";



Vue.prototype.urlencode = function(str) {
  str = (str + '').toString();
  return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').
  replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
}
Vue.prototype.getformatTime = function() {
  var d = new Date(); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  let year = d.getFullYear()
  let month = parseInt(d.getMonth() + 1)
  let date = d.getDate()
  if (month < 10) {
    month = '0' + month
  }
  if (date < 10) {
    date = '0' + date
  }
  return year + '-' + month + '-' + date
}
Vue.prototype.deepCopy = function(src) {
  var ret = {}
  for (var k in src) {
    ret[k] = typeof src[k] === 'object' ? Vue.prototype.deepCopy(src[k]) : src[k]
  }
  return ret
}
Vue.filter('formatTime', value => {
  var d = new Date(value); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  let year = d.getFullYear()
  let month = parseInt(d.getMonth() + 1)
  let date = d.getDate()
  if (month < 10) {
    month = '0' + month
  }
  if (date < 10) {
    date = '0' + date
  }
  return year + '-' + month + '-' + date
})
Vue.filter('replaceKG', value => {
  value = value.replace(/<\/?.+?>/g, "");
  value = value.replace(/[\r\n]/g, "");
  value = value.replace(/\s+/g, "");
  return value;
})

Vue.prototype.validata = validate



new Vue({
  el: '#app',
  router,
   i18n,
  store,
  template: '<App/>',
  components: {
    App
  }
})
