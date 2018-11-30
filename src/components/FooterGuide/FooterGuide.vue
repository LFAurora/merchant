<template>
  <van-tabbar v-model="active" class="ss_top">
    <van-tabbar-item @click="goTo('/main/myshop')" class="iconfont icon-wode1">
      <i></i>
      <span>我的店</span>
    </van-tabbar-item>
    <van-tabbar-item @click="goTo('/main/community')" class="iconfont icon-shequ-active">
      <span>社区</span>
    </van-tabbar-item>
    <van-tabbar-item @click="goTo('/main/message')"  class="iconfont icon-xinxi">
      <span>消息</span>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vant';

  export default {
    data() {
      return {
        active: 0,
      }
    },
    components: {
      Tabbar,
      TabbarItem
    },
    methods:{
      goTo(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style>
  .icon-wode1:before{
    font-size: 8vw;
    line-height: 8vw;
  }
  .van-tabbar-item__text{
    font-size: 2vw;
  }
  .icon-shequ-active:before{
    font-size: 8vw;
  }
  .icon-xinxi:before{
    font-size: 10vw;
    line-height: 8vw;
  }
  .van-tabbar-item--active{
    color: #ffdc44;
  }
  .ss_top{
    border-top: 1px solid lightgrey;
  }
  .van-tabbar{
    height: 65px;
  }
  .active{
    color: #fff;
    background-color: #ffdc44;
  }
</style>
