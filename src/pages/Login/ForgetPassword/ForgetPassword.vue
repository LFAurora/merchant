<template>
  <section class="forget_password">
    <van-nav-bar
      title="忘记密码"
      left-text="返回"
      left-arrow
      fixed
      @click-left="$router.back()"
    />
    <van-cell-group style="margin-top: 44px;">
      <van-field
        v-model="phone"
        label="手机号"
        placeholder="请输入手机号"
        error-message="手机号格式错误"
      />
      <van-field
        v-model="sms"
        center
        clearable
        label="短信验证码"
        error-message="请输入正确的验证码"
        placeholder="请输入短信验证码"
      >
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入新的密码"
        error-message="密码格式必须是"
      />
      <van-field
        v-model="password"
        type="password"
        label="确认密码"
        placeholder="再次确认密码密码"
        error-message="请保持两次输入的密码一致"
      />
    </van-cell-group>
    <button class="sure">确认</button>
  </section>
</template>

<script>
  export default {
    data(){
      return{
        sms:'',
        phone:'',
        password:''
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
</style>
