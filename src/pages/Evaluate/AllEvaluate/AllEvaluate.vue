<template>
  <section class="all_evaluate">
    <div class="user_evaluate">
      <div class="user_photo">
        <img src="../../../../static/images/git.jpg" alt="">
      </div>
      <div class="user_about">
        <span class="user_name">你好啊</span>
        <van-rate
          v-model="value"
          :size="15"
          :count="5"
          color="#2ba"
          void-color="#F5141B"
          disabled
          disabled-color="#F5141B"
        />
      </div>
      <div class="evaluate_msg">
        <span>{{evaluate}}</span>
      </div>
      <div class="evaluate_shop">
        <img src="../../../../static/images/git.jpg" alt="">
        <div class="evaluate_shop_msg">
          <span>{{evaluateShopName}}</span>
          <span>￥{{evaluateShopPrice}}</span>
        </div>
      </div>
      <div class="evaluate_btn">
        <button>回复</button>
        <button>查看订单</button>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data(){
      return{
        value: 3,
        evaluate:'好评',
        evaluateShopName:'你好',
        evaluateShopPrice:20
      }
    }
  }
</script>

<style>
  .user_evaluate{
    width: 100vw;
    height: 40vh;
    background-color: white;
    border-top: 1px solid #eeeeee;
  }
  .user_photo{
    width: 15vw;
    height: 10vh;
    display: inline-block;
    line-height: 10vh;
    margin-left: 5vw;
  }
  .user_photo>img{
    width: 10vw;
    height: 10vw;
    margin-top: 2vh;
    border-radius: 50%;
  }
  .van-rate{
    display: inline-block;
    float: right;
  }
  .user_name{
    vertical-align: top;
    font-size: 15px;
    color: #3242ff;
  }
  .user_about{
    display: inline-block;
    width: 70vw;
    line-height: 10vh;
    vertical-align: top;
  }
  .evaluate_msg{
    display: inline-block;
    width: 70vw;
    line-height: 5vh;
    margin-left: 20vw;
  }
  .evaluate_shop{
    width: 70vw;
    height: 12vh;
    margin-top: 5vw;
    margin-left: 20vw;
    background-color: #eeeeee;
  }
  .evaluate_shop>img{
    width: 8vh;
    height: 8vh;
    margin-top: 2vh;
    margin-left: 2vh;
  }
  .evaluate_shop_msg{
    display: inline-block;
    width: 30vw;
    height: 8vh;
    vertical-align: top;
    margin-top: 2vh;
  }
  .evaluate_shop_msg>span{
    display: block;
  }
  .evaluate_shop_msg>span:nth-child(2){
    margin-top: 2vh;
    color: #f5141b;
  }
  .evaluate_btn{
    width: 70vw;
    margin-left: 20vw;
    margin-top: 4vh;
  }
  .evaluate_btn>button:nth-child(1){
    height: 4vh;
    width: 15vw;
    font-size: 15px;
    color: #232323;
    border-radius: 2vh;
    margin-left: 26vw;
    border: none;
    outline: none;
  }
  .evaluate_btn>button:nth-child(2){
    height: 4vh;
    width: 25vw;
    color: #232323;
    font-size: 15px;
    border-radius: 2vh;
    border: none;
    outline: none;
  }
</style>
