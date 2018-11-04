<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="./images/cc.jpg" alt=""></div>
      <div class="swiper-slide"><img src="./images/aa.jpg" alt=""></div>
      <div class="swiper-slide"><img src="./images/bb.jpg" alt=""></div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    mounted(){
      //创建一个Swiper实例对象，来实现轮播
      new Swiper('.swiper-container',{
        loop:true,//可以循环轮播
        autoplay:true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      })
    }
  }
</script>

<style>

</style>
