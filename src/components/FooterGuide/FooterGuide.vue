<template>
  <van-tabbar v-model="active">
    <van-tabbar-item @click="goTo('/main/myshop')" class="iconfont icon-wode">
      <span>我的店</span>
    </van-tabbar-item>
    <van-tabbar-item @click="goTo('/main/community')" class="iconfont icon-shequ-active">
      <span>社区</span>
    </van-tabbar-item>
    <van-tabbar-item @click="goTo('/main/message')" class="iconfont icon-xinxi3">
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
        icon: {
          normal: '//img.yzcdn.cn/icon-normal.png',
          active: '//img.yzcdn.cn/icon-active.png'
        }
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
  .icon-wode:before{
    font-size: 8vw;
  }
  .van-tabbar-item__text{
    font-size: 2vw;
  }
  .icon-shequ-active:before{
    font-size: 8vw;
  }
  .icon-xinxi3:before{
    font-size: 8vw;
  }
  .van-tabbar-item--active{
    color: #ffdc44;
  }
</style>
