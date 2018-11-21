<template>
  <section class="order_main">
    <van-nav-bar
      title="订单"
      left-text="返回"
      left-arrow
      @click-left="$router.back()"
    />
    <van-search placeholder="商品订单号|手机号码|姓名|物流单" />
    <van-tabs>
      <van-tab title="进行中" >
        <div class="running">
          <div class="active">
            <span>0</span>
            <span>待发货</span>
          </div>
          <div>
            <span>0</span>
            <span>代付款</span>
          </div>
          <div>
            <span>0</span>
            <span>已发货</span>
          </div>
          <div>
            <span>0</span>
            <span>退款/售后</span>
          </div>
        </div>
        <div>
          <img src="" alt="">
        </div>
      </van-tab>
      <van-tab title="已完成">
        内容 2
      </van-tab>
      <van-tab title="已关闭">
        内容 3
      </van-tab>
    </van-tabs>
  </section>

</template>

<script>
  export default {
    components:{
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
    background-color: #f1f1f1;
  }
  .running{
    height: 10vh;
    display: flex;
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
  .van-tabs__line{
    width: 33vw !important;
    transform: translateX(0) !important;
  }
</style>
