<template>
  <section class="chat">
    <div class="chat_cell" v-for="(user,index) in userMsg" @click="goTo('/main/ChatRoom')">
      <img class="user_photo" :src="user.photo" alt="">
      <div class="user_msg">
        <div class="chat_user_name">{{user.name}}</div>
        <div class="chat_user_message">
          <span class="chat_user_message_main">{{user.message}}</span>
          <span class="chat_user_message_time">{{user.time}}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Chat',
    data(){
      return{
        userMsg:[
          {
            name:'你好',//客户用户名
            photo:require('../../../../static/images/git.jpg'),//客户头像
            message:'震惊啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',//最近一条消息
            time:'2018/11/12',//最近消息时间
          },
          {
            name:'你好',//客户用户名
            photo:require('../../../../static/images/git.jpg'),//客户头像
            message:'震惊啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',//最近一条消息
            time:'2018/11/12',//最近消息时间
          }
        ]
      }
    },
    methods:{
      goTo(path){
        this.$router.push(path)
      }
    }
  }
</script>

<style scoped>
  .chat{
    width: 100vw;
    height: 100vh;
    background-color: #eeeeee;
  }
  .chat_cell{
    width: 100vw;
    height: 20vw;
    box-sizing: border-box;
    padding: 4vw;
    background-color: white;
    border-top: 1px solid #eeeeee;
  }
  .user_photo{
    width: 11vw;
    height: 11vw;
    object-fit: cover;
    border-radius: 50%;
  }
  .user_msg{
    display: inline-block;
    width: 79.5vw;
    vertical-align: top;
    height: 11vw;
    box-sizing: border-box;
    padding-left: 4vw;
  }
  .chat_user_name{
    font-size: 15px;
  }
  .chat_user_message{
    font-size: 12px;
    color: #999999;
    line-height: 10vw;
  }
  .chat_user_message_main{
    overflow: hidden;
    white-space: nowrap;
    width: 57vw;
    display: inline-block;
    text-overflow: ellipsis;
  }
  .chat_user_message_time{
    float: right;
  }
</style>
