<template>
  <section class="add_shop_container">
    <van-nav-bar
      title="商品"
      left-text="返回"
      left-arrow
      @click-left="$router.back()"
    />
    <div class="add_before">
      <h1 class="add_title">添加高品质好货</h1>
      <h6 class="add_direction">添加商品就是如此快捷简单</h6>
      <button class="add_fast" @click="goTo('/addmain')">快速添加商品</button>
    </div>
  </section>
</template>

<script>
  export default {
    methods: {
      goTo(path){
        this.$router.replace(path)
      },

    }
  }
</script>

<style>
  .van-nav-bar{
    background-color: #FB4D3D;
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
    /*background-color: lightgray;*/
    height: 100vh;
    background: #efefef;
  }
  .add_before{
    text-align: center;
    width: 90vw;
    height: 58vh;
    margin-left: 5vw;
    margin-top: 15vh;
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
</style>
