<template>
  <section class="add_main">
    <van-nav-bar
      title="添加商品"
      left-text="返回"
      right-text="完成"
      fixed
      left-arrow
      @click-left="$router.back()"
      @click-right="onClickRight"
    />
    <van-list>
      <van-notice-bar :scrollable="false" mode="link">
        禁止无资质上架食材等物品
      </van-notice-bar>
      <form>
        <van-uploader :after-read="onRead" accept="image/gif, image/jpeg" multiple>
          <img v-for="" class="head-img iconfont icon-zhaoxiangji" src="" ref="goodsImg"/>
        </van-uploader>
        <van-cell-group>
          <van-field
            label="留言"
            type="textarea"
            placeholder="请填写商品标题"
            rows="3"
            autosize
          />
        </van-cell-group>
        <div style="margin-top: 20px" @click="goTo('/category')">
          <van-cell-group >
            <van-field
              label="类目"
              icon="arrow"
              disabled
            />
          </van-cell-group>
        </div>
        <div id="asd" >
          <div class="add_shop_model" v-for="(item,index) in test" :key="index">
            <div class="model" v-if="showModel">
              <label for="">型号</label>
              <input type="text" v-model="item.model">
            </div>
            <div class="price">
              <label for="">价格</label>
              <input type="text" v-model="item.price">
              <button :index="index" class="iconfont icon-jian del_model_btn" v-if="showModel" @click="deleteModel($event)"></button>
            </div>
            <div class="inventory">
              <label for="">库存</label>
              <input type="text" v-model="item.inventory">
            </div>
          </div>
        </div>
        <div class="model_btn">
          <button @click="addModel" class="iconfont icon-jia1 add_model">添加商品型号</button>
        </div>
        <div>
          <van-cell-group>
            <van-field
              label="商品详情"
              icon="arrow"
              disabled
            />
          </van-cell-group>
        </div>
      </form>
    </van-list>

  </section>
</template>

<script>
  export default {
    data(){
      return{
        test:[{}],
        showModel:false,
        imgArr: []
      }
    },
    methods: {
      goTo(path){
        console.log(123)
        this.$router.replace(path)
      },
      onClickRight(){
        alert('完成')
      },
      onRead(file) {
        console.log(file)
        this.$refs.goodsImg.src = file.content;
      },
      addModel() {
        if(this.showModel==false){
          this.showModel = !this.showModel
        }else{
          this.test.push({})
        }
      },
      deleteModel(e){
        var index = e.target.getAttribute("index");
        if(index==0){
          this.showModel = !this.showModel
        }else{
          this.test.splice(index,1);
        }
      },
    }
  }
</script>

<style >
  .van-nav-bar{
    background-color: #FB4D3D;
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
  .head-img{
    width: 100vw;
    height: 240px;
  }
  .add_main{
    background: #efefef;
  }
  .add_shop_model{
    margin-top: 20px;
    width: 100vw;
    /*height: 150px;*/
    background: white;
  }
  .add_shop_model>div{
    margin-left: 3vw;
  }
  .model{
    padding-top: 10px;
  }
  .price{
    padding-top: 10px;
  }
  .inventory{
    margin-top: 10px;
    padding-bottom: 20px;
  }
  .add_shop_model input{
    border: 1px solid lightgray;
    width: 70vw;
    height: 30px;
  }
  form{
    /*height: auto;*/
  }
  .del_model_btn{
    border: none;
    background: white;
    color: #FB4D3D;
    font-size: 4.8vw;
  }
  .add_model{
    border: none;
    background: #efefef;
    color: #FB4D3D;
    font-size: 3.5vw;
  }
  .model_btn{
    width: 100vw;
    height: 50px;
    display: flex;
    vertical-align: center;
    flex-direction:row-reverse;
  }
  .imm{
    width: 20vw;
  }
  .van-list{
    margin-top: 44px;
  }

</style>
