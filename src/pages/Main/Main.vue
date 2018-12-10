<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import FooterGuide from '../../components/FooterGuide/FooterGuide.vue'
  export default {
    components:{
      FooterGuide
    }
  }
</script>

<style>

</style>
