<template>

    <!--底部开始-->
    <div class="foot">
      <div class="footMain">
        <div class="foot1">
          <div class="foot1title">
            联系我们/CONTACT
          </div>
          <ul>
            <li>{{$t("dytii.tel")}}：0816-8888888</li>
            <li>{{$t("dytii.code")}}：314318</li>
            <li>{{$t("dytii.onlineCs")}}：269274122</li>
            <li>{{$t("dytii.email")}}：：269274122@qq.com</li>
            <li>{{$t("dytii.adress")}}</li>
          </ul>
        </div>
        <div class="foot2">
          <div class="foot1title">
            {{$t("dytii.link")}}
          </div>
          <ul>
            <div class="" style="float:left;width: 100%;">
              <li><a href="#">{{$t("dytii.comtitle")}}</a></li>
              <li><a href="#">{{$t("dytii.map")}}</a></li>
              <li><a href="#">{{$t("dytii.brand")}}</a></li>
            </div>
              <div class="" style="float:left;width: 100%;">
              <li><a href="#">{{$t("dytii.economic")}}</a></li>
              <li><a href="#">17{{$t("dytii.material")}}</a></li>
            </div>
              <div class="" style="float:left;width: 100%;">
              <li><a href="#">Iconfont</a></li>
              <li><a href="#">{{$t("dytii.panorama")}}</a></li>
            </div>
            <li><a href="#">Visual Hunt</a></li>

          </ul>
        </div>
        <div class="foot3">
          <p class="dilogo"><img style="width:150px;" src="@/assets/logo/logo_default.png" /></p>
          <p></p>
          <p>{{$t("dytii.preparation")}}</p>
          <p></p>
        </div>
      </div>
    </div>
    <!--底部结束-->

</template>

<script>
import {
  mapState,
  mapGetters
} from 'vuex'
import {
  resetPwd,
  sendCellphoneCode
} from '@/api/user'

import {
  Message
} from 'element-ui'

export default {

  data() {
    return {
      activeIndex: '1',
      SelectLang: '',
      name: '',
      dialogFormVisible: false,
      obj: {
        oldPwd: '',
        newPwd: '',
        rePassword: '',
      },
      userType: '',
      checkStatus: '',
    };
  },
  components: {},
  // computed: {
  //   showtipNum() {
  //     return window.sessionStorage.getItem('TIP_NUM')
  //   }
  // },
  mounted() {
    let locale = this.$i18n.locale
    locale === 'zh' ? ( this.SelectLang = '中文简体') : (this.SelectLang = 'English')
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.$router.push({
        path:'/'+key
      })
    },
    OnSelectLang: function() {
      let locale = this.$i18n.locale
      locale === 'zh' ? (this.$i18n.locale = 'en', localStorage.setItem("CRMLang", 'en'), this.SelectLang = 'English') : (this.$i18n.locale = 'zh', localStorage.setItem("CRMLang", 'zh'), this.SelectLang = '中文简体')
      // Vue.prototype.CRMLang = localStorage.getItem("CRMLang") || "ch";

    },
    loadIndex() {
      window.location.href = ''
    },
    async savePaw(obj) {

      if (!this.validata.validachangePWD(obj)) return
      if (obj.newPwd != obj.rePassword) {
        Message({
          message: '两次密码输入不一致！',
          type: 'error'
        })
        return
      }

      let {
        message,
        success
      } = await resetPwd(obj)
      if (success) {
        Message({
          message: '修改成功',
          type: 'success',
          duration: 5 * 1000
        })
        this.dialogFormVisible = false

        this.obj = {
          oldPwd: '',
          newPwd: '',
          rePassword: '',
        }
      } else {
        Message({
          message: message,
          type: 'error',
          duration: 5 * 1000
        })
      }
    },
    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar')
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    },
    showTip() {
      this.$store.commit('SHOW_TIP', true)
    }


  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
    height: 57px;
    line-height: 50px;
    border-radius: 0 !important;
    background: #252a2f;
    color: #fff;
    -webkit-box-shadow: 1px 0 5px rgba(0, 0, 0, 0.5);
    box-shadow: 1px 0 5px rgba(0, 0, 0, 0.5);

    .screenfull {
        position: absolute;
        right: 90px;
        top: 16px;
        color: red;
    }
    .avatarMesTip {
        cursor: pointer;
        position: absolute;
        display: inline-block;
        right: 260px;

    }
    .avatarname {
        position: absolute;
        display: inline-block;
        right: 100px;
    }
    .avatarBUT {
        position: absolute;
        display: inline-block;
        right: 260px;
    }

    .avatar-container {
        height: 50px;
        display: inline-block;
        position: absolute;
        right: 30px;
        .avatar-wrapper {
            cursor: pointer;
            margin-top: 5px;
            position: relative;
            .user-avatar {
                width: 40px;
                height: 40px;
                border-radius: 30px;
            }
            .el-icon-caret-bottom {
                position: absolute;
                right: -20px;
                top: 25px;
                font-size: 12px;
            }
        }
    }
}
.el-menu--horizontal {
    border-bottom: solid 1px #252a2f;
}
</style>
