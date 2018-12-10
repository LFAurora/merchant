<template xmlns="http://www.w3.org/1999/html">
  <section class="full_reduction">
    <van-nav-bar
      title="添加满减"
      left-text="返回"
      left-arrow
      fixed
      @click-left="$router.back()"
    />
    <div class="full_reduction_main">
      <form action="">
        <van-cell-group class="asd">
          <van-field
            v-model="activeName"
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
            @click.prevent="ShowEndDate"
            v-model="normalEndDate"
            readonly
            label="结束时间"
            placeholder="请选择结束时间"
          />
          <van-field
            @click.prevent="showScope"
            v-model="scope"
            readonly
            label="满减范围"
            icon="arrow"
            placeholder="单品满减"
          />
          <van-cell title="满减商品" value="共1件" class="full_reduction_shop">
            <img class="shopPhoto" src="../../../../static/images/git.jpg" alt="">
            <span class="full_reduction_shop_num">共1件</span>
          </van-cell>
        </van-cell-group>
        <div class="add_full_reduction">
          <h3 class="add_full_reduction_title">满减规则<van-icon @click.prevent="question" name="question2" color="red" style="float: right;"/></h3>
          <div class="add_full_reduction_input" v-for="(fr,index) in FullReduction">
            <div class="add_full_reduction_input_main">
              <van-cell-group>
                <van-field
                  v-model="fr.consume"
                  clearable
                  label="消费满"
                  placeholder="请填写金额"
                />
              </van-cell-group>
              <van-cell-group>
                <van-field
                  v-model="fr.subtract"
                  clearable
                  label="减"
                  placeholder="请填写金额"
                />
              </van-cell-group>
            </div
            ><div class="del_full_reduction iconfont icon-shanchu" @click.prevent="delLevel(index)">
            </div>
          </div>
          <button @click.prevent="addNextLevel" class="add_next_level" v-if="FullReduction.length<=4">添加下一级</button>
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
    <van-popup v-model="showScopeAll">
      <div class="popup_scope">
        <van-checkbox v-model="allChecked">全店满减</van-checkbox>
        <van-checkbox v-model="checked">单品满减</van-checkbox>
      </div>
    </van-popup>
    <button class="full_reduction_sure">确定</button>
  </section>
</template>

<script>
  import { Toast } from 'vant';
  import {Dialog} from 'vant'
  import Vue from 'vue'
  Vue.use(Toast)
  import {formatDate} from '../../../../static/js/FormatDate.js'
  export default {
    name: 'FullReduction',
    data(){
      return{
        checked: true,
        allChecked:false,
        activeName:'',
        minDate: new Date(),
        currentStartDate: new Date(),
        currentEndDate: new Date(),
        showStart: false,
        showEnd:false,
        normalStartDate:'',
        normalEndDate:'',
        showScopeAll:false,
        scope:'',
        FullReduction:[
          {
            consume:'',
            subtract:'',
          }
        ]
      }
    },
    methods:{
      showScope(){
        this.showScopeAll=true
      },
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
      addNextLevel(){
        this.FullReduction.push({
          consume:'',
          subtract:'',
        })
      },
      delLevel(index){
        if(this.FullReduction.length>1){
          this.FullReduction.splice(index,1)
        }else{
          Toast('至少要有一级规则')
        }

      },
      question(){
        Dialog.alert({
          title: '满减注意事项',
          message: '满减最多添加5级'
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

<style scoped>
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
  .full_reduction_main{
    position: relative;
    top: 46px;
    background-color: #eeeeee;
    bottom: 50px;
    box-sizing: border-box;
    padding-top: 1px;
    margin-bottom: 100px;
  }
  .asd{
    margin: 10px 0;
  }
  .popup_scope{
    width: 80vw;
    height: 15vh;
    line-height: 7.5vh;
    margin-left: 10vw;
    background-color: white;
  }
  .shopPhoto{
    width: 8vw;
    height: 8vw;
    object-fit: cover;
    vertical-align: middle;
  }
  .full_reduction_shop{
    line-height: 10vw;
  }
  .full_reduction_shop_num{
    font-size: 12px;
    color: #999999;
  }
  .add_full_reduction{
    margin: 10px 0;
    height: auto;
    width: 100vw;
    background-color: white;
  }
  .add_full_reduction_input{
    width: 90vw;
    margin-left: 5vw;
    position: relative;
    top: 5vw;
    box-sizing: border-box;
  }
  .add_full_reduction_input_main{
    width: 75vw;
    border: 1px solid #eeeeee;
    display: inline-block;
    box-sizing: border-box;
  }
  .del_full_reduction{
    box-sizing: border-box;
    border: 1px solid #eeeeee;
    width: 14vw;
    height: 90px;
    line-height: 90px;
    display: inline-block;
    vertical-align: top;
    text-align: center;
    color: #f80000;
    font-size: 18px;
  }
  .add_next_level{
    width: 40vw;
    height: 40px;
    border: 1px solid #eeeeee;
    margin-left: 30vw;
    border-radius: 10px;
    position: relative;
    top: 30px;
  }
  .full_reduction_sure{
    width: 100vw;
    height: 50px;
    border: none;
    position: fixed;
    bottom: 0;
    background-color: #f80000;
    color: #fff;
  }
  .van-checkbox__icon--checked .van-icon{
    border-color: #f80000;
    background-color: #f80000;
  }
  .add_full_reduction_title{
    box-sizing: border-box;
    padding: 5vw 5vw 0 5vw;
    font-size: 15px;
  }
</style>
