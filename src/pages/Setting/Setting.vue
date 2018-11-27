<template>
  <section class="setting">
    <van-nav-bar
      title="设置"
      left-text="返回"
      left-arrow
      fixed
      @click-left="$router.back()"
    />
    <van-cell-group style="margin-top: 44px">
      <van-cell title="账号管理" is-link @click="goTo('/main/account')" />
      <van-cell title="生意档案" is-link />
      <van-cell title="新消息通知" is-link @click="goTo('/main/notification')"/>
      <van-cell title="规则中心" is-link />
    </van-cell-group>
    <van-cell-group style="margin-top: 10px">
      <van-cell title="膳品网页版" is-link @click="goTo('/main/shop')"/>
    </van-cell-group>
    <van-cell-group style="margin-top: 10px">
      <van-cell title="关于店铺" is-link />
      <van-cell title="企业资质" is-link />
      <van-cell title="帮助与反馈" is-link />
      <van-cell title="检查升级" is-link />
      <van-cell title="求评价" is-link />
    </van-cell-group>
    <button class="login_out">退出登录</button>
  </section>
</template>

<script>
  export default {
    methods: {
      goTo(path){
        this.$router.push(path)
      }
    }
  }
</script>

<style>
  .van-nav-bar{
    background-color: rgb(231, 20, 26);
  }
  .van-nav-bar .van-icon{
    color: #fff;
  }
  .van-nav-bar__text{
    color: #fff;
  }
  .van-nav-bar__title{
    color: #fff;
  }
  .van-cell{
    line-height: 5.8vh;
  }
  .van-cell__right-icon{
    line-height: 5.8vh;
  }
  .setting{
    background-color: #f1f1f1;
  }
  .login_out{
    width: 86vw;
    height: 8vh;
    border: none;
    margin-top: 2vh;
    margin-left: 7vw;
    margin-bottom: 2vh;
    background-color: white;
  }
</style>
