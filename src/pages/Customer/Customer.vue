<template>
  <section>
    <van-nav-bar
      title="客户访问详情 "
      left-text="返回"
      left-arrow
      @click-left="$router.back()"
    />
    <div id="myChart" style="width: 100vw;height: 400px;background-color:lightsalmon"></div>
  </section>
</template>

<script>
  import echarts from 'echarts'
  export default {
    name: 'Bank',
    data () {
      return {
      }
    },
    mounted () {
      /*ECharts图表*/
      var myChart = echarts.init(document.getElementById('myChart'));
      myChart.setOption({
        xAxis: {
          type: 'category',
          data: ['0', '6H', '9H', '12H', '15H', '18H', '24H']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [1, 3, 4, 7, 4, 5, 9],
          type: 'line'
        }]
      })

    },
    methods:{
    }
  }
</script>

<style >
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
</style>
