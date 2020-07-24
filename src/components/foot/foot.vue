<template>
  <section id='foot_guide'>
    <section class="guide_item">
      <i class="fa fa-search" aria-hidden="true"></i>
      <span>搜索</span>
    </section>
    <section @click = "gotoAddress('/unit')"  class="guide_item">
      <i class="fa fa-heart-o" aria-hidden="true"></i>
      <span>心愿单</span>
    </section>
    <section class="guide_item">
      <i class="icon ion-pinpoint"></i>
      <router-link to="/home"> <span>目的地</span></router-link>
    </section>
    <section  class="guide_item">
      <i class="fa fa-comment-o" aria-hidden="true"></i>
      <span>收件箱</span>
    </section>
    <section @click = "gotoAddress('/person')" class="guide_item">
      <i class="fa fa-user-o" aria-hidden="true"></i>
      <span>登录</span>
    </section>
  </section>
</template>

<script>
  export default {
    data(){
      return{

      }
    },
    created(){

    },
    mounted(){

    },
    computed: {

    },
    methods: {
      gotoAddress:function(path){
        this.$router.push(path)
      }
    },

  }

</script>

<style lang="scss" scoped>
  @import '../../style/mixin';

  #foot_guide{
    background-color: #fff;
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 0;
    @include wh(100%, 1.95rem);
    display: flex;
    box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
  }
  .guide_item{
    flex: 1;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    padding: 3px;
    margin-top: 5px;
    span{
      @include sc(.45rem, #666);
    }
  }

</style>
