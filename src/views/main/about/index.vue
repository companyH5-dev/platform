<template>
<div class="tab-container">
  <!--内页详情开始-->
  <div class="n_Main">
    <div class="n_left">
      <ul>
        <li><a style="background: #ffb252;color:#fff;">{{$t("dytii.about")}}</a></li>
        <li><a href="#">{{$t("dytii.companyprofile")}}</a></li>
        <li><a href="#">{{$t("dytii.culture ")}}</a></li>
        <li><a href="#">{{$t("dytii.leader")}}</a></li>
        <li><a href="#">{{$t("dytii.glories ")}}</a></li>
      </ul>
      <!-- <div class="QQline">
  			<a rel="nofollow" target="_blank" href="javascript:;"><img @click="openQQ" src="@/assets/about/QQ.png" /></a>
  		</div> -->

      <div class="n_contact" style="padding-top:20px;">
        <div class="" style="text-align: center;border-bottom: 1px solid#fff;padding-bottom: 10px;font-size: 12px;">
          <h4 style="text-align: left;font-weight: bold;color: #bdb8b8;padding: 10px 0;border-bottom: 1px solid#ccc;"> {{$t("dytii.contactus")}}</h4>
          <div class="" style="text-align: left;color: #bdb8b8;">{{$t("dytii.tel")}}：0573-8412-5195</div>
          <div class="" style="text-align: left;color: #bdb8b8;">{{$t("dytii.code")}}：314100</div>
          <div class="" style="text-align: left;color: #bdb8b8;">{{$t("dytii.url")}}：http://www.dtivmf.com</div>
          <div class="" style="text-align: left;color: #bdb8b8;">{{$t("dytii.email")}}：shawn-choo@hotmail.com</div>
          <div class="" style="text-align: left;color: #bdb8b8;">{{$t("dytii.adress")}}</div>
        </div>
      </div>

      <div class="n_contact">
        <div class="baidumap" id="allmap" style="width:100%;height:220px;margin:5px 0;">
        </div>
      </div>

    </div>

    <div class="n_right">
      <div class="location">
        {{$t("dytii.homepage")}}<span style=" color:#ffb252;"> >>　{{$t("dytii.about")}}</span>
      </div>
      <div class="n_centent">

        <div v-if="this.$i18n.locale == 'zh' && isRouterAlive" style="width:500px;">
          <d-player :video="video" :autoplay="autoplay" :contextmenu="contextmenu" :preload="preload" screenshot="true" @play="play">
          </d-player>
        </div>

        <div v-if="this.$i18n.locale != 'zh'  && isRouterAlive" style="width:500px;">
          <d-player :video="video2" :autoplay="autoplay" :contextmenu="contextmenu" :preload="preload" screenshot="true" @play="play">
          </d-player>
        </div>
      </div>
      <div class="">
        {{$t("dytii.WisdomContent")}}
      </div>
    </div>
  </div>
  <!--内页详情结束-->

</div>
</template>

<script>
import mixin from '@/mixins/list' // 引入
import VueDPlayer from './VueDPlayer.vue'

export default {
  mixins: [mixin], // 使用mixins
  components: {
    'd-player': VueDPlayer,
  },
  data() {
    return {

      isRouterAlive: true,
      video: {
        quality: [{
          name: '240P',
          url: 'https://aprils.oss-cn-beijing.aliyuncs.com/CN.mp4',
        }, {
          name: '360P',
          url: 'https://aprils.oss-cn-beijing.aliyuncs.com/CN.mp4',
        }, {
          name: '720P',
          url: 'https://aprils.oss-cn-beijing.aliyuncs.com/CN.mp4',
        }],
        url: 'https://aprils.oss-cn-beijing.aliyuncs.com/CN.mp4',
        pic: 'https://aprils.oss-cn-beijing.aliyuncs.com/123.png',
        defaultQuality: 1,
        thumbnails: 'https://aprils.oss-cn-beijing.aliyuncs.com/123.png',
        type: 'hls'
      },
      video2: {
        quality: [{
          name: '240P',
          url: 'https://aprils.oss-cn-beijing.aliyuncs.com/EN.mp4',
        }, {
          name: '360P',
          url: 'https://aprils.oss-cn-beijing.aliyuncs.com/EN.mp4',
        }, {
          name: '720P',
          url: 'https://aprils.oss-cn-beijing.aliyuncs.com/EN.mp4',
        }],
        url: 'https://aprils.oss-cn-beijing.aliyuncs.com/EN.mp4',
        pic: 'https://aprils.oss-cn-beijing.aliyuncs.com/123.png',
        defaultQuality: 1,
        thumbnails: 'https://aprils.oss-cn-beijing.aliyuncs.com/123.png',
        type: 'hls'
      },
      autoplay: false,
      player: null,
      contextmenu: [{
        text: '博客园',
        link: 'http://www.cnblogs.com/maqingyuan/'
      }, {
        text: '博客园',
        link: 'http://www.cnblogs.com/maqingyuan/'
      }, {
        text: '博客园',
        link: 'http://www.cnblogs.com/maqingyuan/'
      }],
      activeIndex: '1',
      SelectLang: localStorage.getItem("CRMLang") || "zh_CN",
    }
  },
  created() {
    $(".banner").swBanner();
  },
  mounted() {
    this.baiduMap()
  },
  computed: {},
  methods: {
    openQQ() {
      var qq = 181833218; //获取qq号
      window.open('tencent://message/?uin=' + qq + '&Site=&menu=yes', '_blank');
    },
    play() {
      console.log('play callback')
    },
    OnSelectLang: function() {
      let locale = this.$i18n.locale
      locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh'
    },
    cfm_msg() {
      if ($("#nickname").val() == "" || $("#nickname").val() == "请填写联系人姓名") {
        alert("请填写联系人姓名！");
        $("#nickname").focus();
        return false;
      }
      if ($("#email").val() == "" || $("#email").val() == "请填写联系人邮箱") {
        alert("请填写联系人邮箱！");
        $("#email").focus();
        return false;
      }
      if ($("#content").val() == "") {
        alert("请填写留言内容！");
        $("#content").focus();
        return false;
      }
      $("#form").submit();
    },
    reload() {
      this.isRouterAlive = false
      this.$nextTick(() => (this.isRouterAlive = true))
    }

  },
  watch: {
    '$i18n.locale'(to, from) {
      this.reload()

    }
  }
}
</script>

<style lang="scss">
@import '../../../styles/index.scss'; // 全局自定义的css样式

.dashboard .el-input__inner {
    height: 50px;
    line-height: 50px;
    border-radius: 0;
}
.dashboard .el-button {
    height: 50px !important;
    line-height: 50px !important;
    padding: 0 25px !important;
    border-radius: 0;
}
.cline {
    clear: both;
}

.tools {
    padding: 15px;
    height: 10%;
    border: 1px solid #ebeef5;
    background: #fff;
}
.title li {
    display: inline;
    list-style: none;
    padding: 10px;
    // background: #00C1DE;
    color: #a5a5a5;
    margin-right: 10px;
    font-size: 12px;
    cursor: pointer;
}
.head li {
    line-height: 30px;
    display: inline;
    list-style: none;
    padding-left: 10px;
    font-size: 20px;
    color: #409EFF;
    flex: 1;
    text-align: center;
}
.stitle {
    position: relative;
    font-size: 9px;
    color: #929292;
}
.bigtitle {
    margin: 0;
    color: #ccc;
    font-size: 15px;
    padding: 0 0 5px;
    border-bottom: 1px solid#e6e3e3;
}
.bigtitle h3 {
    font-weight: 100;
}
</style>
