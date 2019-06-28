<template>
<div class="tab-container">

  <!--首页关于我们开始-->
  <div class="about">
    <div class="aboutMain">

      <div v-show="this.$i18n.locale == 'zh'" class="abouttitle">
        <div class="aboutli">
          <div class="logo2"><img style="width: 30%;" src='@/assets/logo/logo.png' /></div>
        </div>
      </div>


      <div v-show="this.$i18n.locale != 'zh'" class="abouttitle2">
        <div class="aboutli">
          <div class="logo2"><img style="width: 30%;" src='@/assets/logo/logo.png' /></div>
        </div>
      </div>

      <div class="aboutcon">
        <div class="aboiutcontent">
          {{$t("dytii.WisdomContent")}}
        </div>
        <div class="shipin">

          <div v-if="this.$i18n.locale == 'zh' && isRouterAlive" style="width:500px;">
            <d-player :video="video" :autoplay="autoplay" :contextmenu="contextmenu" :preload="preload" screenshot="true" @play="play">
            </d-player>
          </div>

          <div v-if="this.$i18n.locale != 'zh'  && isRouterAlive" style="width:500px;">
            <d-player :video="video2" :autoplay="autoplay" :contextmenu="contextmenu" :preload="preload" screenshot="true" @play="play">
            </d-player>
          </div>
        </div>

      </div>
    </div>
  </div>
  <!--首页关于我们结束-->

  <!--首页产品开始-->
  <div class="cp">
    <div class="cpMain">
      <div class="cptitle"><img src="@/assets/dashboard/cptitle.png" /></div>
      <div class="cpdes">
        {{$t("dytii.ZhejiangContent")}}</div>

      <div class="cplist">
        <div class="cpleft" style="text-align: center;border-bottom: 1px solid#fff;padding-bottom: 10px;">
          <div class="">
            <h4 style="text-align: left;font-weight: 600;margin-top: 0px;margin-bottom: 11px;color:#fff">{{$t("dytii.display")}} </h4>

            <div class="cpleftdes" style="text-align: left;    line-height: 18px;">{{$t("dytii.developedContent")}} </div>

            <a @click="changePro('display')"> {{$t("dytii.moredetails")}} >></a>

          </div>
        </div>
        <div class="cpright">
          <ul>
            <li @click="showDetail('display1')"><a><img src="@/assets/product/display1.jpg" width="200" height="200" /></a></li>
            <li @click="showDetail('display2')"><a><img src="@/assets/product/display2.jpg" width="200" height="200" /></a></li>
            <li @click="showDetail('display3')"><a><img src="@/assets/product/display3.jpg" width="200" height="200" /></a></li>
            <li @click="showDetail('display4')"><a><img src="@/assets/product/display4.jpg" width="200" height="200" /></a></li>
          </ul>
        </div>
      </div>

      <div class="cplist">
        <div class="cpleft" style="text-align: center;border-bottom: 1px solid#fff;padding-bottom: 10px;">
          <div class="">
            <h4 style="text-align: left;font-weight: 600;margin-top: 0px;margin-bottom: 11px;color:#fff">{{$t("dytii.sheet")}} </h4>
            <div class="cpleftdes" style="text-align: left;line-height: 18px;">{{$t("dytii.developedsheetContent")}}</div>
            <a @click="changePro('sheet')">{{$t("dytii.moredetails")}} >></a>
          </div>
        </div>
        <div class="cpright">
          <ul>
            <li @click="showDetail('sheet1')"><a><img src="@/assets/product/sheet1.jpg" width="200" height="200" /></a></li>
            <li @click="showDetail('sheet2')"><a><img src="@/assets/product/sheet2.jpg" width="200" height="200" /></a></li>
            <li @click="showDetail('sheet3')"><a><img src="@/assets/product/sheet3.jpg" width="200" height="200" /></a></li>
            <li @click="showDetail('sheet4')"><a><img src="@/assets/product/sheet4.jpg" width="200" height="200" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!--首页产品结束-->



  <!--首页新闻开始-->
  <!-- <div class="new">
    <div class="newMain">
      <div class="newtitle"><img src="@/assets/dashboard/newtitle.png" /></div>
      <div class="newcon">
        <div class="newleft">
          <ul>
            <li><a >{{$t("dytii.announcements")}}</a></li>
            <li><a >{{$t("dytii.companynews")}}</a></li>
            <li><a >{{$t("dytii.tradenews ")}}</a></li>
            <div class="clearfix"></div>
          </ul>
          <div class="dianshi">
            <div class="topnew">
              <a >
                <img src="@/assets/dashboard/tupian.jpg" width="370" height="216" />
                <div class="toumingbt"></div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="newright">
        <ul>
          <li>
            <div class="newrtitle"><a >3D打印突破医疗禁区:外科手术实现“私人订制”</a></div>
            <p>{{$t("dytii.foundedContent")}}</p>
          </li>
          <li>
            <div class="newrtitle"><a >3D打印突破医疗禁区:外科手术实现“私人订制”</a></div>
            <p>{{$t("dytii.foundedContent")}}</p>
          </li>
          <li>
            <div class="newrtitle"><a >3D打印突破医疗禁区:外科手术实现“私人订制”</a></div>
            <p>{{$t("dytii.foundedContent")}}</p>
          </li>
        </ul>
      </div>

    </div>
  </div> -->
  <!--首页新闻结束-->

  <!--案例展示开始-->
  <div class="anli">
    <div class="anliMain">
      <div class="anlititle"></div>
      <ul>
        <li @click="showDetail('alzs-1')"><a><img src="@/assets/dashboard/alzs-1.jpg" width="274" height="180" /></a>
          <p><a>{{$t("dytii.caseshows")}}</a></p>
        </li>
        <li @click="showDetail('alzs-2')"><a><img src="@/assets/dashboard/alzs-2.jpg" width="274" height="180" /></a>
          <p><a>{{$t("dytii.caseshows")}}</a></p>
        </li>
        <li @click="showDetail('alzs-3')"><a><img src="@/assets/dashboard/alzs-3.jpg" width="274" height="180" /></a>
          <p><a>{{$t("dytii.caseshows")}}</a></p>
        </li>
        <li @click="showDetail('alzs-4')"><a><img src="@/assets/dashboard/alzs-4.jpg" width="274" height="180" /></a>
          <p><a>{{$t("dytii.caseshows")}}</a></p>
        </li>
        <div class="clearfix"></div>
      </ul>
      <div class="moreanli"><a @click="jumpTo('case')">{{$t("dytii.morecase")}}>></a></div>
    </div>
  </div>
  <!--案例展示结束-->

  <!--合作伙伴开始-->
  <div class="hezuo">
    <div class="hezuoMain">
      <div class="hztitle"></div>
      <ul>
        <li @click="showDetail('cqzs-1')"><a><img src="@/assets/dashboard/cqzs-1.jpg" width="200" height="140" /></a></li>
        <li @click="showDetail('cqzs-2')"><a><img src="@/assets/dashboard/cqzs-2.jpg" width="200" height="140" /></a></li>
        <li @click="showDetail('cqzs-3')"><a><img src="@/assets/dashboard/cqzs-3.jpg" width="200" height="140" /></a></li>
        <li @click="showDetail('cqzs-6')"><a><img src="@/assets/factory/cqzs-6.jpg" width="200" height="140" /></a></li>
        <li @click="showDetail('cqzs-8')"><a><img src="@/assets/factory/cqzs-8.jpg" width="200" height="140" /></a></li>
        <div class="clearfix"></div>
      </ul>
      <div class="moreanli"><a @click="jumpTo('factory')">{{$t("dytii.partners")}}>></a></div>
    </div>
  </div>
  <!--合作伙伴结束-->


  <!--联系开始-->

  <div class="lx">
    <div class="lxMain">
      <div class="lxtitle"></div>
      <div class="lxcon">
        <div class="lxleft">
          <form name="form" id="form" action="" method="POST" enctype="application/x-www-form-urlencoded">
            <ul>
              <li>
                <div class="namebj" v-show="this.$i18n.locale == 'zh'">
                  <input type="text" name="nickname" id="nickname" value="请填写联系人姓名" style="width:240px; margin-top:3px; border:none; height:30px; margin-left:35px; outline:none;" onfocus="this.value = this.value == this.defaultValue ? '' : this.value"
                    onblur="this.value = this.value == '' ? this.defaultValue : this.value" />
                </div>
                <div class="namebj" v-show="this.$i18n.locale != 'zh'">
                  <input type="text" name="nickname" id="nickname" value="the contact person" style="width:240px; margin-top:3px; border:none; height:30px; margin-left:35px; outline:none;" onfocus="this.value = this.value == this.defaultValue ? '' : this.value"
                    onblur="this.value = this.value == '' ? this.defaultValue : this.value" />
                </div>
              </li>
              <li style="padding-left: 20px;">
                <div class="emailbj" v-show="this.$i18n.locale == 'zh'">
                  <input type="text" name="email" id="email" value="请填写联系人邮箱" style="width:240px; margin-top:3px; border:none; height:30px; margin-left:35px; outline:none;" onfocus="this.value = this.value == this.defaultValue ? '' : this.value"
                    onblur="this.value = this.value == '' ? this.defaultValue : this.value" />
                </div>
                <div class="emailbj" v-show="this.$i18n.locale != 'zh'">
                  <input type="text" name="email" id="email" value="the contact mailbox" style="width:240px; margin-top:3px; border:none; height:30px; margin-left:35px; outline:none;" onfocus="this.value = this.value == this.defaultValue ? '' : this.value"
                    onblur="this.value = this.value == '' ? this.defaultValue : this.value" />
                </div>
              </li>
              <div class="clearfix"></div>
            </ul>
            <div class="contentbj">
              <textarea name="content" id="content" title="请填写留言内容" style=" width:543px; margin-left:35px; height:190px; margin-top:8px; border:none;outline:none;"></textarea>
            </div>
            <a class="tijiao" href="javascript:void(0);" @click="cfm_msg()">{{$t("dytii.submit")}}</a>
          </form>
        </div>
        <div class="lxright">

          <div class="baidumap" id="allmap" style="width:100%;height:320px;margin-top:10px;">
          </div>
          <!-- <img src="@/assets/dashboard/map.jpg" /> -->

        </div>
      </div>
    </div>
  </div>
  <!--联系结束-->


