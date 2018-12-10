<template>
  <section class="time_limit">
    <van-nav-bar
      title="添加限时折扣"
      left-text="返回"
      left-arrow
      fixed
      @click-left="$router.back()"
    />
    <div class="time_limit_main">
      <form action="">
        <van-cell-group class="asd">
          <van-field
            v-model="username"
            clearable
            label="活动名称"
            placeholder="请输入活动名称"
          />
        </van-cell-group>
        <van-cell-group class="asd">
          <van-field
            @click="ShowStartDate"
            v-model="normalStartDate"
            readonly
            label="开始时间"
            placeholder="请选择开始时间"
          />
          <van-field
            @click="ShowEndDate"
            v-model="normalEndDate"
            readonly
            label="结束时间"
            placeholder="请选择结束时间"
          />
        </van-cell-group>
        <van-cell-group>
          <van-field
            v-model="username"
            clearable
            label="每人限购"
            placeholder="无限购可不填"
          />
        </van-cell-group>
        <div class="discount_merchandise">
          <h3>打折商品<van-icon @click.prevent="question" name="question2" color="red" style="float: right;"/></h3>
          <div class="discount_merchandise_list">
            <div class="discount_merchandise_set_div">
              <div class="discount_merchandise_main">
                <img src="../../../../static/images/git.jpg" alt="">
                <div style="vertical-align: top;line-height: 7vw">
                  <div>中国菜刀</div>
                  <div>￥123</div>
                </div>
              </div>
              <div class="discount_merchandise_discount set">
                <van-cell-group>
                  <van-field
                    v-model="username"
                    clearable
                    label="折扣"
                    placeholder="0折"
                  />
                </van-cell-group>
              </div>
              <div class="discount_merchandise_discount_price set">
              <van-cell-group>
                <van-field
                  v-model="username"
                  clearable
                  label="折扣价"
                  placeholder="0.00元"
                />
              </van-cell-group>
            </div>
            </div
            ><div class="del_discount_merchandise iconfont icon-shanchu">
            </div>
          </div>
        </div>
      </form>
    </div>
    <van-popup v-model="showStart" position="bottom" :overlay="false">
      <van-datetime-picker
        v-model="currentStartDate"
        type="datetime"
        :formatter="formatter"
        :min-date="minDate"
        @cancel="onCancelStart" @confirm="onConfirmStart"
      />
    </van-popup>
    <van-popup v-model="showEnd" position="bottom" :overlay="false">
      <van-datetime-picker
        v-model="currentEndDate"
        type="datetime"
        :formatter="formatter"
        :min-date="minDate"
        @cancel="onCancelEnd" @confirm="onConfirmEnd"
      />
    </van-popup>
    <button class="time_limit_sure">确定</button>
  </section>
</template>

<script>
  import {formatDate} from '../../../../static/js/FormatDate.js'
  import { Dialog } from 'vant';
  export default {
    name: 'TimeLimit',
    data(){
      return{
        username:'',
        name:'',
        minDate: new Date(),
        currentStartDate: new Date(),
        currentEndDate: new Date(),
        showStart: false,
        showEnd:false,
        normalStartDate:'',
        normalEndDate:'',
      }
    },
    methods:{
      ShowStartDate () {
        this.showStart = true
        this.showEnd = false;
      },
      ShowEndDate () {
        this.showEnd = true
        this.showStart = false;
      },
      onConfirmStart (value) {
        this.showStart = false;
        this.normalStartDate = formatDate(this.currentStartDate, 'yyyy-MM-dd hh:mm:ss');
      },
      onCancelStart () {
        this.showStart = false
      },
      onConfirmEnd (value) {
        this.showEnd = false;
        this.normalEndDate = formatDate(this.currentEndDate, 'yyyy-MM-dd hh:mm:ss');
      },
      onCancelEnd () {
        this.showEnd = false
      },
      question(){
        Dialog.alert({
          title: '限时折扣注意事项',
          message: '1.限时折扣的商品，拍下后3小时未付款将自动关闭订单，订单中的商品库存会恢复。' +
            '2.每人限购数量是指在本次活动时间内，每个顾客可购买的此商品数量（包括所有型号的总和）。' +
            '3.所有的顾客可购买的数量是受商品库存限制 。'+
            '4.请您在设置完限时折扣后不要随意修改商品原价，修改商品价格可能会造成价格或者折扣展示异常'
        }).then(() => {
          // on close
        });
      },
      formatter (type, value) {
        if (type === 'year') {
          return `${value}年`
        } else if (type === 'month') {
          return `${value}月`
        } else if (type === 'day') {
          return `${value}日`
        }else if (type === 'hour') {
          return `${value}时`
        }else if (type === 'minute') {
          return `${value}分`
        }
        return value
      }
    }
  }
</script>

<style>
  .van-nav-bar{
    background: linear-gradient(to right, #c90000, #ff2b20);
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
  .time_limit_main{
    position: relative;
    top: 46px;
    background-color: #eeeeee;
    bottom: 50px;
    box-sizing: border-box;
    padding-top: 1px;
  }
  .asd{
    margin: 10px 0;
  }
  .discount_merchandise{
    box-sizing: border-box;
    width: 100vw;
    height: 220px;
    margin-top: 10px;
    background-color: #fff;
    box-sizing: border-box;
    padding: 5vw;
  }
  .discount_merchandise_list{
    box-sizing: border-box;
    width: 95vw;
    /*height: 165px;*/
    /*border: 1px solid #eeeeee;*/
    margin-top: 10px;
  }
  .discount_merchandise_main{
    box-sizing: border-box;
    width: 75vw;
    height: 75px;
    padding: 10px;
    border: 1px solid #eeeeee;
    display: inline-block;
    vertical-align: top;
  }
  .discount_merchandise_main img{
    width: 15vw;
    height: 15vw;
    object-fit: cover;
  }
  .discount_merchandise_main>div{
    display: inline-block;
  }
  .del_discount_merchandise{
    box-sizing: border-box;
    width: 15vw;
    /*height: 168px;*/
    border: 1px solid #eeeeee;
    font-size: 18px;
    text-align: center;
    line-height: 165px;
    color: red;
    display: inline-block;
    vertical-align: top;
  }
  .discount_merchandise_discount{
    border: 1px solid #eeeeee;
    box-sizing: border-box;
  }
  .discount_merchandise_discount_price{
    border: 1px solid #eeeeee;
    box-sizing: border-box;
  }
  .set{
    width: 75vw;
    display: inline-block;
  }
  .discount_merchandise_set_div{
    display: inline-block;
    width: 75vw;
  }
  .time_limit_sure{
    width: 100vw;
    height: 50px;
    border: none;
    position: fixed;
    bottom: 0;
    background-color: #f80000;
    color: #fff;
  }
</style>
