<template>
  <section class="loginContainer">
    <div class="logo">
      <img width="40vw" src="./images/logo.jpg" alt="">
    </div>
    <div class="tab_toggle">
      <van-tabs swipeable>
        <van-tab :title="'登录'">
          <div class="login_content">
            <div class="login_msg">
              <form>
                <div class="login_inp">
                  <input type="text" placeholder="请输入您的账号">
                  <input type="password" autocomplete="new-password" placeholder="请输入您的密码">
                </div>
              </form>
              <div class="forget">
                <span class="forget_click" @click="To('/forget')">忘记密码</span>
              </div>
            </div>
            <div class="dd">
              <button class="sign_up" @click="success">登 录</button>
            </div>
          </div>
        </van-tab>
        <van-tab :title="'注册'">
          <div class="register_content">
            <div class="reg_msg">
              <form>
                <div class="reg_inp">
                  <input type="text" placeholder="请输入您的手机号">
                  <button disabled="disabled" class="get_verification">获取验证码</button>
                  <input type="text" placeholder="请输入验证码">
                  <input type="text" placeholder="请输入您的店铺名">
                  <input type="password" autocomplete="new-password" placeholder="请输入您的密码">
                  <input type="password" autocomplete="new-password" placeholder="请再次输入您的密码">`
                  <input type="date" @click="ShowDate" v-model="normalDate">
                  <van-popup v-model="show" position="bottom" :overlay="false">
                    <van-datetime-picker
                      v-model="currentDate"
                      type="date"
                      :formatter="formatter"
                      :min-date="minDate"
                      @cancel="onCancel" @confirm="onConfirm"
                    />
                  </van-popup>
                </div>
                <div class="forget">
                  <input type="checkbox" checked>
                  <span><a href="#">已阅读并同意《膳品管理服务协议》《膳品禁售管理规范协议》</a></span>
                </div>
              </form>
            </div>
            <div>
              <button class="sign_up">注 册</button>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </section>
</template>

<script>
  import {Tab, Tabs} from 'vant'
  import {formatDate} from '../../../static/js/FormatDate.js'

  export default {

    components: {
      Tab,
      Tabs
    },
    data () {
      return {
        minDate: new Date(),
        currentDate: new Date(),
        show: false,
        normalDate:''
      }
    },
    methods: {
      goTo (path) {
        this.$router.replace(path)
      },
      To (path) {
        this.$router.push(path)
      },
      success () {
        this.$swal({
          title: '登录成功',
          type: 'success',
          showCancelButton: false,
          allowOutsideClick: false,
          // showConfirmButton:false
        }).then((res) => {
          if (res.value) {
            this.$router.replace('/main')
          }
        })
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
      formatter (type, value) {
        if (type === 'year') {
          return `${value}年`
        } else if (type === 'month') {
          return `${value}月`
        } else if (type === 'day') {
          return `${value}日`
        }
        return value
      }
    }
  }
</script>

<style lang="less" scoped>

  .box {
    padding: 15px;
  }

  .dd {
    width: 100vw;
    height: 10vh;
  }

  .tab_toggle {
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
    height: 31vh;
    background: url("./images/122.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .sign_up {
    width: 100vw;
    height: 11vh;
    border: none;
    color: #fff;
    font-weight: 900;
    font-size: 6.5vw;
    outline: none;
    position: fixed;
    background: #b1d2e6;
    font-family: Helvetica;
    background: url("./images/121.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
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
    padding-top: 4vh;
    position: relative;
    width: 70vw;
    height: 7vh;
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

  .get_verification {
    position: absolute;
    top: 18%;
    right: 60px;
    transform: translateY(-10%);
    border: 0;
    color: #ccc;
    font-size: 10px;
    background: transparent;
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
    width: 33vw;
    margin-top: 8vh;
    margin-left: 33vw;
  }

  .forget {
    /*float: right;*/
    width: 70vw;
    position: absolute;
    right: 15vw;
    /*margin-right: 15vw;*/
    margin-top: 3vh;
    font-size: 12px;
    vertical-align: top;
  }

  .forget_click {
    float: right;
    color: #b1d2e6;
  }
</style>
