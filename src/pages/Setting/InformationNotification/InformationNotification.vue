<template>
  <section class="information_notification">
    <van-nav-bar
      title="通知设置"
      left-text="返回"
      left-arrow
      fixed
      @click-left="$router.back()"
    />
    <div class="notification_main">
      <h3 class="notification_title">开启后，方能收到买家消息和下列提醒</h3>
      <van-cell-group>
        <van-switch-cell v-model="checked9" title="膳品公告" />
      </van-cell-group>
      <van-cell-group>
        <van-switch-cell v-model="checked10" title="精选活动" />
      </van-cell-group>
      <van-cell-group>
        <van-switch-cell v-model="checked" title="新功能" />
      </van-cell-group>
      <van-cell-group>
        <van-switch-cell v-model="checked1" title="订单消息" />
      </van-cell-group>
      <van-cell-group>
        <van-switch-cell v-model="checked2" title="点赞消息" />
      </van-cell-group>
      <van-cell-group>
        <van-switch-cell v-model="checked3" title="商学院" />
      </van-cell-group>
      <van-cell-group>
        <van-switch-cell v-model="checked4" title="安全消息" />
      </van-cell-group>
      <van-cell-group>
        <van-switch-cell v-model="checked5" title="店长消息" />
      </van-cell-group>
      <van-cell-group>
        <van-switch-cell v-model="checked6" title="同盟会" />
      </van-cell-group>
      <van-cell-group>
        <van-switch-cell v-model="checked7" title="社区消息" />
      </van-cell-group>
      <van-cell-group>
        <van-switch-cell v-model="checked8" title="选货市场" />
      </van-cell-group>
      <h3 class="notification_title">关闭后将不再接收通知推送</h3>
    </div>
  </section>
</template>

<script>
  export default {
    data(){
      return{
        checked:'',
        checked1:'',
        checked2:'',
        checked3:'',
        checked4:'',
        checked5:'',
        checked6:'',
        checked7:'',
        checked8:'',
        checked9:'',
        checked10:'',
        checked11:'',
      }
    }
  }
</script>

<style>
  .information_notification{
    /*height: auto;*/
    /*overflow: hidden;*/
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
  .notification_main{
    /*margin-top: 44px;*/
    height: 101vh;
    position: absolute;
    top: 44px;
    background-color: #f1f1f1;
    overflow: hidden;
  }
  .notification_title{
    width: 100vw;
    height: 5vh;
    color: #9c9c9c;
    font-size: 13px;
    line-height: 5vh;
  }
  .van-cell{
    line-height: 45px;
  }
  .van-switch--on{
    background-color: limegreen;
  }
</style>
