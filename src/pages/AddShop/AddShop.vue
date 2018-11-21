<template>
  <section class="add_shop_container">
    <van-nav-bar
      title="商品"
      left-text="返回"
      left-arrow
      fixed
      @click-left="$router.back()"
    />
    <div style="height: 100vh;overflow: hidden" v-if="!show">
      <div class="add_before" >
        <h1 class="add_title">添加高品质好货</h1>
        <h6 class="add_direction">添加商品就是如此快捷简单</h6>
        <router-link to="/main/addmain"><button class="add_fast" >快速添加商品</button></router-link>
      </div>
    </div>
    <div class="add_after" v-else>
      <van-notice-bar mode="link">
        足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。
      </van-notice-bar>
      <van-tabs  sticky>
        <van-tab  :title="'出售中（5）'">
          <div class="sort">
            <span class="add_time">添加时间</span>
            <span>销量</span>
            <span>成交额</span>
            <span>库存</span>
          </div>
          <div class="aa">
            <div class="shop">
              <img src="./images/git.jpg" alt="">
              <div class="detial">
                <span>你好</span>
                <span>￥ 500.00</span>
                <div class="shop_msg">
                  <div class="mm">
                    <span>总销量 0</span>
                    <span>成交额 5000.00</span>
                  </div>
                  <div class="ss">
                    <span>库存 30</span>
                    <span>添加 2018-06-15</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="show_menu">
              <div class="generalize">
                <span class="iconfont icon-yinlianglabashengyin-xianxing"></span>
                <span>推广</span>
              </div>
              <div class="share">
                <span class="iconfont icon-share"></span>
                <span>分享</span>
              </div>
            </div>
          </div>
          <div class="aa">
            <div class="shop">
              <img src="./images/git.jpg" alt="">
              <div class="detial">
                <span>你好</span>
                <span>￥ 500.00</span>
                <div class="shop_msg">
                  <div class="mm">
                    <span>总销量 0</span>
                    <span>成交额 5000.00</span>
                  </div>
                  <div class="ss">
                    <span>库存 30</span>
                    <span>添加 2018-06-15</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="show_menu">
              <div class="generalize">
                <span class="iconfont icon-yinlianglabashengyin-xianxing"></span>
                <span>推广</span>
              </div>
              <div class="share">
                <span class="iconfont icon-share"></span>
                <span>分享</span>
              </div>
            </div>
          </div>
          <div class="aa">
            <div class="shop">
              <img src="./images/git.jpg" alt="">
              <div class="detial">
                <span>你好</span>
                <span>￥ 500.00</span>
                <div class="shop_msg">
                  <div class="mm">
                    <span>总销量 0</span>
                    <span>成交额 5000.00</span>
                  </div>
                  <div class="ss">
                    <span>库存 30</span>
                    <span>添加 2018-06-15</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="show_menu">
              <div class="generalize">
                <span class="iconfont icon-yinlianglabashengyin-xianxing"></span>
                <span>推广</span>
              </div>
              <div class="share">
                <span class="iconfont icon-share"></span>
                <span>分享</span>
              </div>
            </div>
          </div>
          <div class="aa">
            <div class="shop">
              <img src="./images/git.jpg" alt="">
              <div class="detial">
                <span>你好</span>
                <span>￥ 500.00</span>
                <div class="shop_msg">
                  <div class="mm">
                    <span>总销量 0</span>
                    <span>成交额 5000.00</span>
                  </div>
                  <div class="ss">
                    <span>库存 30</span>
                    <span>添加 2018-06-15</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="show_menu">
              <div class="generalize">
                <span class="iconfont icon-yinlianglabashengyin-xianxing"></span>
                <span>推广</span>
              </div>
              <div class="share">
                <span class="iconfont icon-share"></span>
                <span>分享</span>
              </div>
            </div>
          </div>
          <div class="aa">
            <div class="shop">
              <img src="./images/git.jpg" alt="">
              <div class="detial">
                <span>你好</span>
                <span>￥ 500.00</span>
                <div class="shop_msg">
                  <div class="mm">
                    <span>总销量 0</span>
                    <span>成交额 5000.00</span>
                  </div>
                  <div class="ss">
                    <span>库存 30</span>
                    <span>添加 2018-06-15</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="show_menu">
              <div class="generalize">
                <span class="iconfont icon-yinlianglabashengyin-xianxing"></span>
                <span>推广</span>
              </div>
              <div class="share">
                <span class="iconfont icon-share"></span>
                <span>分享</span>
              </div>
            </div>
          </div>
          <div class="aa" style="padding-bottom: 50px">
            <div class="shop">
              <img src="./images/git.jpg" alt="">
              <div class="detial">
                <span>你好</span>
                <span>￥ 500.00</span>
                <div class="shop_msg">
                  <div class="mm">
                    <span>总销量 0</span>
                    <span>成交额 5000.00</span>
                  </div>
                  <div class="ss">
                    <span>库存 30</span>
                    <span>添加 2018-06-15</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="show_menu">
              <div class="generalize">
                <span class="iconfont icon-yinlianglabashengyin-xianxing"></span>
                <span>推广</span>
              </div>
              <div class="share">
                <span class="iconfont icon-share"></span>
                <span>分享</span>
              </div>
            </div>
          </div>
          <van-tabbar v-model="active">
            <van-tabbar-item to="/main/addmain" class="sa iconfont icon-jia1">添加商品</van-tabbar-item>
            <van-tabbar-item to="/main/batch" class="sa iconfont icon-ziyuan">批量管理</van-tabbar-item>
          </van-tabbar>
        </van-tab>
        <van-tab :title="'已下架（1） '">
          <div class="sort">
            <span class="add_time">添加时间</span>
            <span>销量</span>
            <span>成交额</span>
            <span>库存</span>
          </div>
          <div class="aa">
            <div class="shop">
              <img src="./images/git.jpg" alt="">
              <div class="detial">
                <span>你好</span>
                <span>￥ 500.00</span>
                <div class="shop_msg">
                  <div class="mm">
                    <span>总销量 0</span>
                    <span>成交额 5000.00</span>
                  </div>
                  <div class="ss">
                    <span>库存 30</span>
                    <span>添加 2018-06-15</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="show_menu">
              <div class="generalize">
                <span class="iconfont icon-yinlianglabashengyin-xianxing"></span>
                <span>推广</span>
              </div>
              <div class="share">
                <span class="iconfont icon-share"></span>
                <span>分享</span>
              </div>
            </div>
          </div>
          <van-tabbar v-model="active">
            <van-tabbar-item to="/main/addmain" class="sa iconfont icon-jia1">添加商品</van-tabbar-item>
            <van-tabbar-item to="/main/batchO" class="sa iconfont icon-ziyuan">批量管理</van-tabbar-item>
          </van-tabbar>
        </van-tab>
      </van-tabs>
    </div>
  </section>
