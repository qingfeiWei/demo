<template>

  <section>
    <section class="h-top">
      <div class="h-city"> <h3>北京</h3><span>切换城市</span></div>
      <div class="h-search">
        <div class="s-btn"><span>搜索更多房源</span><i class="fa fa-angle-right" aria-hidden="true"></i></div>
      </div>
    </section>
    <section class="h-rank">
      <h3>热门榜</h3>
      <ul>
        <li><p>热门榜</p><span>满分榜|无差评</span></li>
        <li><p>热门榜</p><span>满分榜|无差评</span></li>
        <li><p>热门榜</p><span>满分榜|无差评</span></li>
        <li><p>热门榜</p><span>满分榜|无差评</span></li>
        <li><p>热门榜</p><span>满分榜|无差评</span></li>
        <li><p>热门榜</p><span>满分榜|无差评</span></li>
      </ul>
    </section>
    <section class="h-list">
      <h3>精选推荐</h3>
      <el-card :body-style="{ padding: '0px' }">
        <img src="" class="image">
        <div style="padding: 14px;">
          <span>好吃的汉堡</span>
          <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time>
            <el-button type="text" class="button">操作按钮</el-button>
          </div>
        </div>
      </el-card>
    </section>
    <foot></foot>
  </section>
</template>

<script>
  import foot from '../../components/foot/foot';
  import {dictionaries} from "../../services/getData";

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

  }

</script>

<style lang="scss" scoped>
  .h-top {
    display: flex;
    .h-city {
      display: flex;
      width: 70%;
      align-items: center;
      span {
        font-size: 13px;
        margin: 15px 10px 10px 10px;
      }
    }

    .h-search {
      width: 30%;
      display: flex;
      justify-content: center;
      align-items: center;
      .s-btn{
        background: #cecece;
        padding: 10px;
        border-radius: 20px;
        width: 120px;
        font-size: 15px;
        color: #fff;
        i{
          margin-left: 10px;
        }
      }
    }
  }
  .h-rank{
    h3{
      text-align: left;
    }
    ul{
      display: flex;
      list-style: none;
      margin-block-start: 0px;
      margin-block-end: 0px;
      padding-inline-start: 0px;
    }
  }
  .h-list{
    h3{
      text-align: left;
    }
  }

</style>
