<template>
  <section class="customer">
    <van-nav-bar
      title="客户访问详情 "
      left-text="返回"
      left-arrow
      fixed
      @click-left="$router.back()"
    />
    <div class="customer_main">
      <div class="customer_details">
        <div class="detail">
          <div>
            <div class="iconfont icon-kehu">客户总数</div>
            <div class="customer_all">{{customerAll}}</div>
          </div>
          <div>
            <div><i class="iconfont icon-wode"></i>店铺粉丝</div>
            <div class="customer_all">{{customerFans}}</div>
          </div>
        </div>
      </div>
      <div class="customer_sum">
        <div class="cell" v-for="(cus,index) in customer">
          <img :src="cus.img" class="customer_photo" alt="">
          <div class="customer_msg">
            <div class="cName">{{cus.customerName}}</div>
            <div class="money">
              总交易额 ￥
              <span>{{cus.customerSum}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        customer:[{
          img:require('../../../static/images/git.jpg'),
          customerName:'大家好',
          customerSum:'200'
        },
        {
          img:require('../../../static/images/git.jpg'),
          customerName:'大家好',
          customerSum:'200'
        }],
        customerAll:20,
        customerFans:500
      }
    },
    mounted () {
    },
    methods:{
    }
  }
</script>

<style >
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
  .cell{
    border-top: 1px solid #eeeeee;
    height: 15vh;
  }
  .customer_main{
    position: relative;
    top: 46px;
    height: 100vh;
    background-color: #eeeeee;
  }
  .customer_details{
    width: 100vw;
    height: 25vh;
    background: linear-gradient(to bottom right, #d62611, #f5af19);
  }
  .detail{
    width: 70vw;
    margin-left: 15vw;
    display: flex;
    justify-content: space-between;
    position: relative;
    top: 9vh;
  }
  .icon-wode:before{
    /*color: #fff;*/
    font-size: 20px;
  }
  .icon-kehu:before{
    font-size: 20px;
  }
  .customer_all{
    margin-top: 5vw;
    font-size: 20px;
  }
  .customer_sum{
    margin-top: 20px;
    width: 100vw;
    height: auto;
    background-color: white;
  }
  .customer_photo{
    width: 15vw;
    height: 15vw;
    border-radius: 50%;
    object-fit: cover;
    line-height: 15vh;
    margin-left: 5vw;
    margin-top: 5vw;
  }
  .customer_msg{
    display: inline-block;
    margin-left: 5vw;
    height: 15vw;
    vertical-align: top;
    margin-top: 5vw;
  }
  .cName{
    margin-top: 1vw;
  }
  .money{
    margin-top: 3vw;
  }
</style>
