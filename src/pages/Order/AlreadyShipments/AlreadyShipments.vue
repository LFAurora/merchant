<template>
  <section class="already_shipments">
    <div class="order_user">
      <img src="../../../../static/images/git.jpg" alt="">
      <div class="order_user_msg">
        <span>收货人:{{consigneeName}}</span>
        <span>下单时间 : {{orderTime}}</span>
        <span>本单金额 : ￥{{orderAmount}}</span>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data(){
      return{
        consigneeName:'已发货',
        orderTime:'2018-11-16 21:57:39',
        orderAmount:'80'
      }
    }
  }
</script>

<style>
  .order_user{
    width: 100vw;
    height: 15vh;
    /*margin-top: 10px;*/
    position: relative;
    top: 10px;
    background-color: white;
  }
  .order_user>img{
    width: 10vh;
    height: 10vh;
    margin-top: 2.5vh;
    margin-left: 2.5vh;
  }
  .order_user_msg{
    width: 70vw;
    height: 10vh;
    margin-left: 2vw;
    display: inline-block;
    vertical-align: bottom;
  }
  .order_user_msg>span{
    display: block;
  }
  .order_user_msg>span:nth-child(1){
    font-weight: bold;
  }
  .order_user_msg>span:nth-child(2){
    margin-top: 2vh;
    font-size: 13px;
    color: #d7d7d7;
  }
  .order_user_msg>span:nth-child(3){
    margin-top: 2vh;
    font-size: 13px;
    color: #d7d7d7;
  }
</style>
