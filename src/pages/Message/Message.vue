<template>
  <section class="message_container">
    <header class="head">
      <span>消息</span>
      <span><i class="iconfont icon-shezhi"></i></span>
    </header>
    <div class="tab_toggle">
      <van-tabs v-model="active" swipeable>
        <van-tab :title="'聊天'">
          <Chat></Chat>
        </van-tab>
        <van-tab :title="'通知'">
          <Inform></Inform>
        </van-tab>
      </van-tabs>
    </div>
  </section>
</template>

<script>
  import Chat from './Chat/Chat.vue'
  import Inform from './Inform/Inform.vue'
  export default {
    components: {
      Chat,
      Inform
    },
    data() {
      return {
        list: [],
        loading: false,
        finished: false,
        isLoading: false,
        active:'',
      }
    },

    methods: {

    }
  }
</script>

<style>
  .head{
    width: 100vw;
    height: 7.5vh;
    position: fixed;
    background: #E7141A;
    line-height: 7.5vh;
    z-index: 1000;
  }
  .head span{
    color: white;
    font-size: 4vw;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  }
  .head span:nth-child(1){
    margin-left: 4.5vw;
  }
  .head span:nth-child(2){
    float: right;
    margin-right: 4.5vw;
  }
  .tab_toggle{
    position: relative;
    top: 7.5vh;
  }
</style>
