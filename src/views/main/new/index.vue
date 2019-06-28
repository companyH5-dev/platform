<template>
<div class="tab-container">


  <!--内页详情开始-->
  <div class="n_Main">
  	<div class="n_left">
  		<ul>
  			<li ><a style="background: #ffb252;color:#fff;">新闻中心</a></li>
  			<li><a href="#">企业公告</a></li>
  			<li><a href="#">公司新闻</a></li>
  			<li><a href="#">行业新闻</a></li>
  		</ul>
      <!-- <div class="QQline">
        <a rel="nofollow" target="_blank" href="javascript:;"><img src="@/assets/about/QQ.png" /></a>
      </div> -->


        		<div class="n_contact"  style="padding-top:20px;">
              <div class=""  style="text-align: center;border-bottom: 1px solid#fff;padding-bottom: 10px;font-size: 12px;">
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

  	<div class="n_right" style="width: 730px;">
  		<div class="location">
    		首页　<span style=" color:#ffb252;"> >>  新闻中心</span>
  		</div>
  		<div class="n_centent">
  			　　<div class="subCont">
            <ul>
              <li>
                <div class="newrtitle"><a href="#">3D打印突破医疗禁区:外科手术实现“私人订制”</a></div>
                <p>{{$t("dytii.foundedContent")}}</p>
              </li>
              <li>
                <div class="newrtitle"><a href="#">3D打印突破医疗禁区:外科手术实现“私人订制”</a></div>
                <p>{{$t("dytii.foundedContent")}}</p>
              </li>
              <li>
                <div class="newrtitle"><a href="#">3D打印突破医疗禁区:外科手术实现“私人订制”</a></div>
                <p>{{$t("dytii.foundedContent")}}</p>
              </li>
            </ul>

                          <div class="page_list"><a href="javascript:;" title="已是第一页">&lt;&lt;</a><a href="javascript:;" title="已是第一页">&lt;</a><a href="javascript:;" class="on">1</a><a href="#" class="num" title="第 2 页">2</a><a href="#" title="下一页">&gt;</a><a href="#" title="最后一页">&gt;&gt;</a></div>

  					</div>
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
      SelectLang: localStorage.getItem("CRMLang") || "zh_CN",
    }
  },
  mounted() {
    this.baiduMap()
  },
  async mounted() {
    this.loading = false
    // this.loadPageList()
  },
  computed: {},
  methods: {
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
