<template>
  <section class="manager_birthday">
    <van-nav-bar
      title="店长生日"
      left-text="返回"
      left-arrow
      right-text="完成"
      @click-left="$router.back()"
      @click-right="onClickRight"
    />
    <van-cell-group>
      <van-field @click="ShowDate" v-model="normalDate" readonly />
    </van-cell-group>
    <div class="notice">
      <h4>选择店长生日的时候应注意：</h4>
      <h4>需选择真是的生日信息</h4>
    </div>
    <van-popup v-model="show" position="bottom" :overlay="false">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :formatter="formatter"
        :min-date="minDate"
        @cancel="onCancel" @confirm="onConfirm"
      />
    </van-popup>
  </section>
</template>

<script>
  import {formatDate} from '../../../../static/js/FormatDate.js'
  export default {
    data(){
      return{
        name:'',
        minDate: new Date(1990,1,1),
        currentDate: new Date(),
        show: false,
        normalDate:''
      }
    },
    methods:{
      onClickRight() {
        console.log("完成")
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

<style >
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
  .van-cell{
    line-height: 50px;
  }
  .manager_birthday{
    height: 100vh;
    background-color: #eeeeee;
  }
  h4{
    font-size: 13px;
    color: #787878;
    line-height: 18px;
  }
  .notice{
    margin-top: 10px;
    margin-left: 2vw;
    width: 96vw;
  }
</style>
