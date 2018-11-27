<template>
  <section class="register">
    <van-nav-bar
      title="登录"
      left-text="返回"
      left-arrow
      @click-left="$router.back()"
    />
    <div class="register_main">
      <form action="" @submit.prevent="register">
        <input type="text" v-model="phone" placeholder="请输入您的手机号">
        <input type="text" placeholder="请输入验证码" v-model="code">
        <van-button :disabled="!rightPhone" square :class="{right_phone: rightPhone}" @click.prevent="getCode">{{computeTime>0 ? `${computeTime}s后可重新发送` : '获取验证码'}}</van-button>
        <input type="text" placeholder="请输入您的店铺名" v-model="shopName">
        <input type="text" placeholder="请输入您的密码" v-model="pwd">
        <button class="register_btn">注册</button>
      </form>
    </div>
  </section>
</template>

<script>
  import {reqSendCode,reqRegister} from '../../api/index.js'
  export default {
    data(){
      return{
        phone:'',//手机号
        computeTime:0,//计时的时间
        code:'',//短信验证码
        shopName:'',//店铺名
        pwd:'',//密码
      }
    },
    methods:{
      //异步获取短信验证码
      async getCode(){
        //如果当前没有计时
        if(!this.computeTime){
          //启动倒计时
          this.computeTime = 60
          this.intervalId = setInterval(() => {
            this.computeTime--
            if(this.computeTime<=0){
              //停止计时
              clearInterval(this.intervalId)
            }
          },1000)
          //发送ajax请求(向指定手机号发送验证码短信)
          const result = await reqSendCode(this.phone)
          if(result.code===1){
            //显示提示
            this.$swal({
              type: 'error',
              title: '您的输入有误',
              text: result.msg,
              showCancelButton:false
            })
            //停止倒计时
            if(this.computeTime){
              this.computeTime = 0
              clearInterval(this.intervalId)
              this.intervalId = undefined
            }
          }
        }
      },
      //异步注册
      async register(){
        const {rightPhone,phone,code,shopName,pwd} = this
        if(!this.rightPhone){
          //手机号格式不正确
          this.$swal({
            type: 'error',
            title: '输入有误，请重新输入',
            text: '手机号格式不正确!',
            showCancelButton:false
          })
          return
        }else if(!/^\d{6}$/.test(code)){
          //提示验证码必须是六位数字
          this.$swal({
            type: 'error',
            title: '您的输入有误',
            text: '验证码必须是六位数字!',
            showCancelButton:false
          })
          return
        }else if(!/^[\u4e00-\u9fa5]+$/.test(shopName)){
          //提示店铺名必须是合法汉字
          this.$swal({
            type: 'error',
            title: '您的输入有误',
            text: '店铺名必须是合法汉字!',
            showCancelButton:false
          })
          return
        }else if(! /^[A-Za-z0-9]{6,20}$/.test(pwd)){
          //提示密码必须是6-20位字母数字组合
          this.$swal({
            type: 'error',
            title: '您的输入有误',
            text: '密码必须是6-20位字母数字组合!',
            showCancelButton:false
          })
          return
        }
        //发送ajax请求注册
        const result = await reqRegister({phone,code,shopName,pwd})
        if(result.code===0){
          // const user = result.data
          //将user保存到vuex的state
          //跳转路由
          this.$swal({
            type: 'success',
            title: '恭喜您',
            text: '注册成功',
            showCancelButton:false
          }).then(() =>{
            this.$router.replace('/login')
          })
        }else{
          const msg = result.msg
          this.$swal({
            type: 'error',
            title: '您的输入有误',
            text: result.msg,
            showCancelButton:false
          })
        }
      }
    },
    computed:{
      rightPhone(){
        return /^[1][3,4,5,7,8][0-9]{9}$/.test(this.phone)
      }
    }
  }
</script>

<style scoped>
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
  .register{
    background-image: url("../../../static/images/lbg.jpg");
    height: 100vh;
    background-size: auto 100%;
    background-repeat: no-repeat;
  }
  .van-button{
    position: absolute;
    /*width: 30vw;*/
    top: 100px;
    border-radius: 10px;
    font-size: 12px;
    border: none;
    left: 58vw;
    background-color: rgba(255,255,255,0);
  }
  .register_main{
    position: relative;
    top: 100px;
  }
  .register_main>form>input{
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
  .register_main>form>input::placeholder{
    color: #aaaaaa;
  }
  .register_btn{
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
  .right_phone{
    color: #000;
  }
</style>
