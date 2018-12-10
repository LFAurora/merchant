<template>
  <section class="activity_registration">
    <van-nav-bar
      title="活动报名"
      left-text="返回"
      left-arrow
      fixed
      @click-left="$router.back()"
    />
    <div class="activity_registration_main">
      <van-cell-group>
        <van-cell title="第9期积分专区动态精选招商"/>
      </van-cell-group>
      <van-cell-group>
        <van-cell title="招募对象" value="商品" />
        <van-cell title="报名时间" value="12月8日 0:00-12月14日 0:00" />
        <van-cell title="活动时间" value="12月10日 0:00-12月16日 0:00" />
      </van-cell-group>
      <h3 class="activity_cost_title">活动费用</h3>
      <van-cell-group>
        <van-cell title="单品费用" value="￥100/每件商品" />
        <h4 class="activity_cost_message">每件商品的报名费用，在审核通过时扣除，不可退款</h4>
      </van-cell-group>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'ActivityRegistration'
  }
</script>

<style>
  .van-nav-bar{
    background: linear-gradient(to right, #c90000, #ff2b20);
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
  .activity_registration_main{
    position: relative;
    top: 46px;
    background-color: #eeeeee;
  }
  .van-cell__value{
    font-size: 12px;
    color: #999999;
  }
  .activity_cost_title{
    line-height: 5vh;
    font-size: 12px;
    color: #999999;
    box-sizing: border-box;
    padding-left: 4vw;
  }
  .activity_cost_message{
    font-size: 10px;
    color: #999999;
    line-height: 15px;
    box-sizing: border-box;
    padding-right: 4vw;
    text-align: right;
  }

</style>
