<template>
  <section class="customer">
    <van-nav-bar
      title="客户访问详情 "
      left-text="返回"
      left-arrow
      fixed
      @click-left="$router.back()"
    />
    <transition name="slide-fade">
    <div class="fans_all" v-if="show">
      <div class="fan_all_show">
        <div class="fanll" v-for="(fan,index) in fans">
          <img :src="fan.img" alt="">
          <div class="fan_name">{{fan.fansName}}</div>
        </div>
      </div>
    </div>
    </transition>
    <div class="customer_main">
      <div class="customer_details">
        <div class="detail">
          <div>
            <div class="iconfont icon-kehu">客户总数</div>
            <div class="customer_all">{{customer.length}}</div>
          </div>
          <div @click="showFans">
            <div><i class="iconfont icon-wode"></i>店铺粉丝</div>
            <div class="customer_all">{{fans.length}}</div>
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
        show:false,
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
        fans:[
          {
            img:require('../../../static/images/git.jpg'),
            fansName:'我是粉丝asdfasdfasd'
          },
          {
            img:require('../../../static/images/git.jpg'),
            fansName:'我是粉丝asdfasdfasd'
          },
          {
            img:require('../../../static/images/git.jpg'),
            fansName:'我是粉丝asdfasdfasd'
          },
          {
            img:require('../../../static/images/git.jpg'),
            fansName:'我是粉丝asdfasdfasd'
          },
          {
            img:require('../../../static/images/git.jpg'),
            fansName:'我是粉丝asdfasdfasd'
          },
          {
            img:require('../../../static/images/git.jpg'),
            fansName:'我是粉丝asdfasdfasd'
          }
        ]
      }
    },
    mounted () {
    },
    methods:{
      showFans(){
        if(this.show===true){
          this.show=false
        } else{
          this.show=true
        }
      }
    }
  }
</script>

<style scoped>
  .slide-fade-enter-active {
    transition: all .3s ease-in;
  }
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
  .fans_all{
    width: auto;
    overflow-x: scroll;
    overflow-y: hidden;
    /*display: none;*/
    height: 20vh;
    box-sizing: border-box;
    background-color: black;
    padding: 6vw 0;
    position: relative;
    top: 46px;
    white-space: nowrap;
  }
  .fans_all::-webkit-scrollbar{
    display: none;
  }
  .fans_all img{
    width: 15vw;
    height: 15vw;
    border-radius: 50%;
    object-fit: cover;
  }
  .fan_name{
    margin-top: 15px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    width: 15vw;
    overflow: hidden;
    white-space: nowrap;
    text-overflow:ellipsis;
  }
  .fanll{
    display: inline-block;
    margin-left: 5vw;
  }
  .fan_all_show{
    overflow-x: scroll;
    box-sizing: border-box;
    padding-right: 5vw;
  }
  .fan_all_show::-webkit-scrollbar{
    display: none;
  }
</style>
