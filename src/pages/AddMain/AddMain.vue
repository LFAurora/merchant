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
        <div class="hello">
          <div class="upload">
            <div class="upload_warp">
              <div class="upload_warp_left" @click="fileClick">
                <img src="./upload.png">
              </div>
            </div>
            <input @change="fileChange($event)" type="file" id="upload_file" multiple style="display: none"/>
            <div class="upload_warp_img" v-show="imgList.length!=0">
              <div class="upload_warp_img_div" v-for="(item,index) of imgList">
                <div class="upload_warp_img_div_top">
                  <img src="./del.png" class="upload_warp_img_div_del" @click="fileDel(index)">
                </div>
                <img :src="item.file.src">
              </div>
            </div>
          </div>
        </div>
        <van-cell-group>
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
                <input type="file" id="upp"  @change='add_img'>
                <img src="./upload.png">
              </div>
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
            <div v-if="showModel" v-for='(item ,index ) in imgs' class='room_img'>
              <img :src="item">
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
      <van-popup v-model="showPop" position="bottom" :overlay="false">
         <van-picker show-toolbar title="请选择商品的分类" :columns="columns" @cancel="onCancel" @confirm="onConfirm" />
      </van-popup>
    </van-list>

  </section>
</template>

<script>
  export default {
    data(){
      return{
        test:[{}],
        showModel:false,
        imgList: [],
        imgs:[],
        size: 0,
        list_name:'',
        showPop: false,
        columns: ['蔬菜', '水果', '调味品', '刀具']
      }
    },
    props:{},
    methods: {
      IsshowPop(){
        this.showPop=true
      },
      onConfirm(value, index) {
        this.list_name = value
        this.showPop=false
        // console.log(`当前值：${value}, 当前索引：${index}`);
      },
      onCancel() {
        this.showPop=false
      },

      goTo(path){
        console.log(123)
        // this.$router.replace(path)
        // this.$router.push(path)
      },
      onClickRight(){
        // alert('完成')
        console.log(this);
      },
      addModel() {
        if(this.showModel==false){
          this.showModel = !this.showModel
        }else{
          this.test.push({})
        }
      },
      deleteModel(e){
        const index = e.target.getAttribute("index");
        if(index==0 && this.test.length==1){
          this.showModel = !this.showModel
          this.imgs.splice(0,this.imgs.length)
        }else{
          this.test.splice(index,1);
        }
      },
      fileClick() {
        document.getElementById('upload_file').click()
      },
      fileClicka() {
        document.getElementById('upp').click()
      },
      fileChange(el) {
        if (!el.target.files[0].size) return;
        this.fileList(el.target);
        el.target.value = ''
      },
      fileList(fileList) {
        let files = fileList.files;
        for (let i = 0; i < files.length; i++) {
          //判断是否为文件夹
          if (files[i].type != '') {
            this.fileAdd(files[i]);
          } else {
            //文件夹处理
            this.folders(fileList.items[i]);
          }
        }
      },
      //文件夹处理
      folders(files) {
        let _this = this;
        //判断是否为原生file
        if (files.kind) {
          files = files.webkitGetAsEntry();
        }
        files.createReader().readEntries(function (file) {
          for (let i = 0; i < file.length; i++) {
            if (file[i].isFile) {
              _this.foldersAdd(file[i]);
            } else {
              _this.folders(file[i]);
            }
          }
        })
      },
      foldersAdd(entry) {
        let _this = this;
        entry.file(function (file) {
          _this.fileAdd(file)
        })
      },
      fileAdd(file) {
        //总大小
        this.size = this.size + file.size;
        //判断是否为图片文件
        if (file.type.indexOf('image') == -1) {
          file.src = 'wenjian.png';
          this.imgList.push({
            file
          });
          console.log(this.imgList[0])
        } else {
          let reader = new FileReader();
          reader.vue = this;
          reader.readAsDataURL(file);
          reader.onload = function () {
            file.src = this.result;
            this.vue.imgList.push({
              file
            });
          }
        }
      },
      fileDel(index) {
        this.size = this.size - this.imgList[index].file.size;//总大小
        this.imgList.splice(index, 1);
      },
      dataURLtoBlob(dataurl){
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while(n--){
          u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], {type:mime});
      },
      add_img(event){
        var reader =new FileReader();
        var img1=event.target.files[0];
        reader.readAsDataURL(img1);
        var that=this;
        if(that.imgs.length>=1){
          reader.onloadend=function(){
            that.imgs.splice(0,1,reader.result)
            console.log(that.dataURLtoBlob(reader.result));
          }
        }else{
          reader.onloadend=function(){
            that.imgs.push(reader.result)
            console.log(that.dataURLtoBlob(reader.result));
          }
        }

      }
    }
  }
</script>

<style >
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
    /*height: 150px;*/
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
    z-index: 9999;
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
