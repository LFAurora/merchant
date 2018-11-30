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
      <form>
        <uploader @getFiles='getImageList' @removeFiles='removeImage'></uploader>
        <van-cell-group >
          <van-field
            label="标题"
            type="textarea"
            placeholder="请填写商品标题"
            rows="3"
            autosize
          />
        </van-cell-group>
        <van-cell-group >
          <van-field @click="IsshowPop"
                     label="类目"
                     icon="arrow" readonly
                     v-model="list_name"
          />
        </van-cell-group>
        <div>
          <div class="add_shop_model" v-for="(item,index) in test" :key="index">
            <div class="model" v-if="showModel">
              <label for="">型号</label>
              <input type="text" v-model="item.model">
              <div class="upload_warp_left1 room_add_btn" >
                <input type="file" id="upp" :index="index" @change='add_img'>
                <img src="./upload.png">
              </div>
            </div>
            <div class="price">
              <label for="">价格</label>
              <input type="text" v-model="item.price">
              <button :index="index" class="iconfont icon-jian del_model_btn" v-if="showModel" @click.prevent="deleteModel($event)"></button>
            </div>
            <div class="inventory">
              <label for="">库存</label>
              <input type="text" v-model="item.inventory">
            </div>
            <div v-if="showModel" class='room_img'>
              <img :src="item.img" v-if="item.isImg" @click="ImgPreview" :index="index">
            </div>
          </div>
        </div>
        <div class="model_btn">
          <button @click.prevent="addModel" class="iconfont icon-jia1 add_model">添加商品型号</button>
        </div>
        <van-cell-group >
          <van-field @click="IsShowFreight"
                     label="运费模板"
                     icon="arrow" readonly
                     v-model="template_of_freight"
          />
        </van-cell-group>
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
            <van-popup v-model="showPop" position="bottom" :overlay="false">
               <van-picker show-toolbar title="请选择商品的分类" :columns="columns" @cancel="onCancel" @confirm="onConfirm" />
            </van-popup>
      <van-popup v-model="showFreight" position="bottom" :overlay="false">
         <van-picker show-toolbar title="请选择商品的分类" :columns="showFreightColumns" @cancel="onCancelFreight" @confirm="onConfirmFreight" />
      </van-popup>
    </van-list>

  </section>
</template>

<script>
  import { ImagePreview } from 'vant';
  import uploader from "./Upload";
  export default {
    data(){
      return{
        test:[{
          model: "",
          price: "",
          img: "",
          inventory: "",
          isImg: false
        }],
        showModel:false,
        size: 0,
        list_name:'',
        template_of_freight:'',
        showPop: false,
        showFreight:false,
        columns: ['蔬菜', '水果', '调味品', '刀具'],
        showFreightColumns:['默认运费模板','全国地区包邮','包邮(除偏远地区外)'],
        dynamicContent: "", //动态内容
        imgList: [], //已上传的图片集合
        FilecodeList: [],
        isSubmit: false
      }
    },
    components: {
      uploader
    },
    methods: {
      ImgPreview(e){
        var imgIndex = e.target.getAttribute("index")
        console.log(imgIndex)
        var img = this.test[imgIndex].img
        ImagePreview({
          images:[img],
          showIndex:false
        });
      },
      IsshowPop(){
        this.showPop=true
      },
      IsShowFreight(){
        this.showFreight=true
      },
      onConfirm(value, index) {
        this.list_name = value
        this.showPop=false
      },
      onCancel() {
        this.showPop=false
      },
      onConfirmFreight(value, index) {
        this.template_of_freight = value
        this.showFreight=false
      },
      onCancelFreight() {
        this.showFreight=false
      },

      goTo(path){
        console.log(123)
      },
      onClickRight(){
        // alert('完成')
        console.log(this);
      },
      addModel() {
        if(this.showModel==false){
          this.showModel = !this.showModel
        }else{
          this.test.push({
            model: "",
            price: "",
            img: "",
            inventory: "",
            isImg: false
          })
        }
      },
      deleteModel(e){
        const index = e.target.getAttribute("index");
        if(index==0 && this.test.length==1){
          this.showModel = !this.showModel
          this.test[index].img=''
          this.test[index].isImg=false
          console.log(this.test)
        }else{
          console.log(this.test)
          this.test.splice(index,1);
        }
      },
      add_img(event){
        var index = event.target.getAttribute("index")
        var reader =new FileReader()
        var img1=event.target.files[0]
        reader.readAsDataURL(img1)
        var objArr = this.test
        // console.log(objArr)
        reader.onloadend=function(){
          objArr[index].isImg = true
          objArr[index].img = reader.result
        }
        this.test = objArr
      },
      getImageList(files) {
        this.$nextTick(() => {
          for (let i = 0, len = files.length; i < len; i++) {
            this.imgList.push(files[i].src.split("base64,")[1]);
            //上传图片
            //   this._getFileCode({
            //     Base64Str: files[i].src.split("base64,")[1],
            //     AttachmentType: this.$enums.AttachmentType.Activity
            //   });
          }
        });
      },
      //删除图片
      removeImage(index) {
        this.imgList.splice(index, 1);
      },
      //上传图片获取fileCode (目前该方法没调用，供参考)
      _getFileCode(obj) {
        // Indicator.open(this.lang.dynamic_publishing);
        this.$http
          .post(this.$profileApi.Shared_UploadImage, obj)
          .then(data => {
            if (data.Rstatus) {
              this.FilecodeList.push(data.Rdata);
            } else {
              // Toast(this.lang.dynamic_upload_fail);
            }
          })
          .catch(err => {
            //   Toast(this.lang.dynamic.dynamic_net_error);
          });
      },
      //创建动态 (发布动态的请求)
      createDynamic(arr) {
        this.isSubmit = true;
        this.$http
          .post(this.$profileApi.Dynamic_CreateDynamic, {
            Subject: this.dynamicContent,
            Files: arr
          })
          .then(data => {
            this.isSubmit = false;
            if (data.Rstatus) {
              // Toast(this.lang.dynamic_publish_ok);
              this.$router.back();
            } else {
              // Toast(this.lang.dynamic_publish_fail);
            }
          })
          .catch(err => {
            //   Toast(this.lang.dynamic_net_error);
          });
      },
      //发布事件
      // send() {
      //   Toast("提交信息在控制台里～图片地址是压缩后的base64地址");
      //   console.log("内容" + this.dynamicContent);
      //   console.log(this.imgList);
      //   //   if (this.dynamicContent.trim() == "" && this.imgList.length === 0) {
      //   //     // Toast(this.lang.dynamic_content_no_null);
      //   //     return;
      //   //   }
      //   //   //当图片还没上传成功
      //   //   let self = this;
      //   //   var timer = setInterval(function() {
      //   //     if (
      //   //       self.FilecodeList &&
      //   //       self.imgList &&
      //   //       self.FilecodeList.length < self.imgList.length
      //   //     ) {
      //   //       // Indicator.open(self.lang.dynamic_uploading)
      //   //       self.isSubmit = true;
      //   //     } else {
      //   //       clearInterval(timer);
      //   //       // Indicator.close();
      //   //       self.createDynamic(self.FilecodeList);
      //   //     }
      //   //   }, 200);
      // }
    }
  }
