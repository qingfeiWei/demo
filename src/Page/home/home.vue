<template>

  <section >
    <ul class="mail clear">
      <li v-for="(value, key, index) in units" :key="key" >
        <h4 class="city_title">{{key}}
          <span v-if="index == 0">（按字母排序）</span>
        </h4>
        <ul class="unit clear">
          <li v-for="item in value" :key="item.id" class="ellipsis">{{item.name}}</li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script>

  import {dictionaries} from "../../services/getData";

  export default {
    data() {
      return {
        units: [],
        dictionaries:[],
      }
    },

    mounted() {
      // 获取当前城市
      fetch('/api/unit/list', {              //  /api既是上面跨域定义的文件地址
        method: "post",                  //请求方式
        headers: {                      //请求头
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }).then(response => response.json())
        // 拿值
        .then(data => {
          console.log(data)
          this.units=data
        })
        .catch(err => {
          console.log(err)
        })
      // 获取字典信息
      dictionaries().then(res => {
        console.log(res);
      })

    },
  }

</script>

<style lang="scss" scoped>
  @import '../../style/mixin';
  .mail{
    padding: 0;
    margin: 0;
    list-style: none;
    font-style: normal;
    text-decoration: none;
    border: none;
    color: #333;
    font-weight: normal;
    font-family: "Microsoft Yahei";
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    li{
      margin-bottom: 0.4rem;
      background-color: #fff;
    }
    h4{
      color: #666;
      font-weight: 400;
      text-indent: 0.45rem;
      border-top: 2px solid #e4e4e4;
      border-bottom: 1px solid #e4e4e4;
      @include font(0.55rem, 1.45rem, "Helvetica Neue");
      text-align: left;
      span{
        @include sc(0.475rem, #999);
        color: #999;
      }
    }
    .unit{
      padding: 0;
      width: 100%;
      display: flex;
      flex-flow: wrap;
      li{
        float: left;
        text-align: center;
        color: #3190e8;
        border: 0.025rem solid #e4e4e4;
        height: 1.75rem;
        font: 0.6rem/1.75rem "Microsoft YaHei";
        @include wh(100%, 1.75rem);
        @include font(0.6rem, 1.75rem);
      }
      li:nth-of-type(4n){
        border-right: none;
      }
    }
  }
  .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .clear {
    zoom: 1;
  }

  .clear:after {
    content: '';
    display: block;
    clear: both;
  }

  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    background-color: #F5F5F5;
  }


</style>
