<template>
  <section class="evaluate">
    <van-nav-bar
      title="评价"
      left-text="返回"
      left-arrow
      fixed
      @click-left="$router.back()"
    />
    <div class="show_evaluate">
      <div class="show_evaluate_btn">
        <button :class="{btn_active:'/evaluate/AllEvaluate'===$route.path}" @click="goTo('/evaluate/AllEvaluate')">全部</button>
        <button :class="{btn_active:'/evaluate/GoodReputation'===$route.path}" @click="goTo('/evaluate/GoodReputation')">好评</button>
        <button :class="{btn_active:'/evaluate/MediumReview'===$route.path}" @click="goTo('/evaluate/MediumReview')">中评</button>
        <button :class="{btn_active:'/evaluate/NegativeComment'===$route.path}" @click="goTo('/evaluate/NegativeComment')">差评</button>
      </div>
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    methods:{
      goTo(path){
        this.$router.replace(path)
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
  .show_evaluate{
    position: relative;
    top: 46px;
  }
  .show_evaluate_btn{
    height: 10vh;
    width: 100vw;
    background-color: white;
  }
  .show_evaluate_btn>button{
    width: 15vw;
    height: 5vh;
    border-radius: 2.5vh;
    border: none;
    outline: none;
    margin-left: 2vw;
    margin-top: 2.5vh;
    background-color: #eeeeee;
  }
  .show_evaluate_btn>button:nth-child(1){
    margin-left: 5vw;
  }
  .evaluate{
    height: 100vh;
    background-color: #eeeeee;
  }
  .btn_active{
    background-color: rgba(245,20,27,0.94) !important;
    color: #fff;
  }
</style>
