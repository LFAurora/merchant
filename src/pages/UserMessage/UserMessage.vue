<template>
  <section class="user_message">
    <van-nav-bar
      title="店铺信息"
      left-text="返回"
      left-arrow
      fixed
      @click-left="$router.back()"
    />
    <div class="message_main">
      <div class="message_title">
        <div class="message_title_main">
          <img class="shop_logo_img" src="../../../static/images/git.jpg" alt="">
          <div class="shop_detial">
            <span>啊啊啊</span>
            <span>{{people}}人关注</span>
          </div>
          <h3>"{{announcement }}"</h3>
        </div>
      </div>
      <van-cell title="店铺logo" is-link value=''>
        <van-uploader :after-read="onRead">
          <img class="shop_logo_img1" src="../../../static/images/git.jpg" alt="" ref="goodsImg">
        </van-uploader>
      </van-cell>
        <van-cell title="店铺名称" is-link value="啊啊啊" @click="goTo('/main/shopName')" />
        <van-cell title="店铺签名" is-link value="未填写" @click="goTo('/main/ShopSignature')"/>
        <van-cell title="店铺地址" is-link value="未填写" @click="goTo('/main/ShopAddress')"/>
        <van-cell title="店长生日" is-link value="未填写" @click="goTo('/main/ManagerBirthday')"/>
        <van-cell title="客服电话" is-link value="未填写" @click="goTo('/main/modification')"/>
    </div>
  </section>
</template>

<script>
  export default {
    data(){
      return{
        people:5,
        announcement:'店铺签名'
      }
    },
    methods:{
      goTo(path){
        this.$router.push(path)
      },
      onRead(file) {
        console.log(file)
        this.$refs.goodsImg.src = file.content;
      }
    }
  }
</script>

<style>
  .van-cell__right-icon{
    line-height: 55px !important;
  }
  .van-n.av-bar__text{
    color: #fff;
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
  .message_title{
    width: 100vw;
    height: 40vh;
    background-color: rgba(35, 35, 35, 0.94);
  }
  .message_title_main{
    width: 90vw;
    height: 30vh;
    position: relative;
    top: 5vh;
    left: 5vw;
    background-color: white;
    border-radius: 5px;
  }
  .van-cell{
    line-height: 55px;
  }
  .logo{
    width: 50px;
  }
  .message_main{
    position: relative;
    top: 44px;
  }
  .shop_logo_img{
    width: 20vw;
    height: 20vw;
    margin-top: 5vw;
    margin-left: 5vw;
  }
  .shop_detial{
    display: inline-block;
    vertical-align: top;
    margin-top: 5vw;
    margin-left: 10vw;
  }
  .shop_detial>span{
    display: block;
    margin-top: 4vw;
  }
  h3 {
    margin-top: 13vw;
    margin-left: 5vw;
  }
  .shop_logo_img1{
    width: 10vw;
    height: 10vw;
    vertical-align: middle;
  }
</style>
