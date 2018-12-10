<template>
  <section class="shop_detail">
    <van-nav-bar
      title="商品详情"
      left-text="返回"
      right-text="完成"
      fixed
      left-arrow
      @click-left="$router.back()"
      @click-right="onClickRight"
    />
    <div class="shop_detail_main">
      <form action="">
        <van-cell-group v-if="this.title!=''">
          <van-field
            type="textarea"
            rows="3"
            autosize
            v-model="title"
          />
        </van-cell-group>
        <div class="shop_detail_img" v-for="(sd,index) in shopDetail">
          <div class="upload_warp_left1 room_add_btn" v-show="sd.show">
            <input type="file" id="upp" :index="index" @change.prevent='add_img'>
            <img src="../AddMain/upload.png">
          </div>
          <img :src="sd.img" @click.prevent="ImgPreview" :index="index" >
          <van-cell-group >
            <van-field
              type="textarea"
              rows="3"
              autosize
              v-model="sd.text"
              placeholder="请填写内容"
            />
          </van-cell-group>
          <button @click.prevent="del(index)" class="del_shop_detail iconfont icon-shanchu">删除</button>
        </div>
      </form>
      <button class="iconfont icon-jia shop_detail_aad_container" @click.prevent="addDetail">添加内容</button>
    </div>
  </section>
</template>

<script>
  import { Toast } from 'vant';
  import Vue from 'vue'
  Vue.use(Toast)
  import { ImagePreview } from 'vant';
  export default {
    data(){
      return{
        title:'',
        msg:[],
        shopDetail:[]
      }
    },
    mounted(){
      this.getParams()
    },
    methods:{
      getParams(){
        let routerParams = this.$route.params.arrImg
        let title = this.$route.params.title
        this.title = title
        const imgArr = JSON.parse(routerParams)
        for (let i in imgArr){
          this.shopDetail.push({
            show:false,
            img:"data:image/jpeg;base64,"+imgArr[i],
            text:''
          })
        }
      },
      onClickRight(){
        if(this.title==='' && this.shopDetail.length===0){
          Toast('请填写内容')
        }
      },
      addDetail(){
        this.shopDetail.push({
          show:true,
          img:'',
          text:''
        })
      },
      del(index){
        this.shopDetail.splice(index,1)
      },
      add_img(event){
        var index = event.target.getAttribute("index")
        var reader =new FileReader()
        var img1=event.target.files[0]
        reader.readAsDataURL(img1)
        var objArr = this.shopDetail
        // console.log(objArr)
        reader.onloadend=function(){
          objArr[index].show = false
          objArr[index].img = reader.result
        }
        this.test = objArr
      },
      ImgPreview(e){
        var imgIndex = e.target.getAttribute("index")
        console.log(imgIndex)
        var img = this.shopDetail[imgIndex].img
        ImagePreview({
          images:[img],
          showIndex:false
        });
      },
    },
  }
</script>

<style scoped>
  .van-list{
    margin-top: 44px;
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
  .shop_detail{
    background-color: #fff;
    width: 100vw;
  }
  .shop_detail_main{
    position: relative;
    top: 65px;
    width: 90vw;
    /*border: 1px solid#eeeeee;*/
    margin-left: 5vw;
  }
  .van-cell{
    width: 90vw;
    border: none;
    border: 1px solid#eeeeee;
  }
  .shop_detail_img{
    margin-top: 15px;
  }
  textarea{
    display: inline-block;
    border: 1px solid #eeeeee;
  }
  .shop_detail_img>img{
    width: 90vw;
    object-fit: cover;
  }
  .shop_detail_aad_container{
    width: 80vw;
    height: 50px;
    margin-left: 5vw;
    outline: none;
    color: #E7141A;
    background-color: white;
    border: 1px solid #E7141A;
    border-radius: 5px;
    font-size: 18px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .room_add_btn{
    width: 30vw;
    height: 30vw;
    line-height: 40px;
    text-align: center;
    color: #fff;
    border-radius: 4px;
  }
  .room_add_btn input{
    position: absolute;
    width: 30vw;
    height: 30vw;
    z-index: 99999;
    opacity: 0;
    border: none;
    margin-left: 30vw;

  }
  .upload_warp_left1 img{
    width: 30vw;
    height: 30vw;
    margin-left: 30vw;
  }
  .del_shop_detail{
    width: 90vw;
    line-height: 30px;
    border: 1px solid #eeeeee;
    background-color: white;
    color: #f80000;
  }
</style>
