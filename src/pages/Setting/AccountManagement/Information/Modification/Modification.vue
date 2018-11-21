<template>
  <section class="modification">
    <van-nav-bar
      title="修改手机号"
      left-text="返回"
      left-arrow
      fixed
      @click-left="$router.back()"
    />
    <div class="modification_main">
      <h3 >填写身份信息</h3>
      <h3>填写实名认证时的证件号，安全验证</h3>
      <div class="identity">
        <label>身份证</label>
        <input name="identity" type="text" placeholder="输入证件号码">
      </div>
    </div>
    <button class="modification_next">下一步</button>
  </section>
</template>

<script>
  export default {
    name: 'Modification'
  }
</script>

<style>
  .modification{
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
  .modification_main{
    margin-top: 44px;
    text-align: center;
  }
  .modification_main>h3:nth-child(1){
    margin-top: 100px;
    font-size: 17px;
  }
  .modification_main>h3:nth-child(2){
    margin-top: 10px;
    font-size: 16px;
    color: #8d8d8d;
  }
  .identity{
    width: 90vw;
    margin-left: 5vw;
    margin-top: 60px;
    height: 50px;
    background-color:#f1f1f1;
    border-bottom: 1px solid #9c9c9c;
  }
  .identity>input{
    width: 60vw;
    height: 50px;
    margin-left: 10vw;
    background-color: #f1f1f1;
  }
  .modification_next{
    width: 90vw;
    height: 50px;
    border: none;
    color: white;
    margin-top: 30px;
    background-color: rgb(231, 20, 26);
    margin-left: 5vw;
  }
</style>
