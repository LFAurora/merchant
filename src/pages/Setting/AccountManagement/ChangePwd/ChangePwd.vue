<template>
  <section class="change_pwd">
    <van-nav-bar
      title="修改密码"
      left-text="返回"
      left-arrow
      fixed
      @click-left="$router.back()"
    />
    <div class="change_main">
      <van-cell-group>
        <van-field
          v-model="phone"
          label="手机号"
          placeholder="请输入绑定的手机号"
          error-message="手机号格式错误"
        />
        <van-field
          v-model="sms"
          center
          clearable
          label="短信验证码"
          error-message="手机号格式错误"
          placeholder="请输入短信验证码"
        >
          <van-button slot="button" size="small" type="primary">发送验证码</van-button>
        </van-field>
        <van-field
          v-model="oldPwd"
          type="password"
          label="原密码"
          error-message="手机号格式错误"
          placeholder="请输入您的原密码"
        />
        <van-field
          v-model="newPwd"
          type="password"
          label="新密码"
          error-message="手机号格式错误"
          placeholder="请输入您的新密码"
        />
        <van-field
          v-model="reNewPwd"
          type="password"
          label="密码"
          error-message="手机号格式错误"
          placeholder="请确认您的新密码密码"
        />
      </van-cell-group>
    </div>
    <button class="sure" @click="change">确认修改</button>
  </section>
</template>

<script>
  export default {
    data(){
      return{
        phone:'',
        sms:'',
        oldPwd:'',
        newPwd:'',
        reNewPwd:''
      }
    },
    methods:{
      change(){
          this.$swal({
            title:'修改成功',
            type:'success',
            showCancelButton:false,
            allowOutsideClick:false,
            // showConfirmButton:false
          }).then((res) => {
            if (res.value) {
              // this.$router.replace('/main')
            }
          })
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
  .change_main{
    margin-top: 44px;
  }
  .sure{
    width: 90vw;
    height: 50px;
    border: none;
    color: #ffd;
    margin-top: 60px;
    margin-left: 5vw;
    background:rgb(231, 20, 26); ;
  }
  .change_pwd{
    height: 100vh;
    background: #f1f1f1;
  }
</style>
