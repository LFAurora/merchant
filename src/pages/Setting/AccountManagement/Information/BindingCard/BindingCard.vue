<template>
  <section class="binding_card">
    <van-nav-bar
      title="绑定银行卡"
      left-text="返回"
      left-arrow
      fixed
      @click-left="$router.back()"
    />
    <van-cell-group style="margin-top: 44px">
      <van-field
        v-model="message"
        label="真实姓名"
        readonly
        type="text"
        placeholder="张三"
        autosize
      />
      <van-field
        v-model="message"
        label="银行卡号"
        type="text"
        placeholder="银行卡号"
        autosize
      />
      <van-field
        v-model="message"
        label="开户银行"
        type="text"
        placeholder="请选择开户银行"
        autosize
      />
    </van-cell-group>
    <button class="binding_success">完成</button>
    <div class="card">
      <span @click="tell">支持的银行卡列表</span>
    </div>
    <div class="tips">
      <p>注意：</p>
      <p><span class="iconfont icon-dian"></span>仅可使用储蓄卡，请不要填写信用卡</p>
      <p><span class="iconfont icon-dian"></span>绑定62开头，有银联标示的储蓄卡，体现更及时</p>
      <p><span class="iconfont icon-dian"></span>绑定储蓄卡的持卡人需与实名认证所用姓名一致</p>
    </div>
  </section>
</template>

<script>
  import { Dialog } from 'vant';
  import Vue from 'vue'
  Vue.use(Dialog);
  export default {
    data(){
      return{
        message:''
      }
    },
    methods:{
      tell(){

        Dialog.alert({
          message: '中国工商银行、中国农业银行、中国邮政储蓄银行、中国建设银行、中国交通银行、华夏银行、' +
            '招商银行、中信银行、上海普通发展银行、中国民生银行、平安银行、中国银行、' +
            '中国光大银行、兴业银行、浙商银行、东亚银行、上海银行、广东发展银行',
        }).then(() => {
          // on close
          // this.$router.replace('/main/binding');
        });
      }
    }
  }
</script>

<style>
  .binding_card{
    height: 100vh;
    overflow: hidden;
    background-color: #f1f1f1;
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
  .binding_success{
    width: 90vw;
    height: 45px;
    border: none;
    color: #fff;
    margin-left: 5vw;
    margin-top: 60px;
    background-color: rgb(231, 20, 26);
  }
  .card{
    margin-top: 10px;
    width: 100vw;
  }
  .card>span{
    color: rgba(0, 0, 255, 0.69);
    font-size: 13px;
    position: absolute;
    right: 5vw;
  }
  .tips{
    margin-top: 70px;
  }
  .tips>p{
    font-size: 13px;
    color: #777777;
    margin-left: 5vw;
  }
</style>
