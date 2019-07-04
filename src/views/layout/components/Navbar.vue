<template>
<div class="">
  <div class="top">
    <div class="topMain">
      <div class="logo"><a href="#"><img style="width:70%" src='@/assets/logo/logo.png' /></a></div>
      <div class="">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="dashboard">{{$t("dytii.webpage")}}</a>
          </el-menu-item>
          <el-menu-item index="about">{{$t("dytii.about")}}</el-menu-item>
          <!-- <el-menu-item index="newc">{{$t("dytii.newcenter")}}</el-menu-item> -->
          <el-submenu index="product">
            <template slot="title">{{$t("dytii.productcenter")}}</template>
            <el-menu-item index="display">{{$t("dytii.displayProps")}} </el-menu-item>
            <el-menu-item index="sheet">{{$t("dytii.sheetMetalProps")}} </el-menu-item>
          </el-submenu>
          <el-menu-item index="case">{{$t("dytii.application")}}</a>
          </el-menu-item>
          <el-menu-item index="factory">{{$t("dytii.factory")}}</el-menu-item>
          <el-menu-item index="contact">{{$t("dytii.contactus")}}</el-menu-item>
        </el-menu>
      </div>
    </div>

    <div style="position: absolute;right: 30px;float: right;top: 30px;">
      <!-- <el-select v-model="SelectLang" @change="OnSelectLang" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" arrow="always">
              </el-option>
            </el-select> -->
      <el-radio-group v-model="SelectLang" @change="OnSelectLang">
        <el-radio-button label="中文简体"></el-radio-button>
        <el-radio-button label="English"></el-radio-button>
      </el-radio-group>
    </div>


  </div>
  <!--顶部结束-->

  <!--banner开始-->
  <div class="banner">
    <el-carousel trigger="click" height="690px">
      <el-carousel-item>
        <!-- <li class="active"> <img src="@/assets/dashboard/banner.jpg" /></li> -->
      </el-carousel-item>

      <el-carousel-item v-if="SelectLang == '中文简体'">
        <!-- <li class="active"> <img src="@/assets/dashboard/banner1.jpg" /></li> -->
      </el-carousel-item>
      <!-- <el-carousel-item v-if="SelectLang == '中文简体'">
        <li class="active"> <img src="@/assets/dashboard/banner2.jpg" /></li>
      </el-carousel-item> -->

      <el-carousel-item v-if="SelectLang != '中文简体'">
        <!-- <li class="active"> <img src="@/assets/dashboard/banner_e1.jpg" /></li> -->
      </el-carousel-item>
      <!-- <el-carousel-item v-if="SelectLang != '中文简体'">
        <li class="active"> <img src="@/assets/dashboard/banner_e2.jpg" /></li>
      </el-carousel-item> -->
    </el-carousel>
  </div>

  <!--banner结束-->

</div>
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
  computed: mapState({
    showtipNum: state => state.user.tipNum
  }),
  // computed: {
  //   showtipNum() {
  //     return window.sessionStorage.getItem('TIP_NUM')
  //   }
  // },
  mounted() {
    let locale = this.$i18n.locale
    locale === 'zh' ? (this.SelectLang = '中文简体') : (this.SelectLang = 'English')
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.$router.push({
        path: '/' + keyPath[0],
        query: {
          type: keyPath[1],
        }
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
.banner img {
    vertical-align: middle;
    width: 100%;
}
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
