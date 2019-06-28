<template>
<div class="tab-container">

  <!--内页详情开始-->
  <div class="n_Main">
    <div class="n_left">
      <ul>
        <li><a>{{$t("dytii.productShow")}}</a></li>
        <li @click="changePro('display')"><a :class="{ 'chooseBg': displayShow}">{{$t("dytii.displayProps")}}</a></li>
        <li @click="changePro('sheet')"><a :class="{ 'chooseBg': sheetShow}">{{$t("dytii.sheetMetalProps")}}</a></li>
      </ul>
      <!--
      <div class="QQline">
        <a rel="nofollow" target="_blank" href="javascript:;"><img src="@/assets/about/QQ" /></a>
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
        {{$t("dytii.homepage")}}<span style=" color:#ffb252;"> >>　{{$t("dytii.productShow")}}</span>
      </div>
      <div class="n_centent" style="height:587px;"  v-show="displayShow">
        <ul class="alMain" v-show="pageNum == 1">

          <li @click="showDetail('display1')"><a ><img src="@/assets/product/display1.jpg" width="216" />
              <p>{{$t("dytii.productShow")}} </p>
            </a></li>
          <li @click="showDetail('display2')"><a ><img src="@/assets/product/display2.jpg" width="216" />
              <p>{{$t("dytii.productShow")}}</p>
            </a></li>
          <li @click="showDetail('display3')"><a ><img src="@/assets/product/display3.jpg" width="216" />
              <p>{{$t("dytii.productShow")}}</p>
            </a></li>
          <li @click="showDetail('display4')"><a ><img src="@/assets/product/display4.jpg" width="216" />
              <p>{{$t("dytii.productShow")}}</p>
            </a></li>
          <li @click="showDetail('display5')"><a ><img src="@/assets/product/display5.jpg" width="216" />
              <p>{{$t("dytii.productShow")}}</p>
            </a></li>
          <li @click="showDetail('display6')"><a ><img src="@/assets/product/display6.jpg" width="216" />
              <p>{{$t("dytii.productShow")}}</p>
            </a></li>

        </ul>
        <ul class="alMain" v-show="pageNum == 2">

          <li @click="showDetail('display7')"><a ><img src="@/assets/product/display7.jpg" width="216" />
              <p>{{$t("dytii.productShow")}} </p>
            </a></li>

        </ul>

      </div>

      <div class="n_centent" style="height:587px;"  v-show="sheetShow">
        <ul class="alMain" v-show="pageNum == 1">

          <li @click="showDetail('sheet1')"><a ><img src="@/assets/product/sheet1.jpg" width="216" />
              <p>{{$t("dytii.productShow")}} </p>
            </a></li>
          <li @click="showDetail('sheet2')"><a ><img src="@/assets/product/sheet2.jpg" width="216" />
              <p>{{$t("dytii.productShow")}}</p>
            </a></li>
          <li @click="showDetail('sheet3')"><a ><img src="@/assets/product/sheet3.jpg" width="216" />
              <p>{{$t("dytii.productShow")}}</p>
            </a></li>
          <li @click="showDetail('sheet4')"><a ><img src="@/assets/product/sheet4.jpg" width="216" />
              <p>{{$t("dytii.productShow")}}</p>
            </a></li>

        </ul>

      </div>


      <div class="page_list"  v-show="displayShow">
        <!-- <el-pagination @size-change="handleSizeChange" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total"></el-pagination> -->
        <el-pagination background @current-change="handleCurrentChange" :page-size="6" layout="total, prev, pager, next" :total="7">
        </el-pagination>
      </div>
      <div class="page_list" v-show="sheetShow">
        <!-- <el-pagination @size-change="handleSizeChange" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total"></el-pagination> -->
        <el-pagination background @current-change="handleCurrentChange" :page-size="6" layout="total, prev, pager, next" :total="4">
        </el-pagination>
      </div>
    </div>
  </div>
  <!--内页详情结束-->



</div>
</template>

<script>
import mixin from '@/mixins/list' // 引入


export default {
  mixins: [mixin], // 使用mixins
  components: {},
  data() {
    return {
      activeIndex: '1',
      pageNum: 1,
      displayShow: false,
      sheetShow: false,
      SelectLang: localStorage.getItem("CRMLang") || "zh_CN",
    }
  },
  created() {
    $(".banner").swBanner();
  },
  mounted() {
    if (this.$route.query.type == 'display') {
      this.displayShow = true
    } else if (this.$route.query.type == 'sheet') {
      this.sheetShow = true
    }
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
    }

  },
  watch: {
    '$route'(to, from) {
      if (to.query.type == 'display') {
        this.displayShow = true
        this.sheetShow = false
      } else if (to.query.type == 'sheet') {
        this.sheetShow = true
        this.displayShow = false
      }
    }
  }

}
</script>

<style lang="scss">
@import '../../../styles/index.scss'; // 全局自定义的css样式
.chooseBg {
    background: #ffb252!important;
    color: #fff!important;
}
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
