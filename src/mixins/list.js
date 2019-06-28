import {
  uploadFile
} from '@/api/tabDetail'


import BMap from 'BMap'

const list = {

  data() {

    return {

      // 这些东西我们在list中处理，就不需要在每个页面再去手动的做这个了。

      userType: '', //通用用户类型
      flag: true, //通用判断
      listLoading: true, //全局loading
      loading: false, //表格loading

      list: [], //表格列表接参

      total: null,
      listQuery: {
        page: 1, // 页码
        limit: 10, // 页长
        objName: ''
      },

      textMap: {
        update: '编辑',
        dep: '部门详情',
        role: '角色详情',
        create: '添加'
      },
      dialogStatus: '', //新建编辑显示标题
      dialogadd: false, //新建按钮显示
      dialogsave: false, //编辑按钮显示

      dialogFormVisible: false, //控制弹出层

      auth: '', //功能权限

      editorInit: {
        language: 'zh_CN',
        plugins: [
          'advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools importcss insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount'
        ],
        toolbar: ['fontselect fontsizeselect  bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample',
          'hr bullist numlist link image charmap	 preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen'
        ],
        fontsize_formats: "8px 10px 12px 14px 18px 20px 24px 36px",
        font_formats: "微软雅黑='微软雅黑';宋体='宋体';黑体='黑体';仿宋='仿宋';楷体='楷体';隶书='隶书';幼圆='幼圆';Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings",
        height: 300,
        images_upload_handler(blobInfo, success, failure) {
          const formData = new FormData()
          formData.append('file', blobInfo.blob())
          uploadFile(formData, '1').then(res => {
            success(Vue.prototype.imgBaseUrl + res.data.savePath)
          }).catch(() => {
            failure('上传失败，请重新上传')
          })
        },
      },
    }

  },

  methods: {



      showDetail(name) {
        this.$router.push({
          path: '/detail',
          query: {
            picName: name,
          }
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
    handleSizeChange(val) {
      if (!isNaN(val)) {
        this.listQuery.limit = val
      }
    },
    handleCurrentChange(val) {
      if (!isNaN(val)) {
        this.pageNum = val
      }
    },

    /**

     * 表格数据请求成功的回调 处理完公共的部分（分页，loading取消）之后把控制权交给页面

     * @param {*} apiResult

     * @returns {*} promise

     */

    listSuccessCb(apiResult = {}) {

      return new Promise((reslove, reject) => {

        let tempList = [] // 临时list

        try {

          this.loading = false

          // todo

          // 直接抛出

          reslove(tempList)

        } catch (error) {

          reject(error)

        }

      })

    },

    /**

     * 处理异常情况

     * ==> 简单处理 仅仅是对表格处理为空以及取消loading

     */

    listExceptionCb(error) {

      this.loading = false

      console.error(error)

    }

  },

  created() {

    // 这个生命周期是在使用组件的生命周期之前

    this.$nextTick().then(() => {

      // todo

    })

  }

}

export default list
