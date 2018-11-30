<template>
  <section class="batch_management">
    <van-nav-bar
      title="批量管理"
      left-text="返回"
      left-arrow
      fixed
      @click-left="$router.back()"
    />
    <div class="batch_main">
      <div class="batch_commodity" v-for="(sh,index) in shop" :key="index">
        <div class="choose">
          <van-checkbox class="check" v-model="sh.checked" checked-color="rgb(231, 20, 26)"></van-checkbox>
        </div>
        <div class="choose_commodity">
          <img :src=sh.img alt="">
          <div class="choose_commodity_msg">
            <span>{{sh.name}}</span>
            <span>￥ {{sh.price}}</span>
            <div class="total">
              <span>总销量 {{sh.total}}</span>
              <span>库存 {{sh.inventory}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="sold_out">
        <span>删除</span>
        <span>上架</span>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data(){
      return{
        shop:[{
          name:'哈哈哈',
          inventory:500,
          total:20,
          price:'50',
          checked:false,
          img:require('../../../../static/images/git.jpg')
        },
          {
            name:'哈哈哈',
            inventory:500,
            total:20,
            price:'50',
            checked:false,
            img:require('../../../../static/images/git.jpg')
          }],
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
  .batch_main{
    position: relative;
    top: 45px;
    height: 100vh;
    background-color: #eeeeee;
  }
  .batch_commodity{
    width: 100vw;
    margin-bottom: 10px;
    background-color: white;
    /*line-height: 15vh;*/
  }
  .choose{
    width: 10vw;
    height: 18vh;
    line-height: 18vh;
    display: inline-block;
    text-align: center;
  }
  .van-icon-success{
    background-color: #eeeeee;
  }
  .choose_commodity{
    width: 80vw;
    height: 18vh;
    display: inline-block;
    vertical-align: top;
  }
  .choose_commodity img{
    height: 13vh;
    width: 13vh;
    margin-top: 2.5vh;
  }
  .choose_commodity_msg{
    display: inline-block;
    height: 13vh;
    margin-left: 2vw;
    vertical-align: bottom;
  }
  .choose_commodity_msg>span{
    display: block;
  }
  .choose_commodity_msg>span:nth-child(2){
    margin-top: 3vh;
    font-size: 20px;
    color: #fe151e;
  }
  .total{
    margin-top: 3vh;
    font-size: 12px;
    color: #adadad;
  }
  .sold_out{
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 8vh;
    text-align: center;
    background-color: white;
    line-height: 8vh;
  }
  .sold_out>span{
    display: inline-block;
    width: 49vw;
    height: 8vh;
  }
  .sold_out>span:nth-child(1){
    border-right: 1px solid lightgrey;
  }
</style>
