<template>
  <section class="forget_password">
    <van-nav-bar
      title="忘记密码"
      left-text="返回"
      left-arrow
      fixed
      @click-left="$router.back()"
    />
    <form action="" @submit.prevent="forget">
      <van-cell-group style="margin-top: 44px;">
        <van-field
          v-model="phone"
          label="手机号"
          placeholder="请输入手机号"
          error-message=""
        />
        <van-field
          v-model="code"
          center
          clearable
          label="短信验证码"
          placeholder="请输入短信验证码"
          error-message=""
        >
          <van-button slot="button" size="small" type="primary" :disabled="!rightPhone" @click.prevent="sendCode">{{computeTime>0 ? `${computeTime}s后可重新发送` : '获取验证码'}}</van-button>
        </van-field>
        <van-field
          v-model="pwd"
          type="password"
          label="密码"
          placeholder="请输入新的密码"
          error-message=""
        />
        <van-field
          v-model="rePwd"
          type="password"
          label="确认密码"
          placeholder="再次确认密码密码"
          error-message=""
        />
      </van-cell-group>
      <button class="sure">确认</button>
    </form>
  </section>
</template>

<script>
  import {reqForgetPwd,reqSendCode} from '../../../api/index.js'
  export default {
    data(){
      return{
        code:'',
        phone:'',
        pwd:'',
        rePwd:'',
        computeTime:'',
      }
    },
    methods:{
      async sendCode(){
        //如果当前没有计时
        if(!this.computeTime){
          //启动倒计时
          this.computeTime = 60
          const intervalId = setInterval(() => {
            this.computeTime--
            if(this.computeTime<=0){
              //停止计时
              clearInterval(intervalId)
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
      //异步修改密码
      async forget(){
        const {phone,code,pwd,repwd} = this
        if(!/^1\d{10}$/.test(this.phone)){
          //手机号格式不正确
          this.$swal({
            type: 'error',
            title: '输入有误，请重新输入',
            text: '手机号格式不正确!',
            showCancelButton:false
          })
          return
        }else if(!/^\d{6}$/.test(sms)){
          //提示验证码必须是六位数字
          this.$swal({
            type: 'error',
            title: '您的输入有误',
            text: '验证码必须是六位数字!',
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
        }else if(repwd.test(pwd)){
          //提示店铺名必须是合法汉字
          this.$swal({
            type: 'error',
            title: '您的输入有误',
            text: '密码不一致!',
            showCancelButton:false
          })
          return
        }
        //发送ajax请求修改密码
        const result = await reqForgetPwd({phone,code,pwd,repwd})
        if(result.code===0){
          // const successMsg = result.data
          this.$swal({
            type: 'success',
            title: '恭喜您',
            text: '密码修改成功',
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

<style>
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
  .forget_password{
    height: 100vh;
    background-color: #f1f1f1;
    overflow: hidden;
  }
  .sure{
    width: 90vw;
    height: 50px;
    margin-left: 5vw;
    margin-top: 50px;
    border: none;
    color: #fff;
    background-color: rgb(231, 20, 26);
  }
  .van-cell{
    line-height: 40px;
  }
</style>
