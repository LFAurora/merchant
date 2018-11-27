<template>
  <section class="login">
    <van-nav-bar
      title="登录"
      left-text="返回"
      left-arrow
      @click-left="$router.back()"
    />
    <div class="login_main">
      <form @submit.prevent="login" action="">
        <input type="text" v-model="phone" placeholder="请输入你的手机号">
        <input type="text" placeholder="6-20位字母数字组合密码">
        <h3 @click="To('/forget')">忘记密码</h3>
        <button class="login_btn">登录</button>
      </form>
    </div>
  </section>
</template>

<script>
  // import {formatDate} from '../../../static/js/FormatDate.js'
  import {reqLogin} from '../../api/index.js'
  // import axios from 'axios'
  export default {
    data () {
      return {
        minDate: new Date(),
        currentDate: new Date(),
        show: false,
        normalDate:'',
        phone:'',//手机号
        pwd:'',//密码
      }
    },
    methods: {
      goTo (path) {
        this.$router.replace(path)
      },
      To (path) {
        this.$router.push(path)
      },
      async login(){
        const {phone,pwd} = this
        if(!/^1\d{10}$/.test(this.phone)){
          //手机号格式不正确
          this.$swal({
            type: 'error',
            title: '输入有误，请重新输入',
            text: '手机号格式不正确!',
            showCancelButton:false
          })
          return
        }else if(!/^[A-Za-z0-9]{6,20}$/.test(pwd)){
          //提示密码必须是6-20位字母数字组合
          this.$swal({
            type: 'error',
            title: '您的输入有误',
            text: '密码必须是6-20位字母数字组合!',
            showCancelButton:false
          })
          return
        }
        //发送ajax请求登录
        const result = await reqLogin(phone,pwd)
        if(result.code===0){
          // const user = result.data
          //将user保存到vuex的state
          //跳转路由
          this.$swal({
            type: 'success',
            title: '恭喜您',
            text: '登陆成功',
            showCancelButton:false
          }).then(() => {
            this.$router.replace('/main')
          })
          // axios.post(url, {
          //   name: "123"
          // }).then(() => {
          //
          // }).catch(() => {
          //
          // })

        }else{
          const msg = result.msg
          this.$swal({
            type: 'error',
            title: '您的输入有误',
            text: result.msg,
            showCancelButton:false
          })
        }
      },
      ShowDate () {
        this.show = true
      },
      onConfirm (value) {
        this.show = false;
          this.normalDate = formatDate(this.currentDate, 'yyyy-MM-dd');
      },
      onCancel () {
        this.show = false
      },
      // formatter (type, value) {
      //   if (type === 'year') {
      //     return `${value}年`
      //   } else if (type === 'month') {
      //     return `${value}月`
      //   } else if (type === 'day') {
      //     return `${value}日`
      //   }
      //   return value
      // }
    },
    computed:{
      // rightPhone(){
      //   return /^1\d{10}$/.test(this.phone)
      // }
    }
  }
</script>
<style>
  .van-nav-bar__text{
    color: #fff !important;
  }
  .van-nav-bar{
    background-color: rgb(231, 20, 26);
  }
  .van-nav-bar .van-icon{
    color: #fff;
  }
  .van-nav-bar__title{
    color: #fff;
  }
  .login{
    background-image: url("../../../static/images/lbg.jpg");
    height: 100vh;
    background-size: auto 100%;
    background-repeat: no-repeat;
  }
  .login_main{
    position: relative;
    top: 100px;
  }
  .login_main>form>input{
    width: 70vw;
    height: 50px;
    margin-left: 15vw;
    margin-top: 20px;
    line-height: 10px;
    border-bottom: 1px solid #aaaaaa;
    padding-left: 8vw;
    box-sizing: border-box;
    padding-top: 15px;
    border-radius: 20px;
    background-color: rgba(255,255,255,0);
  }
  .login_main>form>input::placeholder{
    color: #aaaaaa;
  }
  .login_btn{
    width: 70vw;
    height: 50px;
    border: none;
    background: radial-gradient(#f5141b, #fe151e,#ff1717);
    color: white;
    border-radius: 5px;
    margin-left: 15vw;
    margin-top: 60px;
    outline: none;
  }
  h3{
    margin-top: 10px;
    width: 85vw;
    text-align: right;color: #787878;
  }
</style>

