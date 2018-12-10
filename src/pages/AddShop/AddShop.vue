<template>
  <section class="add_shop_container">
    <van-nav-bar
      title="商品"
      left-text="返回"
      left-arrow
      fixed
      @click-left="$router.back()"
    />
    <div style="height: 100vh;overflow: hidden" v-if="shopMsg.length==0 && removeShop.length===0">
      <div class="add_before" >
        <h1 class="add_title">添加高品质好货</h1>
        <h6 class="add_direction">添加商品就是如此快捷简单</h6>
        <router-link to="/main/addmain"><button class="add_fast" >快速添加商品</button></router-link>
      </div>
    </div>
    <div class="add_after" v-else>
      <van-tabs  sticky>
        <van-tab  :title="'出售中（'+shopMsg.length+'）'">
          <div class="sort">
            <span class="add_time" @click="addTime">添加时间</span>
            <span>销量</span>
            <span>成交额</span>
            <span>库存</span>
          </div>
          <div class="aa"  v-for="(shop,index) in shopMsg" @touchstart="touchin()" @touchend="cleartime()">
            <div class="shopaa"  @click="goTo('/main/CompileShop')">
              <img :src="shop.img" alt="">
              <div class="detial">
                <span class="set_shop_name"><span :class="{redColor:shop.name1==='#店长推荐#'}">{{shop.name1}}</span>{{shop.name2}}</span>
                <span>￥ {{shop.price}}</span>
                <div class="shop_msg">
                  <div class="mm">
                    <span>总销量 {{shop.fsales}}</span>
                    <span>成交额 {{shop.fgrosssales}}</span>
                  </div>
                  <div class="ss">
                    <span>库存 {{shop.inventory}}</span>
                    <span>添加 {{shop.faddtime}}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="show_menu">
              <div class="generalize" @click="Generalize">
                <span class="iconfont icon-yinlianglabashengyin-xianxing"></span>
                <span>推广</span>
              </div>
              <div class="share">
                <span class="iconfont icon-share"></span>
                <span>分享</span>
              </div>
            </div>
            <van-popup v-model="showGeneralize" position="bottom">
              <div class="generalizela">
                <h4>推广</h4>
                <div class="generalize_btn">
                  <div @click="goTo('/main/timeLimit')">
                    <div class="discount_in_limited_time iconfont icon-icon2fuzhi">
                    </div>
                    <div class="btn_font">限时折扣</div>
                  </div>
                  <div @click="goTo('/main/FullReduction')">
                    <div class="full_reduction iconfont icon-manjianyouhui">
                    </div>
                    <div class="btn_font">满减</div>
                  </div>
                </div>
              </div>
              <button class="cancel" @click="cancel">取消</button>
            </van-popup>
          </div>
          <van-tabbar v-model="active">
            <van-tabbar-item to="/main/addmain" class="sa iconfont icon-jia1">添加商品</van-tabbar-item>
            <van-tabbar-item to="/main/batch" class="sa iconfont icon-ziyuan">批量管理</van-tabbar-item>
          </van-tabbar>

        </van-tab>
        <van-tab :title="'已下架（'+removeShop.length+'）'">
          <div class="sort">
            <span class="add_time">添加时间</span>
            <span>销量</span>
            <span>成交额</span>
            <span>库存</span>
          </div>
          <div class="aa" v-for="(rm,index) in removeShop">
            <div class="shopaa">
              <img :src="rm.img" alt="">
              <div class="detial">
                <span class="set_shop_name">{{rm.fname}}</span>
                <span>￥ {{rm.price}}</span>
                <div class="shop_msg">
                  <div class="mm">
                    <span>总销量{{rm.fsales}}</span>
                    <span>成交额 {{rm.fgrosssales}}</span>
                  </div>
                  <div class="ss">
                    <span>库存 {{rm.inventory}}</span>
                    <span>添加 {{rm.faddtime }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="show_menu">
              <div class="generalize">
                <span class="iconfont icon-yinlianglabashengyin-xianxing"></span>
                <span>推广</span>
              </div>
              <div class="share">
                <span class="iconfont icon-share"></span>
                <span>分享</span>
              </div>
            </div>
          </div>
          <van-tabbar v-model="active">
            <van-tabbar-item to="/main/addmain" class="sa iconfont icon-jia1">添加商品</van-tabbar-item>
            <van-tabbar-item to="/main/batchO" class="sa iconfont icon-ziyuan">批量管理</van-tabbar-item>
          </van-tabbar>
        </van-tab>
      </van-tabs>
    </div>
  </section>
</template>

<script>
  import Global from '../../api/index'
  import { Dialog } from 'vant';
  import Vue from 'vue'
  Vue.use(Dialog)
  export default {
    data(){
      return{
        shopMsg:[

        ],
        removeShop:[],
        show:true,
        active: 0,
        showaa:false,
        showGeneralize:false,
      }
    },
    mounted(){
      this.getData()
    },
    methods: {
      getData(){
        const url = Global.host+"/merchantMob/merchantProductMob/getAllProduct"
        this.$axios({
          method:'GET',
          url:url,
        }).then( (res)=>{
          if(res.data.code === 200){
            res.data.data.item.forEach(item => {
              item.price = item.merchantProductMarques[0].fprice;
              item.inventory = item.merchantProductMarques[0].frepository;
              item.img = Global.imgHost+item.fcover
              item.state = item.fstate
              item.name1 = item.fname.substring(0,6)
              item.name2 = item.fname.substring(6,item.fname.length)
            });
            for (let i in res.data.data.item) {
              if(res.data.data.item[i].fstate==='上架'){
                this.shopMsg.push(res.data.data.item[i])
              }else{
                this.removeShop.push(res.data.data.item[i])
              }
            }
            // this.shopMsg = res.data.data.item
          }else if(res.data.code === 408){

          }
        }).catch( (err) =>{
          console.log(err)
        })
      },
      goTo(path){
        this.$router.push(path)
      },
      addTime(){
        const shopArr = this.shopMsg
        function compare(property){
          return function (a,b) {
            var value1 = a[property]
            var Value2 = b[property]
            return value1 - Value2
          }
        }
        shopArr.sort(compare('price'))
      },
      touchin() {
        clearInterval(this.Loop); //再次清空定时器，防止重复注册定时器
        this.Loop = setTimeout(function() {
          this.showaa=true
        }.bind(this), 1000);
      },
      cleartime() {
        // 这个方法主要是用来将每次手指移出之后将计时器清零
        clearInterval(this.Loop);
      },
      delShop(){
        this.showaa=false
        this.$swal({
          text: '你确定要删除所选项吗?',
          confirmButtonText: '狠心删除',
          cancelButtonText: '不，容我再想想'
        }).then((res) => {
           if (res.value) {
             this.$swal({
               title:'删除成功',
               type:'success',
               cancelButton:false
             })
           }
        })
      },
      Generalize(){
        // if(this.generalize===false){
          this.showGeneralize=true
        // }
      },
      cancel(){
        this.showGeneralize=false
      }
    }
  }
</script>

<style scoped>
  .set_shop_name{
    overflow: hidden;
    white-space: nowrap;
    text-overflow:ellipsis;
  }
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
  .add_shop_container{
    /*height: 100vh;*/
    background: #efefef;
  }
  .add_before{
    text-align: center;
    width: 90vw;
    height: 58vh;
    position: relative;
    margin-left: 5vw;
    top: 15vh;
    margin-bottom: 40vh;
    border: 1px solid white;
    border-radius: 5px;
    background: white;
  }
  .add_title{
    font-size: 5vw;
    margin: 10vh auto;
  }
  .add_direction{
    font-size: 3vw;
    color: #d0d0d0;
    margin: 10vh auto;

  }
  .add_fast{
    width: 70vw;
    height: 8vh;
    background: white;
    border: 1px solid #FB4D3D;
    color: #FB4D3D;
    margin: 3vh auto;
  }
  .add_after {
    position: absolute;
    top: 44px;
    margin-bottom: 65px;
    background-color: #eeeeee;
  }

  .shopaa{
    width: 100vw;
    height: 35vw;
    background-color: white;
    border-top: 1px solid #f1f1f1;
    border-bottom: 1px solid #f1f1f1;
  }
  .shopaa img{
    width: 25vw;
    height: 25vw;
    margin-top: 5vw;
    margin-left: 5vw;
  }
  .detial{
    width: 60vw;
    height: 25vw;
    display: inline-block;
    vertical-align: bottom;
    margin-left: 2vw;

  }
  .detial>span{
    display: block;
  }
  .detial>span:nth-child(2){
    font-size: 18px;
    color: #e7141a;
    margin-top: 4vw;
  }
  .shop_msg{
    /*line-height: 8vw;*/
    font-size: 12px;
    color: #adadad;
  }
  .mm{
    margin-top: 2vw;
    line-height: 5vw;
    /*width: 60vw;*/
  }
  .mm>span:nth-child(1){
    display: inline-block;
    width: 15vw;
  }
  .ss>span:nth-child(1){
    display: inline-block;
    width: 15vw;
  }
  .icon{
    display: inline-block;
  }
  .sort{
    width: 100vw;
    height: 6vh;
    line-height: 6vh;
    background-color: white;
    /*text-align: center;*/
  }
  .sort>span{
    display: inline-block;
    width: 24vw;
    text-align: center;
  }
  .show_menu{
    width: 100vw;
    box-sizing: border-box;
    padding-top: 2vw;
    height: 10vh;
    background-color: white;
  }
  .show_menu>div{
    display: inline-block;
    width: 49vw;
    line-height: 4vh;
  }
  .show_menu>div>span{
    display: block;
    text-align: center;
    font-size: 12px;
  }
  .show_menu>div>span:nth-child(1){
    font-size: 20px;
  }
  .share{
    color: #e7141a;
  }
  .aa{
    margin-bottom: 10px;
  }
  .add_time{
    color: #e7141a;
  }
  .sa{
    color: #fe151e !important;
  }
  .del{
    width: 80vw;
    height: 6vh;
    border-right: none;
    border-bottom: none;
    border-left: none;
    background-color: white;
    border-top: 1px solid lightgrey;
  }
  .generalizela{
    height: 23vh;
    width: 100vw;
    box-sizing: border-box;
    padding: 5vw;
  }
  .generalizela>h4{
    text-align: center;
    font-size: 12px;
    color: #999999;
  }
  .discount_in_limited_time{
    width: 15vw;
    height: 15vw;
    border-radius: 50%;
    border: 1px solid #999999;
    margin-top: 4vh;
    text-align: center;
    line-height: 15vw;
    font-size: 10vw;
  }
  .generalize_btn{
    width: 90vw;
    display: flex;
    justify-content: space-around;
  }
  .full_reduction{
    width: 15vw;
    height: 15vw;
    border-radius: 50%;
    border: 1px solid #999999;
    margin-top: 4vh;
    text-align: center;
    line-height: 15vw;
    font-size: 10vw;
  }
  .cancel{
    width: 100vw;
    height: 8vh;
    border-top: 1px solid #eeeeee;
    border-right: none;
    border-left: none;
    border-bottom: none;
    background-color: #eeeeee;
  }
  .btn_font{
    text-align: center;
    margin-top: 2vw;
    font-size: 12px;
    color: #999999;
  }
  .redColor{
    color: #f80000;
  }
</style>
