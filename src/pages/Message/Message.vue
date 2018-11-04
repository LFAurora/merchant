<template>
  <section class="message_container">
    <header class="head">
      <span>消息</span>
      <span><i class="iconfont icon-shezhi"></i></span>
    </header>
    <div class="tab_toggle">
      <van-tabs swipeable>
        <van-tab :title="'聊天'">
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-list
              v-model="loading"
              :finished="finished"
              @load="onLoad"
            >
              <van-cell>
                <div class="inform_container">
                  <img src="./images/head.jpg" alt="">
                  <div class="mark">
                    <div class="time">
                      <span >商学院</span>
                      <span>2018-10-27</span>
                    </div>
                    <span>还在抱怨推广难?</span>
                  </div>
                </div>
              </van-cell>
              <van-cell>
                <div class="inform_container">
                  <img src="./images/head.jpg" alt="">
                  <div class="mark">
                    <div class="time">
                      <span >商学院</span>
                      <span>2018-10-27</span>
                    </div>
                    <span>还在抱怨推广难?</span>
                  </div>
                </div>
              </van-cell>
              <van-cell>
                <div class="inform_container">
                  <img src="./images/head.jpg" alt="">
                  <div class="mark">
                    <div class="time">
                      <span >商学院</span>
                      <span>2018-10-27</span>
                    </div>
                    <span>还在抱怨推广难?</span>
                  </div>
                </div>
              </van-cell>
              <van-cell>
                <div class="inform_container">
                  <img src="./images/head.jpg" alt="">
                  <div class="mark">
                    <div class="time">
                      <span >商学院</span>
                      <span>2018-10-27</span>
                    </div>
                    <span>还在抱怨推广难?</span>
                  </div>
                </div>
              </van-cell>
              <van-cell>
                <div class="inform_container">
                  <img src="./images/head.jpg" alt="">
                  <div class="mark">
                    <div class="time">
                      <span >商学院</span>
                      <span>2018-10-27</span>
                    </div>
                    <span>还在抱怨推广难?</span>
                  </div>
                </div>
              </van-cell>
            </van-list>
          </van-pull-refresh>
        </van-tab>
        <van-tab :title="'通知'">
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-list
              v-model="loading"
              :finished="finished"
              @load="onLoad"
            >
              <van-cell>
                <div class="inform_container">
                  <img src="./images/head.jpg" alt="">
                  <div class="mark">
                    <div class="time">
                      <span >店长消息</span>
                      <span>2018-10-13</span>
                    </div>
                    <span class="cm">升级通知哒哒哒哒哒哒多多多大萨达速度发斯蒂芬是否噶发送到发送到</span>
                  </div>
                </div>
              </van-cell>
              <van-cell>
                <div class="inform_container">
                  <img src="./images/head.jpg" alt="">
                  <div class="mark">
                    <div class="time">
                      <span >商学院</span>
                      <span>2018-10-27</span>
                    </div>
                    <span>还在抱怨推广难?</span>
                  </div>
                </div>
              </van-cell>
              <van-cell>
                <div class="inform_container">
                  <img src="./images/head.jpg" alt="">
                  <div class="mark">
                    <div class="time">
                      <span >商学院</span>
                      <span>2018-10-27</span>
                    </div>
                    <span>还在抱怨推广难?</span>
                  </div>
                </div>
              </van-cell>
              <van-cell>
                <div class="inform_container">
                  <img src="./images/head.jpg" alt="">
                  <div class="mark">
                    <div class="time">
                      <span >商学院</span>
                      <span>2018-10-27</span>
                    </div>
                    <span>还在抱怨推广难?</span>
                  </div>
                </div>
              </van-cell>
              <van-cell>
                <div class="inform_container">
                  <img src="./images/head.jpg" alt="">
                  <div class="mark">
                    <div class="time">
                      <span >商学院</span>
                      <span>2018-10-27</span>
                    </div>
                    <span>还在抱怨推广难?</span>
                  </div>
                </div>
              </van-cell>
            </van-list>
          </van-pull-refresh>
        </van-tab>
      </van-tabs>
    </div>
  </section>
</template>

<script>
  import { Tab, Tabs,List,SwipeCell } from 'vant';
  import { Cell, CellGroup } from 'vant';
  import { PullRefresh } from 'vant';
  export default {
    components: {
      Tab,
      Tabs,
      List,
      SwipeCell,
      Cell,
      CellGroup,
      PullRefresh
    },
    data() {
      return {
        list: [],
        loading: false,
        finished: false,
        isLoading: false
      }
    },

    methods: {
      onLoad() {
        // 异步更新数据
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            this.list.push(this.list.length + 1);
          }
          // 加载状态结束
          this.loading = false;

          // 数据全部加载完成
          if (this.list.length >= 40) {
            this.finished = true;
          }
        }, 500);
      },
      onRefresh() {
        setTimeout(() => {
          // this.$toast('刷新成功');
          // this.isLoading = false;
        }, 500);
      }

    }
  }
</script>

<style>
  .cm{
    /*width: 68vw;*/
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .head{
    width: 100vw;
    height: 7.5vh;
    background: #FB4D3D;
    line-height: 7.5vh;
  }
  .head span{
    color: white;
    font-size: 4vw;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  }
  .head span:nth-child(1){
    margin-left: 4.5vw;
  }
  .head span:nth-child(2){
    float: right;
    margin-right: 4.5vw;
  }
  .inform{
    height: 70.5vh;
    overflow-y: scroll;
  }
  .inform li{
    width: 100vw;
    height: 10vh;
    border-bottom: 1px solid lightgray;
    /*background: red;*/
  }
  .inform_container{
    width: 92vw;
    height: 100%;
    margin-left: 4vw;
    display: flex;
    align-items:center;
    /*justify-content:space-between;*/
  }
  .inform_container>img{
    width: 8vh;
  }
  .mark{
    display: inline-block;
    margin-left: 2vw;
    width:68vw;
  }
  .mark>span{
    display: block;
    line-height: 4vh;
  }
  .mark>span:nth-child(2){
    font-size: 12px;
    color: lightgray;
  }
  .time{
    height: 4vh;
    line-height: 4vh;
  }
  .time>span:nth-child(2){
    float:right;
    right: 15vw;
    font-size: 12px;
    color: lightgray;
  }
</style>
