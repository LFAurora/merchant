<template>
  <section class="home_page">
    <div class="img_toggle">
      <ImgToggle/>
    </div>
    <div class="btn">
      <button class="sign_up" @click="goTo('/login')">sign up</button>
      <button class="sign_in" @click="goTo('/register')">sign in</button>
    </div>
  </section>
</template>

<script>
  import ImgToggle from '../../components/ImgToggle/ImgToggle.vue'
  export default {
    methods:{
      goTo(path){
        this.$router.push(path)
      }
    },
    components:{
      ImgToggle
    }
  }
</script>

<style >
  *{
    margin: 0;
    padding: 0;
  }
  .home_page{

  }
  .img_toggle{
    /*width: 100vw;*/
    height: 90vh;
    overflow: hidden;
  }
  .img_toggle img{
    height: 90vh;
    width: 100vw;
  }
  .btn{
    width: 100vw;
    height: 10vh;

  }
  .sign_up{
    width: 50vw;
    height: 10vh;
    color: white;
    border: none;
    float: left;
    font-size: 18px;
    font-family: "Comic Sans MS", cursive, sans-serif;
    display: inline-block;
    /*background: #b1d2e6;*/
    background: #F71735;

  }
  .sign_in{
    width: 50vw;
    height: 10vh;
    color: white;
    border: none;
    font-size: 18px;
    display: inline-block;
    /*background: white;*/
    background: #000;
    font-family: "Comic Sans MS", cursive, sans-serif;
  }
</style>
