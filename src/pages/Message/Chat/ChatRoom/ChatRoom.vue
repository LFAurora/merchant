<template>
  <section class="chat_room">
    <van-nav-bar
      :title=userName
      left-text="返回"
      left-arrow
      fixed
      @click-left="$router.back()"
    />

    <div class="chat_room_input">
      <span class="iconfont icon-jianpan"></span>
      <input class="chat_room_input_text" type="text" placeholder="请输入你的消息">
      <span class="iconfont icon-biaoqing"></span>
      <span class="iconfont icon-yuanquanjiahao"></span>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'ChatRoom',
    data(){
      return{
        userName:'膳客1'
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
  .chat_room_input{
    width: 100vw;
    height: 50px;
    border-top: 1px solid #eeeeee;
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    padding-top: 3vw;
  }
  .chat_room_input>span{
    display: inline-block;
    width: 7vw;
    height: 7vw;
    vertical-align: top;
    text-align: center;
    line-height: 7vw;
    font-size: 28px;
    color: #333333;
    margin-left: 2vw;
  }
  .chat_room_input_text{
    width: 62vw;
    margin-left: 2vw;
    border: 1px solid #999999;
    height: 6.5vw;
    vertical-align: top;
  }
  .chat_room_input_text::placeholder{

  }
</style>