</div>
</template>

<script>
import mixin from '@/mixins/list' // 引入
import BMap from 'BMap'
import VueDPlayer from '@/views/main/about/VueDPlayer.vue'

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
      preload: false,
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

    changePro(name) {
      this.$router.push({
        path: '/product',
        query: {
          type: name,
        }
      })
    },

    play() {
      console.log('play callback')
    },
    jumpTo(name) {
      this.$router.push({
        path: '/' + name
      })
    },
    baiduMap() {

      // 百度地图API功能
      let map = new BMap.Map("allmap");
      // 百度坐标系坐标(地图中需要使用这个)
      var bPoints = new Array();
      //设置中心点
      map.centerAndZoom(new BMap.Point(120.963583, 30.874271), 15);
      //后台数据
      var data_info = [
        [120.963583, 30.874271, "地址：浙江省嘉善县惠民街道金嘉大道50号内2号厂房"],
      ];
      //信息窗口样式
      var opts = {
        width: 250, // 信息窗口宽度
        height: 80, // 信息窗口高度
        title: "<p style='color: red;'>浙江袋田精密制造有限公司</p>", // 信息窗口标题
        enableMessage: true //设置允许信息窗发送短息
      };
      addMarker(data_info);

      //创建标注点并添加到地图中
      function addMarker(data_info) {
        //循环建立标注点
        for (var i = 0; i < data_info.length; i++) {

          var point = new BMap.Point(data_info[i][0], data_info[i][1]); //将标注点转化成地图上的点
          bPoints.push(point); // 添加到百度坐标数组 用于自动调整缩放级别
          var marker = new BMap.Marker(point); // 创建标注
          var content = data_info[i][2];
          map.addOverlay(marker); // 将标注添加到地图中
          addClickHandler(content, marker);
        }
      }

      function addClickHandler(content, marker) {
        marker.addEventListener("click", function(e) {
          openInfo(content, e)
        });
      }

      function openInfo(content, e) {
        var p = e.target;
        var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
        var infoWindow = new BMap.InfoWindow(content, opts); // 创建信息窗口对象
        map.openInfoWindow(infoWindow, point); //开启信息窗口
      }
      // 根据点的数组自动调整缩放级别
      function setZoom(bPoints) {
        var view = map.getViewport(eval(bPoints));
        var mapZoom = view.zoom;
        var centerPoint = view.center;
        map.centerAndZoom(centerPoint, mapZoom);
      }
      map.addControl(new BMap.MapTypeControl());
      map.enableScrollWheelZoom(true);
      setTimeout(function() {
        setZoom(bPoints);
      }, 1000)
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

      alert("提交成功！");
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
// @import '../../../styles/index.scss'; // 全局自定义的css样式
</style>
