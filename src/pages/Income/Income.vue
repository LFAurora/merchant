<template>
  <section class="income">
    <van-nav-bar
      title="收入资产"
      left-text="返回"
      left-arrow
      fixed
      @click-left="$router.back()"
    />
    <div class="income_main">
      <div class="income_main_show">
        <p class="use_balance">可用金额(元)</p>
        <div class="mon">
          <span class="money">1000000</span>
          <span class="detial">明细 ></span>
        </div>
        <button class="withdraw_deposit">提现</button>
      </div>
    </div>
    <van-collapse v-model="activeNames">
      <van-collapse-item title="待结算(元)" name="1" value="0.00">
        <van-cell-group>
          <van-cell title="交易中" value="0.00" label="进行中的订单金额"/>
          <van-cell title="结算中" value="0.00" label="已经完成的订单，次日可用" />
        </van-cell-group>
      </van-collapse-item>
      <van-collapse-item title="已提现" name="2" value="0.00">
        网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失
      </van-collapse-item>
      <van-collapse-item title="有赞美业" name="3" value="0.00">
        线上拓客，随时预约，贴心顺手的开单收银
      </van-collapse-item>
    </van-collapse>
    <van-cell-group style="margin-top: 2vh">
      <van-cell title="绑定银行卡" is-link value="未绑定" />
    </van-cell-group>
    <van-cell-group style="margin-top: 2vh">
      <van-cell title="收款码" is-link value="去申请" />
    </van-cell-group>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        activeNames: ['0']
      };
    }
  };
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
  .income{
    background-color: #d0d0d0;
    height: 100vh;
  }
.income_main{
  width: 100vw;
  height: 30vh;
  position: relative;
  margin-top: 44px;
  background-color: #E6AA68;
}
  .income_main_show{
    position: absolute;
    top: 2vh;
    left: 4vw;
    width: 92vw;
    height: 26vh;
    border-radius: 10px;
    background-color: #F4FFFD;
  }
  .use_balance{
    color: #8d8d8d;
    font-size: 12px;
    margin-left: 5vw;
    margin-top: 5vh;
  }
  .mon{
    width: 82vw;
    height: 8vh;
    line-height: 8vh;
    margin-left: 5vw;
    display: flex;
    justify-content: space-between;
  }
  .withdraw_deposit{
    width: 82vw;
    height: 6.5vh;
    margin-left: 5vw;
    border:none;
    margin-top: 2vh;
    background-color:#FB4D3D ;
    color: #fff;
  }
  .money{
    font-size:9vw;
    font-weight: bold;
  }
  .detial{
    font-size: 12px;
    color: #E6AA68;
  }
  .van-cell{
    line-height: 9vh;
  }
  .van-cell__right-icon{
    line-height: 9vh;
  }
</style>
