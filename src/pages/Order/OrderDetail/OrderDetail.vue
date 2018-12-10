<template>
  <section class="Order_detail">
    <div class="order_detail_header">
      <span class="iconfont icon-jiantou2" @click="$router.back()"></span>
      <span class="order_detail_title">订单详情</span>
    </div>
    <div class="order_detail_main_all">
      <div class="order_detail_main">
        <h1 class="order_detail_state">{{state}}</h1>
        <van-steps :active="active">
          <van-step>提交订单</van-step>
          <van-step>卖家付款</van-step>
          <van-step>商家发货</van-step>
          <van-step>确认收货</van-step>
        </van-steps>
      </div>
      <div class="order_recipients_message">
         <h3><i class="iconfont icon-dingwei font"></i>&nbsp;&nbsp;<span class="recipients_name">收货人：{{recipientsName}}</span>&nbsp;
           <span class="recipients_phone">{{recipientsPhone}}</span></h3>
        <h3 class="recipients_address">收货地址：{{recipientsAddress}}</h3>
      </div>
      <div class="ssa"></div>
      <div class="recipients_shop">
        <img :src="shopImg" alt="">
        <div class="shop_msg">
          <span>{{shopName}}</span>
          <div class="shop_price_all">
            <span>￥{{shopPrice}}</span>
            <span class="shop_count">x{{shopCount}}</span>
          </div>
        </div>
      </div>
      <div class="ssa"></div>
      <div class="shop_money">
        <div>
          <span>商品金额</span>
          <span>￥{{shopPrice}}</span>
        </div>
        <div>
          <span>运费</span>
          <span>￥{{freight}}</span>
        </div>
      </div>
      <div class="ssa"></div>
      <div class="order_income">
        <span>本单收入</span>
        <span>￥{{shopCount*shopPrice}}</span>
      </div>
      <div class="order_message">
        <h3>订单编号：{{orderReference}}</h3>
        <h3>下单账号：{{userAccount}}</h3>
        <h3>下单时间：{{userAccount}}</h3>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'OrderDetail',
    data(){
      return{
        state:'已完成',
        active: 4,
        recipientsName:'xxx',
        recipientsPhone:'15159125796',
        recipientsAddress:'福建省三明市三元区荆东路25号三明学院南区快递超市',
        shopImg:require('../../../../static/images/git.jpg'),
        shopName:'你好',
        shopPrice:'50',
        shopCount:1,
        freight:9,
        orderReference:81801112020002,
        userAccount:15159125796,
        orderTime:'2018-10-15 21:17:35'
      }
    },
    methods:{

    }
  }
</script>

<style scoped>
  .Order_detail{
    background-color: #eeeeee;
    height: 100vh;
  }
  .order_detail_main{
    width: 100vw;
    height: 20vh;
    background: linear-gradient(to right, #f55c54,#f80000);
  }
  .order_detail_main_all{
    position: relative;
    top: 9vh;
    background-color: #eeeeee;
    padding-bottom: 20px;

  }
  .order_detail_header{
    width: 100vw;
    height: 9vh;
    line-height: 9vh;
    position: fixed;
    z-index: 10;
    background: linear-gradient(to right, #f55c54,#f80000);
  }
  .icon-jiantou2:before{
    font-size: 8vw;
    color: #fff;
    margin-left: 5vw;
  }
  .order_detail_title{
    font-size: 5vw;
    color: #fff;
    vertical-align: top;
    margin-left: 5vw;
  }
  .order_detail_state{
    font-size: 8vw;
    color: #fff;
    line-height: 9vh;
    margin-left: 5vw;
  }
  .van-steps{
    background: linear-gradient(to right, #f55c54,#f80000);
  }
  .order_recipients_message{
    width: 90vw;
    height: 15vh;
    margin-left: 5vw;
    border-radius: 10px;
    background-color: white;
    margin-top: 20px;
    box-sizing: border-box;
    padding: 3vw;
  }
  .recipients_name{
    font-weight: bold;
  }
  .recipients_address{
    box-sizing: border-box;
    padding-left: 7vw;
    padding-top: 3vw;
    color: #575757;
    font-size: 14px;
  }
  .recipients_phone{
    color: blue;
    font-weight: bold;
  }
  .font{
    color: #eeeeee;
  }
  .recipients_shop{
    width: 90vw;
    height: 20vh;
    background-color: white;
    margin-top: 20px;
    margin-left: 5vw;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 5vw;
  }
  .recipients_shop>img{
    width: 20vw;
    height: 20vw;
    object-fit: cover;
  }
  .shop_msg{
    display: inline-block;
    vertical-align: top;
    margin-left: 10px;
  }
  .shop_msg>span{
    display: block;
  }
  .shop_count{
    float: right;
  }
  .shop_price_all{
    width: 55vw;
    margin-top: 3vw;
  }
  .shop_money{
    width: 90vw;
    height: 11vh;
    background-color: white;
    border-radius: 10px;
    margin-left: 5vw;
    box-sizing: border-box;
    padding: 5vw;
    font-size: 12px;
    color: #575757;
    line-height: 3vh;
  }
  .ssa{
    width: 80vw;
    margin-left: 10vw;
    height: 1px;
    background-color: white;
    background-image: linear-gradient(to right, #ccc 0%, #ccc 50%, transparent 50%);
    background-size: 8px 1px;
    background-repeat: repeat-x;
  }
  .shop_money>div{
    width: 80vw;
  }
  .shop_money>div>span:nth-child(2){
    float: right;
  }
  .order_income{
    width: 90vw;
    height: 8.5vh;
    background-color: white;
    border-radius: 10px;
    margin-left: 5vw;
    box-sizing: border-box;
    padding: 5vw;
    font-size: 15px;
    line-height: 3vh;
  }
  .order_income>span:nth-child(1){
    color: #000;
    font-weight: bold;
  }
  .order_income>span:nth-child(2){
    float: right;
    color: #f80000;
  }
  .order_message{
    width: 90vw;
    height: 20vh;
    background-color: white;
    margin-left: 5vw;
    margin-top: 20px;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 5vw;
    line-height: 9vw;
    font-size: 12px;
    color: #9d9d9d;
  }
</style>
