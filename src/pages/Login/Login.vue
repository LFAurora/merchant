<template>
  <section class="loginContainer">
    <div class="logo">
      <img width="40vw" src="./images/logo1.png" alt="">
    </div>
   <div class="tab_toggle">
     <van-tabs  swipeable>
       <van-tab  :title="'登录'">
         <div class="login_content">
           <div class="login_msg">
             <form>
               <div class="login_inp">
                 <input type="text" placeholder="请输入您的账号">
                 <input type="password" autocomplete="new-password" placeholder="请输入您的密码">
               </div>
               <div class="forget">
                 <span><a href="#">忘记密码</a></span>
               </div>
             </form>
           </div>
           <div class="dd">
             <button class="sign_up" @click="goTo('/main')">sign up</button>
           </div>
         </div>
       </van-tab>
       <van-tab  :title="'注册'">
         <div class="register_content">
           <div class="reg_msg">
             <form>
               <div class="reg_inp">
                 <input type="text" placeholder="请输入您的手机号">
                 <button disabled="disabled" class="get_verification">获取验证码</button>
                 <input type="text" placeholder="请输入验证码">
                 <input type="text" placeholder="请输入您的店铺名">
                 <input type="password" autocomplete="new-password" placeholder="请输入您的密码">
                 <input type="password" autocomplete="new-password" placeholder="请再次输入您的密码">
               </div>
               <div class="forget">
                 <input type="checkbox" checked>
                 <span><a href="#">已阅读并同意《膳品管理服务协议》《膳品禁售管理规范协议》</a></span>
               </div>
             </form>
           </div>
           <div>
             <button class="sign_up">sign in</button>
           </div>
         </div>
       </van-tab>
     </van-tabs>
   </div>
  </section>
</template>

<script>
  import { Tab, Tabs } from 'vant';
  export default {

    components: {
      Tab,
      Tabs
    },
    data () {
      return {

      }
    },

    methods:{
      goTo(path){
        this.$router.replace(path)
      }
    },
  }
</script>

<style lang="less" scoped>

  .box {
    padding: 15px;
  }
  .dd{
    width: 100vw;
    height: 10vh;
  }
  .tab_toggle{
    height: 75vh;
  }
  .loginContainer {
    width: 100vw;
    height: 100vh;
    background: #b1d2e6;
    /*background: white;*/
    overflow: hidden;
  }

  .logo {
    width: 100vw;
    height: 30vh;
  }

  .sign_up {
    width: 100vw;
    height: 10vh;
    border: none;
    color: black;
    font-size: 3vh;
    outline: none;
    position: fixed;
    background: #b1d2e6;
    font-family: "Comic Sans MS", cursive, sans-serif;
  }

  .login_msg {
    width: 100vw;
    height: 53vh;
    background: white;
  }

  .reg_msg {
    width: 100vw;
    height: 53vh;
    background: white;
  }

  .login_inp > input {
    box-sizing: border-box;
    padding-top: 4.5vh;
    position: relative;
    width: 70vw;
    height: 8vh;
    outline: none;
    color: #aaaaaa;
    font-size: 4vw;
    margin-left: 15vw;
    text-align: center;
    border-bottom: 1px solid lightslategray;
  }

  .reg_inp > input {
    box-sizing: border-box;
    padding-top: 5vh;
    position: relative;
    width: 70vw;
    height: 8vh;
    outline: none;
    color: #aaaaaa;
    font-size: 4vw;
    margin-left: 15vw;
    /*text-align: center;*/
    border-bottom: 1px solid lightslategray;
  }

  .reg_inp > input::placeholder {
    color: #aaaaaa;
    font-size: 12px;
    padding-left: 20px;
  }

  .get_verification{
    position :absolute;
    top: 21%;
    right: 60px;
    transform: translateY(-10%);
    border: 0;
    color: #ccc;
    font-size: 10px;
    background :transparent;
  }

  .reg_inp > input:nth-child(1) {
    margin-top: 1vh;
  }

  .login_inp > input::placeholder {
    color: #aaaaaa;
    font-size: 4vw;
  }

  .login_inp > input:nth-child(1) {
    margin-top: 12vh;
  }

  .login_inp > input:nth-child(2) {
    margin-top: 7vh;
  }

  .logo img {
    width: 34vw;
    margin-top: 5vh;
    margin-left: 33vw;
  }

  .forget {
    float: right;
    margin-right: 15vw;
    margin-top: 3vh;
    font-size: 12px;
    vertical-align: top;
  }

  .forget {
    width: 70vw;
  }
</style>