</script>

<style>
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
    background: white;
  }
  .add_shop_model>div{
    margin-left: 3vw;
  }
  .model{
    padding-top: 10px;
    position: relative;
  }
  .price{
    padding-top: 20px;
  }
  .inventory{
    margin-top: 10px;
    padding-bottom: 20px;
  }
  .add_shop_model input{
    border: 1px solid lightgray;
    margin-left: 5vw;
    width: 65vw;
    height: 35px;
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
    height: 60px;
    display: flex;
    flex-direction:row-reverse;
  }

  .upload_warp_img_div_del {
    position: absolute;
    top: 6px;
    width: 16px;
    right: 4px;
  }

  .upload_warp_img_div_top {
    position: absolute;
    top: 0;
    width: 100%;
    height: 30px;
    background-color: rgba(0, 0, 0, 0.4);
    line-height: 30px;
    text-align: left;
    color: #fff;
    font-size: 12px;
    text-indent: 4px;
  }

  .upload_warp_img_div img {
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
  }

  .upload_warp_img_div {
    position: relative;
    height: 100px;
    width: 30vw;
    border: 1px solid #ccc;
    margin: 0px 10px 10px 0px;
    float: left;
    line-height: 100px;
    display: table-cell;
    text-align: center;
    background-color: #eee;
    cursor: pointer;
  }

  .upload_warp_img {
    border-top: 1px solid #D2D2D2;
    padding: 14px 0 0 0;
    overflow: hidden
  }

  .upload_warp_left img {
    margin-top: 32px;
  }

  .upload_warp_left {
    float: left;
    width: 40%;
    height: 100%;
    margin-left: 30%;
    border: 1px dashed #999;
    border-radius: 4px;
    cursor: pointer;
  }
  .upload_warp_left1{
    position: absolute;
    top: 14px;
    left: 70vw;
    /*z-index: 10;*/
  }
  .upload_warp_left1 img{
    width: 30px;
    height: 30px;
  }

  .upload_warp {
    margin: 14px;
    height: 140px;
  }

  .upload {
    border: 1px solid #ccc;
    background-color: #fff;
    width: 99vw;
    box-shadow: 0px 1px 0px #ccc;
    border-radius: 4px;
  }

  .hello {
    width: 99vw;
    /*margin-left: 34%;*/
    text-align: center;
  }
  .van-cell__title, .van-cell__value{
    font-size: 17px;
  }
  .van-cell{
    line-height: 40px;
  }
  .finish_room{
    width: auto;
    height: auto;
  }
  .finish_room2{
    width: 100%;
    height: auto;
    padding-top: 15px;
    padding-bottom: 15px;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #e1e1e1;
  }
  .finish_room2 .room_img{
    width: 150px;
    height: 100px;
    margin-right: 10px;
    position: relative;
    overflow: hidden;
  }
  .finish_room2 .room_img img{
    width: 100%;
    height: 100%;
  }
  .finish_room2>.room_img span{
    position: absolute;
    width: auto;
    height: auto;
    right: 5px;
    bottom:3px;
  }
  .room_add_btn{
    width: 30px;
    height: 30px;
    border: 1px solid #e1e1e1;
    position: absolute;
    /*top: -35px;*/
    line-height: 40px;
    text-align: center;
    /*background: #00a6c6;*/
    color: #fff;
    border-radius: 4px;
  }
  .room_add_btn input{
    position: absolute;
    top: 0px;
    left: -20px;
    width: 30px;
    height: 30px;
    z-index: 99999;
    opacity: 0;
  }
  .room_img img{
    width: 15vw;
    height: 15vw;
    margin-bottom: 10px;
    margin-left: 15vw;
  }
</style>
