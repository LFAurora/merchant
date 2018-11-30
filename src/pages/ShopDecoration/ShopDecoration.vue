<template>
  <section class="shop_decoration">
    <van-nav-bar
      title="店铺装修"
      left-text="返回"
      left-arrow
      fixed
      @click-left="$router.back()"
    />
  </section>
</template>

<script>
  export default {
    name: 'ShopDecoration'
  }
</script>

<style>
  .shop_decoration{

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
</style>
