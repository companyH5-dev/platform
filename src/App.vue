<template>
  <div id="app">
    <router-view ></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  provide(){
    return {
      reload:this.reload
    }
  },
  data(){
    return {
      isRouterAlive :true//页面刷新 不闪动
    }
  },
  methods:{
    reload(){//刷新路由
      this.isRouterAlive =false
      this.$nextTick(function(){
          this.isRouterAlive =true
      })
    }
  }
}
</script>

<style lang="scss">
 @import './styles/index.scss'; // 全局自定义的css样式
</style>
