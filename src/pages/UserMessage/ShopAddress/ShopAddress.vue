<template>
  <section class="shop_address">
    <van-nav-bar
      title="店铺地址"
      left-text="返回"
      left-arrow
      right-text="完成"
      @click-left="$router.back()"
      @click-right="onClickRight"
    />
    <van-cell-group>
      <van-field
        v-model="address"
        label="地区"
        readonly
        placeholder="选择省/市/区"
        @click.prevent="choose"
      />
      <van-field
        v-model="addressDetail"
        label="详细地址"
        placeholder="街道门牌号等详细信息"
      />
    </van-cell-group>
    <div class="notice">
      <h4>填写店铺名请注意：</h4>
      <h4>1.店铺地址影响到用户找寻</h4>
      <h4>2.地址应真实</h4>
    </div>
    <van-popup v-model="showPop" position="bottom" :overlay="false" lazy-render>
      <van-area :area-list="areaList"  value="110101" @cancel="cancel" @confirm="confirm"/>
    </van-popup>
  </section>
</template>

<script>
  import areaList from 'vant/packages/area/demo/area.js'
  export default {
    data(){
      return{
        areaList,
        address:'',
        addressDetail:'',
        showPop: false,
      }
    },
    methods:{
      onClickRight() {
        console.log("完成")
      },
      choose(){
        this.showPop=true
      },
      confirm(value) {
        if(value[0].name===value[1].name){
          this.address = value[0].name+value[2].name
          this.showPop=false
          return
        }
        this.address = value[0].name+value[1].name+value[2].name
        // console.log(value[0].name)
        this.showPop=false
      },
      cancel() {
        this.showPop=false
      },
    }
  }
</script>

<style>
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
  .shop_address{
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
