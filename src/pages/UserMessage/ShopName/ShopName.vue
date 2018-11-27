<template>
  <section class="shop_name">
    <van-nav-bar
      title="店铺名"
      left-text="返回"
      left-arrow
      right-text="完成"
      @click-left="$router.back()"
      @click-right="onClickRight"
    />
    <van-cell-group>
      <van-field v-model="name" />
    </van-cell-group>
    <div class="notice">
      <h4>好的店铺名称具备以下特点：</h4>
      <h4>1.简短易懂、朗朗上口、避免雷同、避免生僻字、尽量体现主营产品</h4>
      <h4>2.凸显店铺特色，体现店长风格</h4>
      <h4>3.不使用国家法律法规禁止的违规词、敏感词</h4>
      <h4>4.不出现“淘宝”、“微信”、“代理”等会被屏蔽的敏感词汇</h4>
    </div>
  </section>
</template>

<script>
  export default {
    data(){
      return{
        name:''
      }
    },
    methods:{
      onClickRight() {
        console.log("完成")
      }
    }
  }
</script>

<style>
  .van-n.av-bar__text{
    color: #fff;
  }
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
  .van-cell{
    line-height: 50px;
  }
  .shop_name{
    height: 100vh;
    background-color: #eeeeee;
  }
  h4{
    font-size: 13px;
    color: #787878;
    line-height: 18px;
  }
  .notice{
    margin-top: 10px;
    margin-left: 2vw;
    width: 96vw;
  }
</style>
