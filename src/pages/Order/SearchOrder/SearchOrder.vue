<template>
  <section class="search_order">
    <van-nav-bar
      title="订单查询"
      left-text="返回"
      left-arrow
      fixed
      @click-left="$router.back()"
    />
    <div class="search_order_main">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
      >
        <div slot="action" @click="onSearch">搜索</div>
      </van-search>
      <div class="order_user" v-for="(search,index) in searchShop">
        <img src="../../../../static/images/git.jpg" alt="">
        <div class="order_user_msg">
          <span>收货人:{{search.consigneeName}}</span>
          <span>下单时间 : {{search.orderTime}}</span>
          <span>本单金额 : ￥{{search.orderAmount}}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'SearchOrder',
    data(){
      return{
        value:'',
        searchShop:[
          {
            consigneeName:'已发货',
            orderTime:'2018-11-16 21:57:39',
            orderAmount:'80',
          }
        ]
      }
    },
    methods:{
      onSearch(){
        console.log('搜索')
      }
    }
  }
</script>

<style scoped>
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
  .search_order{
    background-color: #eeeeee;
    height: 100vh;
  }
  .search_order_main{
    position: relative;
    top: 46px;
  }
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
