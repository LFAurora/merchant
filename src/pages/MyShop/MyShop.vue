<template>
  <section class="my_shop" ref="viewBox">
    <div class="hide_header">
      <div class="hide">
        <span class="hide_name"><img src="../../../static/images/sp.png" alt=""></span>
        <!--<div class="hide_search iconfont icon-icon-test">-->
            <!--膳品推广-->
        <!--</div>-->
        <span class="hide_set" @click="goTo('/main/setting')">
            <i class="iconfont icon-shezhi"></i>
        </span>
      </div>
    </div>
    <div class="header">
      <div class="headerTop">
        <span class="name"><img src="../../../static/images/sp.png" alt=""></span>
        <!--<span>-->
          <!--<a href="javascript:;" class="popularize_search">-->
            <!--<i class="iconfont icon-icon-test search"></i>-->
            <!--膳品推广-->
          <!--</a>-->
        <!--</span>-->
        <span class="set" @click="goTo('/main/setting')">
          <a>
            <i class="iconfont icon-shezhi"></i>
          </a>
        </span>
      </div>
      <div style="position: relative">
        <div class="show_my" :class="{active:goTo}">
          <div class="user_message" @click="goTo('/main/userMessage')">
            <img src="../../../static/images/git.jpg" alt="">
            <div class="login_message">
              <span >{{user_name}}</span>
              <span>"{{shopNotices}}"</span>
            </div>
          </div>
          <div class="shop_message">
            <div @click.prevent="goTo('/main/customer')">
              <span>{{clientNum}}</span>
              <span>客户总数</span>
            </div>
            <div>
              <span>{{commodityNum}}</span>
              <span>商品总数</span>
            </div>
            <div>
              <span>{{indentNum}}</span>
              <span>待处理订单</span>
            </div>
            <div>
              <span v-if="moneyNum<=10000">￥{{moneyNum}}</span>
              <span v-else>￥{{moneyNum/10000}}w</span>
              <span>交易金额</span>
            </div>
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
          <span class="btn_name" >客户</span>
        </button>
          <button @click="goTo('/main/addshop')">
            <i class="iconfont icon-tubiaoshangpin"></i><br/>
            <span class="btn_name">商品</span>
          </button>
        <button @click="goTo('/order')">
          <i class="iconfont icon-74wodedingdan"></i><br/>
          <span class="btn_name">订单详情</span>
        </button>
      </div>
      <div class="cart_bottom">
        <button @click="goTo('/main/income')">
          <i class="iconfont icon-zichan"></i><br/>
          <span class="btn_name">资产收入</span>
        </button>
        <button @click="goTo('/evaluate')">
          <i class="iconfont icon-pingjia1"></i><br/>
          <span class="btn_name">客户评价</span>
        </button>
        <button @click="goTo('/main/ShopDecoration')">
          <i class="iconfont icon-zhuangxiu1"></i><br/>
          <span class="btn_name">店铺装修</span>
        </button>
      </div>
    </div>
    <div class="activity">
      <img style="width: 30vw;height: 10vh; margin-left: -4vw; margin-top: 1vh;" src="../../../static/images/active.png" alt="">
      <div class="activity_main">
        <van-swipe :autoplay="3000" :show-indicators="false">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" />
          </van-swipe-item>
        </van-swipe>
        <div class="mask">
          <h3 class="mask_title">5元付邮费试吃使用-首页广告活动</h3>
          <h4 class="activity_time">活动时间：12月05日-12月06日</h4>
          <div class="residue_time">
            <span>报名剩余14天09小时23分</span>
            <button>立即报名</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Vue from 'vue';
  import { Lazyload } from 'vant';
  import axios from 'axios'
  // options 为可选参数，无则不传
  Vue.use(Lazyload);
  export default {
    data(){
      return{
        user_name:'哈哈哈',
        clientNum:123,
        commodityNum:111,
        indentNum:123,
        moneyNum:5000000,
        shopNotices:'你好啊',//店铺签名
        images: [
          'static/images/git.jpg',
          'https://img.yzcdn.cn/2.jpg'
        ],
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
      goTo (path) {
        this.$router.push(path)
      },
      handleScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        // console.log(scrollTop)
        if(scrollTop>0){
          $('.hide_header').css("z-index",100)
        }else if(scrollTop<=0){
          $('.hide_header').css("z-index",-100)
        }
      },
    },
    watch:{
      moneyNum:function(val,oldval){
        if(val>=10000){
          oldval=val/10000 +'w'
        }
        console.log(val,oldval)
      }
    }
  }
</script>

