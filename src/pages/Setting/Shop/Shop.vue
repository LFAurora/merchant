<template>
  <section class="shop">
    <van-nav-bar
      title="膳品"
      left-text="返回"
      left-arrow
      fixed
      @click-left="$router.back()"
    />
    <div class="msg">
      <h1>登录网页版</h1>
      <h4>在浏览器输入www.baidu.com,可在电脑上管理您的商品和订单</h4>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Shop'
  }
</script>

<style scoped>
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
  .shop{
    width: 100vw;
    height: 100vh;
    background: url("./images/shbg1.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .msg{
    position: absolute;
    top: 19.5vh;
    font-size: 16px;
    width: 55vw;
    margin-left: 20vw;
  }
  .msg h1{
    font-size: 6.5vw;
  }
  .msg h4{
    margin-top: 2vh;
    height: 3.5vh;
    line-height: 3.5vh;
  }
</style>
