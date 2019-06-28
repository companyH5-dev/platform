import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
// import $ from 'jquery'
import 'nprogress/nprogress.css' // Progress 进度条样式
import {
  Message
} from 'element-ui'
import {
  getToken
} from '@/utils/auth' // 验权
import MenuUtils from '@/views/MenuUtils'

// let data = JSON.parse(window.sessionStorage.getItem('user'))
// if (data) {
//   //这里是防止用户手动刷新页面，整个app要重新加载,动态新增的路由，会消失，所以我们重新add一次
//   let routes = []
//   MenuUtils(routes, data)
//   router.addRoutes(routes)
//   window.sessionStorage.removeItem('isLoadNodes')
// }

const whiteList = ['/login','/register','/registerDetail','/resetPaw','/resetPawManage','/xtcx/user/activate'] // 不重定向白名单
router.beforeEach((route, redirect, next) => {
    if (route.path) {
      next()
    } else {
      next({
        path: '/404'
      })
    }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
