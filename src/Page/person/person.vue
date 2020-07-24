<template>
<section class="p-body">
  <section class="p-head">
      <span><i class="fa fa-gear" aria-hidden="true"></i></span>
      <span><i class="fa fa-bell-o" aria-hidden="true"></i></span>
  </section>
  <section class="p-menu1">
    <div class="p-info">
      <div class="p-title">
        <p>***</p>
        <span>查看并编辑个人信息</span>
      </div>
      <div class="p-user"><div class="p-img"></div></div>
    </div>
    <el-divider></el-divider>
  </section>
  <section class="p-menu2">
    <h3>我的房源订单</h3>
    <ul>
      <li><i class="fa fa-file-text-o" aria-hidden="true"></i><span>全部订单</span></li>
      <li><i class="fa fa-gear" aria-hidden="true"></i><span>全部订单</span></li>
      <li><i class="fa fa-gear" aria-hidden="true"></i><span>全部订单</span></li>
    </ul>
      <el-divider></el-divider>
  </section>
  <section class="p-menu2">
    <h3>礼劵中心</h3>
    <ul>
      <li><i class="fa fa-file-text-o" aria-hidden="true"></i><span>全部订单</span></li>
      <li><i class="fa fa-gear" aria-hidden="true"></i><span>有效订单</span></li>
      <li><i class="fa fa-gear" aria-hidden="true"></i><span>待支付订单</span></li>
    </ul>
      <el-divider></el-divider>
  </section>
  <section class="p-menu2">
    <h3>旅程工具</h3>
    <ul>
      <li><i class="fa fa-gear" aria-hidden="true"></i><span>安全中心</span></li>
      <li><i class="fa fa-question-circle-o" aria-hidden="true"></i><span>邻里调解</span></li>
      <li><i class="fa fa-question-circle-o" aria-hidden="true"></i><span>获取帮助</span></li>
      <li><i class="fa fa-gear" aria-hidden="true"></i><span>商务差旅</span></li>
      <li><i class="fa fa-gear" aria-hidden="true"></i><span>产品反馈</span></li>
      <li><i class="fa fa-gear" aria-hidden="true"></i><span>行程规划</span></li>
    </ul>
      <el-divider></el-divider>
  </section>

  <section class="p-menu3">
    <h3>成为房东/体验达人</h3>
    <ul>
      <li><span>了解如何出租房源</span><i class="fa fa-angle-right" aria-hidden="true"></i></li>
      <li><span>发布房源</span><i class="fa fa-angle-right" aria-hidden="true"></i></li>
      <li><span>开展体验</span><i class="fa fa-angle-right" aria-hidden="true"></i></li>
    </ul>
    <el-divider></el-divider>
  </section>
  <foot></foot>
</section>

</template>

<script>
  import Vue from 'vue';
  import sectionider from 'element-ui';
  import foot from '../../components/foot/foot';
  Vue.use(sectionider);
  export default {
    data() {
      return {

      }
    },
    components: {
      foot,
    },
    mounted() {


    },
    methods: {}
  }

</script>

<style lang="scss" scoped>
  .p-body{
    padding: 5px;
  }
  .p-head{
    height: 20px;
    display: flex;
    flex-direction: row-reverse;
    span{
       width: 15%;
    }
  }
  .p-menu1{
    .p-info{
      display: flex;
      margin-top: 20px;
      .p-title{
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        p{
          margin-block-start: 0px;
          margin-block-end: 0px;
          text-align: left;
        }
        span{
          font-size: 12px;
          text-align: left;
        }
      }
      .p-user{
        width: 20%;
        .p-img{
          background: #cecece;
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }
      }
    }
  }
.p-menu2{
  h3{
    text-align: left;
  }
  ul{
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding-inline-start: 0px;
    li{
      -webkit-box-flex: 0;
      -ms-flex: 0 0 33.33%;
      flex: 0 0 33.33%;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-flow: wrap;
      flex-flow: wrap;
      flex-direction: column;
      margin-bottom: 10px;
      margin-top: 10px;
    }
  }
}
  .p-menu3{
    h3{
      text-align: left;
    }
    ul{
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      padding-inline-start: 0px;
      li{
        -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-flow: wrap;
        flex-flow: wrap;
        margin-bottom: 10px;
        margin-top: 10px;
        span{
          width: 95%;
          text-align: left;
        }
      }
    }
  }
</style>
