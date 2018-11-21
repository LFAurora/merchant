<template>
  <section class="account_management">
    <van-nav-bar
      title="设置"
      left-text="返回"
      left-arrow
      fixed
      @click-left="$router.back()"
    />
    <van-cell-group style="margin-top: 44px">
      <van-cell title="认证信息" is-link @click="goTo('/main/information')" />
      <van-cell title="设备管理" is-link />
    </van-cell-group>
    <van-cell-group style="margin-top: 10px">
      <van-cell @click="goTo('/main/modification')" title="更换绑定手机号" value="15159125796" is-link />
    </van-cell-group>
    <van-cell-group style="margin-top: 10px">
      <van-cell title="修改密码" is-link @click="goTo('/main/change')" />
      <van-cell title="注销账号" is-link />
    </van-cell-group>
  </section>
</template>

<script>
  export default {
    methods:{
      goTo(path){
        this.$router.push(path)
      }
    }
  }
</script>

<style>
.account_management{
  height: 100vh;
  overflow: hidden;
  background-color: #f1f1f1;
}
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
</style>