</template>

<script>
  import { Dialog } from 'vant';
  import Vue from 'vue'
  Vue.use(Dialog)
  export default {
    data(){
      return{
        show:true,
        active: 0,
      }
    },
    methods: {

      goTo(path){
        this.$router.replace(path)
      },
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
  .add_shop_container{
    /*height: 100vh;*/
    background: #efefef;
  }
  .add_before{
    text-align: center;
    width: 90vw;
    height: 58vh;
    position: relative;
    margin-left: 5vw;
    top: 15vh;
    margin-bottom: 40vh;
    border: 1px solid white;
    border-radius: 5px;
    background: white;
  }
  .add_title{
    font-size: 5vw;
    margin: 10vh auto;
  }
  .add_direction{
    font-size: 3vw;
    color: #d0d0d0;
    margin: 10vh auto;

  }
  .add_fast{
    width: 70vw;
    height: 8vh;
    background: white;
    border: 1px solid #FB4D3D;
    color: #FB4D3D;
    margin: 3vh auto;
  }
  .add_after{
    margin-top: 44px;
  }
  .shop{
    width: 100vw;
    height: 35vw;
    background-color: white;
    border-top: 1px solid #f1f1f1;
    border-bottom: 1px solid #f1f1f1;
  }
  .shop img{
    width: 25vw;
    height: 25vw;
    margin-top: 5vw;
    margin-left: 5vw;
  }
  .detial{
    width: 60vw;
    height: 25vw;
    display: inline-block;
    vertical-align: bottom;
    margin-left: 2vw;

  }
  .detial>span{
    display: block;
  }
  .detial>span:nth-child(2){
    font-size: 18px;
    color: #e7141a;
    margin-top: 4vw;
  }
  .shop_msg{
    /*line-height: 8vw;*/
    font-size: 12px;
    color: #adadad;
  }
  .mm{
    margin-top: 2vw;
    line-height: 7vw;
  }
  .mm>span:nth-child(1){
    display: inline-block;
    width: 12vw;
  }
  .ss>span:nth-child(1){
    display: inline-block;
    width: 12vw;
  }
  .icon{
    display: inline-block;
  }
  .sort{
    width: 100vw;
    height: 5vh;
    line-height: 5vh;
    background-color: white;
    /*text-align: center;*/
  }
  .sort>span{
    display: inline-block;
    width: 24vw;
    text-align: center;
  }
  .show_menu{
    width: 100vw;
    height: 8vh;
    background-color: white;
  }
  .show_menu>div{
    display: inline-block;
    width: 49vw;
    line-height: 4vh;
  }
  .show_menu>div>span{
    display: block;
    text-align: center;
    font-size: 12px;
  }
  .show_menu>div>span:nth-child(1){
    font-size: 20px;
  }
  .share{
    color: #e7141a;
  }
  .aa{
    margin-bottom: 10px;
  }
  .add_time{
    color: #e7141a;
  }
  .sa{
    color: #fe151e !important;
  }

</style>
