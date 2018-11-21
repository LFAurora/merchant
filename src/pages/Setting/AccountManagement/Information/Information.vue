<template>
  <section class="information_management">
    <van-nav-bar
      title="认证信息"
      left-text="返回"
      left-arrow
      fixed
      @click-left="$router.back()"
    />
    <div class="information_main">
      <p class="iconfont icon-cuowu error"></p>
      <h3 class="msg">已实名认证，没有绑定银行卡</h3>
    </div>
    <h6 class="information_title">认证信息</h6>
    <div class="information_all">
      <div class="title">
        <span>真实姓名</span>
        <span>张三</span>
      </div>
      <div class="title">
        <span>证件类型</span>
        <span>身份证</span>
      </div>
      <div class="title">
        <span>证件号码</span>
        <span>1xxxxxxxxxxxxxxx2</span>
      </div>
    </div>
    <button class="binding" @click="goTo('/main/binding')">去绑卡</button>
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
  .information_management{
    height: 100vh;
    overflow: hidden;
    background-color: #f1f1f1;
  }
  .information_main{
    width: 100vw;
    height: 30vh;
    margin-top: 44px;
    background-color: white;
  }
  .error{
    text-align: center;
    font-size: 12vw;
    position: relative;
    top: 8vh;
    color: rgb(231, 20, 26);
  }
  .msg{
    text-align: center;
    position: relative;
    margin-top: 10vh;
    font-size: 17px;
  }
  .information_title{
    height: 5vh;
    line-height: 5vh;
    padding-left: 5vw;
  }
  .information_all{
    width: 100vw;
    height: 25vh;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
  }
  .title{
    width: 100vw;
    margin-left: 8vw;
    font-size: 13px;
  }
  .title>span:nth-child(2){
    margin-left: 5vw;
  }
  .binding{
    width: 90vw;
    height: 6vh;
    background-color: rgb(231, 20, 26);
    color: #fff;
    border: none;
    margin-left: 5vw;
    margin-top: 3vh;
  }

</style>
