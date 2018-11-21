<template>
  <section class="my_shop">
    <div class="header">
      <div class="headerTop">
        <span class="name"><img src="./images/logo2.png" alt=""></span>
        <span>
          <a href="javascript:;" class="popularize_search">
            <i class="iconfont icon-icon-test search"></i>
            膳品推广
          </a>
        </span>
        <span class="set" @click="goTo('/main/setting')">
          <a>
            <i class="iconfont icon-shezhi"></i>
          </a>
        </span>
      </div>
      <div class="show_my">
        <div class="user_message">
          <img src="./images/head.jpg" alt="">
          <div class="login_message">
            <span >lalalal</span>
          </div>
        </div>
        <div class="shop_message">
          <div>
            <span>1</span>
            <span>客户总数</span>
          </div>
          <div>
            <span>10</span>
            <span>商品总数</span>
          </div>
          <div>
            <span>100</span>
            <span>待处理订单</span>
          </div>
          <div>
            <span>￥1000000000000</span>
            <span>交易金额</span>
          </div>

        </div>
      </div>
    </div>
    <van-notice-bar mode="link">
      足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。
    </van-notice-bar>
    <div class="user_cart">
      <div class="cart_top">
        <button @click="goTo('/main/customer')">
          <i class="iconfont icon-kehu"></i><br/>
          <span>客户</span>
        </button>
        <!--<router-link to="/main/addshop">-->
          <button @click="goTo('/main/addshop')">
            <i class="iconfont icon-tubiaoshangpin"></i><br/>
            <span>商品</span>
          </button>
        <!--</router-link>-->
        <button @click="goTo('/main/order')">
          <i class="iconfont icon-74wodedingdan"></i><br/>
          <span>订单详情</span>
        </button>
      </div>
      <div class="cart_bottom">
        <button @click="goTo('/main/income')">
          <i class="iconfont icon-zichan"></i><br/>
          <span>资产收入</span>
        </button>
        <button>
          <i class="iconfont icon-pingjia1"></i><br/>
          <span>客户评价</span>
        </button>
        <button>
          <i class="iconfont icon-fuwutiyanguanli"></i><br/>
          <span>服务</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
  import { NoticeBar } from 'vant';
  export default {
    components:{
      NoticeBar
    },
    methods:{
      goTo(path){
        this.$router.push(path)
      }
    }
  }
</script>

<style>

  .my_shop{
    width: 100vw;
    /*height: 100vh;*/
    background: #f3f3f1;
  }
  .header{
    width: 100vw;
    height: 28vh;
    background-image: url("./images/wen.jpg");
    /*background-color: #ff7100;*/
    /*background: radial-gradient(#ff5a40, #ff6951, #ff7862); !* 标准的语法 *!*/
  }
  .name{
    line-height: 5vh;
  }
  .name img{
    /*line-height: 5vh;*/
    vertical-align: middle;
    width: 16vw;
  }
  .popularize_search{
    display: block;
    vertical-align: middle;
    width: 40vw;
    height: 7vw;
    line-height: 7vw;
    border-radius: 3.5vw;
    background: rgba(255,255,255,0.7);
    font-size: 16px;
  }
  .search{
    margin-left: 15px;
  }
  .set i{
    /*font-weight: bold;*/
    font-size: 22px;
    color: black;
  }

  .scan i{
    /*font-weight: bold;*/
    font-size: 22px;
    color: black;
  }
  .headerTop{
    width: 84vw;
    margin-left: 8vw;
    top: 5vh;
    display: flex;
    justify-content:space-between;
    padding-top: 4vh;
  }
  .headerTop span{
    display: inline-block;
    vertical-align: bottom;
    line-height: 7vw;
  }
  .show_my{
    width: 84vw;
    height: 20vh;
    margin-left: 8vw;
    background: white;
    position: relative;
    top: 2vh;
    border-radius: 5px;
  }
  .user_message{
    width: 80vw;
    height: 8vh;
    margin-left: 2vw;
    display: flex;
    align-items:center;
    justify-content:space-between;
  }
  .user_message img{
    width: 10vw;
    height: 10vw;
  }
  .login_message{
    width: 66vw;
    height: 10vw;
    display: inline-block;
    margin-left: 15vw;
    margin-top: 5vw;
    /*background: red;*/
  }
  .shop_message{
    width: 80vw;
    height: 8vh;
    margin-left: 2vw;
    position: relative;
    top: 2.5vh;
    display: flex;
    justify-content:space-between;
  }
  .shop_message>div{
    display: inline-block;
  }
  .shop_message>div>span{
    display: block;
    text-align: center;
    line-height: 4vh;
  }
  .shop_message>div>span:nth-child(1){
    font-size: 4vw;
  }
  .shop_message>div>span:nth-child(2){
    font-size: 3vw;
    color: lightslategray;
  }
  .user_cart{
    width: 84vw;
    margin-left: 8vw;
    height: 59vh;
    position: relative;
    /*display: flex;*/
    /*justify-content:space-between;*/
    top: 4.2vh;
  }

  .user_cart i{
    font-size: 9vw;
    /*color: #fff;*/
  }
  .user_cart button{
    width: 24vw;
    height: 24vw;
    border-radius: 5px;
    border: none;
    background: palegoldenrod;
    color: white;
    font-size: 4vw;
  }
  .cart_top{
    width: 84vw;
    display: flex;
    justify-content: space-between;
  }
  .cart_top button:nth-child(1){
    /*background: red;*/
    background: radial-gradient(#ff4545,#ff2e2e,#ff1717,#ff0000 ); /* 标准的语法 */

  }
  .cart_top button:nth-child(2){
    /*background: #008bf8;*/
    background: radial-gradient(#45aaf9,#2ea0f9,#1795f8,#008bf8 ); /* 标准的语法 */
  }
  .cart_top button:nth-child(3){
    /*background: #8900c9;*/
    /*background: radial-gradient(#a945d7,#9e2ed2,#9317cd,#8900c9 ); !* 标准的语法 *!*/
    /*background: radial-gradient(#8900c9,#9317cd,#9e2ed2); !* 标准的语法 *!*/
    background: radial-gradient(#7100a5,#7d00b7,#8900c9 ); /* 标准的语法 */
  }
  .cart_bottom{
    margin-top: 3vh;
    width: 84vw;
    display: flex;
    justify-content: space-between;
  }
  .cart_bottom button:nth-child(1){
    background: #00aa60;
  }
  .cart_bottom button:nth-child(2){
    background: #FF4365;
  }
  .cart_bottom button:nth-child(3){
    background: #ff7f11;
  }
  .van-notice-bar--withicon{
    top: 3vh;
    border-radius: 5px;
  }

</style>
