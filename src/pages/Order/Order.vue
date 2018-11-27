<template>
  <section class="order_main">
    <van-nav-bar
      title="订单"
      left-text="返回"
      left-arrow
      @click-left="$router.back()"
    />
    <van-search placeholder="商品订单号|手机号码|姓名" readonly />
    <van-tabs>
      <van-tab title="进行中" >
        <div class="running">
          <div :class="{active:'/order/WaitShipments'===$route.path}" @click="goTo('/order/WaitShipments')">
            <span>0</span>
            <span>待发货</span>
          </div>
          <span style="line-height: 10vh;color: #eeeeee;">|</span>
          <div :class="{active:'/order/WaitPayment'===$route.path}" @click="goTo('/order/WaitPayment')">
            <span>0</span>
            <span>待付款</span>
          </div>
          <span style="line-height: 10vh;color: #eeeeee;">|</span>
          <div :class="{active:'/order/AlreadyShipments'===$route.path}" @click="goTo('/order/AlreadyShipments')">
            <span>0</span>
            <span>已发货</span>
          </div>
          <span style="line-height: 10vh;color: #eeeeee;">|</span>
          <div :class="{active:'/order/Refund'===$route.path}" @click="goTo('/order/Refund')">
            <span>0</span>
            <span>退款/售后</span>
          </div>
        </div>
        <router-view></router-view>
      </van-tab>
      <van-tab title="已完成">
        <AlreadyComplete/>
      </van-tab>
      <van-tab title="已关闭">
        <AlreadyClose/>
      </van-tab>
    </van-tabs>
  </section>

</template>

<script>
  import AlreadyComplete from '../../components/AlreadyComplete/AlreadyComplete.vue'
  import AlreadyClose from '../../components/AlreadyClose/AlreadyClose.vue'
  export default {
    components:{
      AlreadyComplete,
      AlreadyClose
    },
    methods:{
      goTo(path){
        this.$router.replace(path)
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
  .order_main{
    background-color: #eeeeee;
    height: 100vh;
  }
  .running{
    height: 10vh;
    display: flex;
    background-color: #fbfbfb;
    justify-content: space-around;
  }
  .running>div{
    display: inline-block;
    /*height: 5vh;*/
    width: 25vw;
    padding-top: 2.5vh;
  }
  .running>div>span{
    display: block;
    text-align: center;
    line-height: 3vh;
  }
  .active{
    background-color: white;
  }
</style>
