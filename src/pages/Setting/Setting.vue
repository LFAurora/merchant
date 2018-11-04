<template>
  <section>
    <van-nav-bar
      title="设置"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
  </section>
</template>

<script>
  export default {
    methods: {
      onClickLeft() {
        alert('ss')
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
</style>
