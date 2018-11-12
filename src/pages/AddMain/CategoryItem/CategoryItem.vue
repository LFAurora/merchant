<template>
  <section class="category_item">
    <van-nav-bar
      title="选择类目"
      left-text="返回"
      fixed
      left-arrow
      @click-left="$router.back()"
    />
    <div class="category_list">
      <van-notice-bar :scrollable="false" mode="link">
        请选择正确的类目
      </van-notice-bar>
      <ul>
        <li v-model="list" data-id="1" data-content="蔬菜" ref="dataNum" @click="category_name">{{list}}</li>
        <li>水果</li>
        <li>调味品</li>
        <li>刀具</li>
      </ul>
    </div>
  </section>
</template>

<script>
  import Public from '../../../../static/js/public.js'
  export default {
    data(){
      return{
        list: '蔬菜'
      }
    },
    methods:{
      category_name(){
        var id = this.$refs.dataNum.dataset.id;
        var content = this.$refs.dataNum.dataset.content;
        // Public.$emit('val',this.list)
        Public.$emit("typeId", id);
        Public.$emit("typeName", content);
        this.$router.back()
        // console.log(this.$router)
      }
    }
  }
</script>

<style >
.category_list{
  margin-top: 44px;
}
  .category_list>ul>li{
    width: 100vw;
    height: 50px;
    border-bottom: 1px solid lightgray;
    line-height: 50px;
    text-align: center;
  }
</style>