<style scoped>
  .hide_name img{
    vertical-align: middle;
    width: 25vw;
  }
  .hide_search{
    display: inline-block;
    width: 40vw;
    height: 7vw;
    border-radius: 3.5vw;
    vertical-align: middle;
    /*background: rgba(255,255,255,0.7);*/
    /*background: linear-gradient(to bottom right, #fffcf2 , #FFFFFF);*/
    font-size: 16px;
  }
  .hide{
    width: 80vw;
    margin-left: 10vw;
    line-height: 10vh;
    display: flex;
    justify-content:space-between;
  }
  .hide_set i{
    font-size: 22px;
    color: black;
    font-weight: bold;
  }
  .hide_header{
    position: fixed;
    /*background-color: rgb(245,20,27);*/
    background: linear-gradient(to right, #da0000, #ff2b20);
    width: 100vw;
    color: #fff;
    height: 10vh;
    z-index: -100;
  }
  .btn_name{
    line-height: 7vw;
  }
  .my_shop{
    width: 100vw;
    background: #eeeeee;
    margin-bottom: 50px;
  }
  .header{
    width: 100vw;
    height: 35vh;
    background: linear-gradient(to bottom right, #FF512F , #F09819); /* 标准的语法 */
  }
  .name{
    line-height: 5vh;
  }
  .name img{
    vertical-align: middle;
    width: 25vw;
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
  .set i{
    font-size: 22px;
    color: black;
  }

  .headerTop{
    width: 84vw;
    margin-left: 8vw;
    display: flex;
    justify-content:space-between;
    padding-top: 5vh;

  }
  @keyframes mymove
  {
    0% {
      background-position: 50% 50%; }
    50%{
      background-position: 50% 100%;
    }
    100% {
      background-position: 100% 100%; }
  }
  .headerTop span{
    display: inline-block;
    vertical-align: bottom;
    line-height: 7vw;
  }
  .show_my{
    width: 84vw;
    height: 25vh;
    margin-left: 8vw;
    background: white;
    position: relative;
    top: 3vh;
    border-radius: 8px;
    background: linear-gradient(to bottom right, #fffcf2 , #FFFFFF); /* 标准的语法 */

  }
  .active{
    animation:mymove 10s ease infinite;
    background: linear-gradient(90deg,#dad299,#b0dab9);
    background-size:1400% 300%;
  }
  .user_message{
    width: 80vw;
    height: 15vw;
    margin-left: 2vw;
    display: flex;
    align-items:center;
    justify-content:space-between;
  }
  .user_message img{
    width: 12vw;
    height: 12vw;
    margin-top: 8vw;
    margin-left: 2vw;
  }
  .login_message{
    width: 66vw;
    height: 12vw;
    display: inline-block;
    margin-left: 5vw;
    margin-top: 8vw;
    position: relative;
  }
  .login_message>span{
    display: block;
  }
  .login_message>span:nth-child(2){
    position: absolute;
    bottom: 1vw;
  }
  .shop_message{
    width: 80vw;
    height: 8vh;
    margin-left: 2vw;
    position: relative;
    top: 5vh;
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
    height: 35vh;
    position: relative;
    top: 9.2vh;
  }

  .user_cart i{
    font-size: 9vw;
  }
  .user_cart button{
    width: 24vw;
    height: 24vw;
    /*line-height: 6vw;*/
    border-radius: 10px;
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
    box-shadow: 0 5px 10px rgba(255, 0, 0, .5);
    background: linear-gradient(#ff5c5c,#ff4545,#ff2e2e,#ff1717,#ff0000 ); /* 标准的语法 */
  }
  .cart_top button:nth-child(1):active{

  }
  .cart_top button:nth-child(2){
    /*background: #C200FB;*/
    box-shadow: 0 5px 10px rgba(194, 0, 251, .5);
    background: linear-gradient(#d85cfc,#d245fc,#cd2efb,#c717fb,#C200FB ); /* 标准的语法 */
  }
  .cart_top button:nth-child(3){
    /*background: #EC0868;*/
    box-shadow: 0 5px 10px rgba(236, 8, 104, .5);
    background: linear-gradient(#f2619e,#f14b91,#ef3483,#ed1e75,#EC0868 ); /* 标准的语法 */
    /*background: radial-gradient(#8900c9,#9317cd,#9e2ed2); !* 标准的语法 *!*/
    /*background: radial-gradient(#7100a5,#7d00b7,#8900c9 ); !* 标准的语法 *!*/
  }
  .cart_bottom{
    margin-top: 3vh;
    width: 84vw;
    display: flex;
    justify-content: space-between;
  }
  .cart_bottom button:nth-child(1){
    /*background: #EC7D10;*/
    box-shadow: 0 5px 10px rgba(236, 125, 16, .8);
    background: linear-gradient(#f2ac66,#f1a051,#ef943b,#ed8825,#EC7D10 );
  }
  .cart_bottom button:nth-child(2){
    /*background: #FFBC0A;*/
    box-shadow: 0 5px 10px rgba(255, 188, 10, .8);
    background: linear-gradient(#ffd463,#ffce4c,#ffc836,#ffc220,#FFBC0A );
  }
  .cart_bottom button:nth-child(3){
    /*background: #ff7f11;*/
    box-shadow: 0 5px 10px rgba(255, 127, 17, .8);
    background: linear-gradient(#ffad67,#ffa151,#ff963c,#ff8a26,#ff7f11 );
  }
  .van-notice-bar--withicon{
    top: 7vh;
    border-radius: 5px;
  }
  .activity{
    width:90vw;
    height: 40vh;
    background-color: white;
    border-radius: 8px;
    margin-top: 100px;
    margin-left: 5vw;
    position: relative;
    bottom: 5vh;
    box-shadow: 0 0 20px rgba(0, 0, 0, .2);
  }
  .activity_main{
    width: 80vw;
    margin-left: 5vw;
  }
  .activity_main img{
    width: 80vw;
    height: 24vh;
  }
  .mask{
    background-color: rgba(0,0,0,0.5);
    width: 80vw;
    height: 24vh;
    position: absolute;
    /*top: vh;*/
    top: 11vh;
  }
  .mask_title{
    margin-top: 8vw;
    font-size: 17px;
    margin-left: 3vw;
    color: #fff;
  }
  .activity_time{
    margin-left: 3vw;
    color: white;
    margin-top: 5vw;
    font-size: 13px;
  }
  .residue_time{
    margin-left: 3vw;
  }
  .residue_time>span{
    line-height: 10vh;
    color: #fff;
    font-size: 13px;
  }
  .residue_time>button{
    width: 25vw;
    height: 6vh;
    border: none;
    background-color: rgb(245,20,27);
    color: #fff;
    border-radius: 3vh;
    margin-left: 5vw;
  }

</style>
