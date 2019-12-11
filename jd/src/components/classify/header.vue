<template>
  <div class="box">
    <span class="back" @click="back"></span>
    <van-search class="inp" placeholder="搜索商品/店铺" v-model="value" style="width:88vw" />
    <van-icon @click="hide" name="weapp-nav" class="menu" size="5vw" />
    <div class="rightMenu" v-show="flag">
      <div class="sanjiao"></div>
      <div>
        <router-link to="/index/home">
          <i class="iconfont icon-yemian-copy-copy1"></i>
          <span>首页</span>
        </router-link>
      </div>
      <div>
        <router-link to="/index/classify">
          <i class="iconfont icon-fenlei"></i>
          <span>分类搜索</span>
        </router-link>
      </div>
      <div>
        <router-link to="/index/shopping">
          <i class="iconfont icon-cart"></i>
          <span>购物车</span>
        </router-link>
      </div>
      <div>
        <router-link to="/index/user">
          <i class="iconfont icon-mainoff"></i>
          <span>我的京东</span>
        </router-link>
      </div>
      <div>
        <router-link to="/index/home">
          <i class="iconfont icon-liulanjilu"></i>
          <span>浏览记录</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "header-div",
  data() {
    return {
        value:'',
        flag:false
    };
  },
  methods: {
      back(){},
      hide(){
          this.flag=!this.flag
      }
  },
  components: {}
};
</script>
<style lang="less" scoped>
.box{
    position: fixed;
}
.back {
  width: 4vw;
  height: 4vw;
  margin-top: 4.5vw;
  margin-left: 1vw;
  //  display: inline-block;
  background: url(../../assets/back.png);
  background-size: contain;
  float: left;
}
.inp {
  float: left;
}
.menu {
  float: right;
  padding-top: 4vw;
  padding-right: 1vw;
}
.rightMenu {
  position: fixed;
  top: 14vw;
  right: 0;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.9);
  width: 32vw;
  height: 43vw;
  // overflow: hidden;
  .sanjiao {
    padding: 0;
    width: 3vw;
    height: 3vw;
    left: 27vw;
    top: -1vw;
    position: absolute;
    transform: rotate(45deg);
    background: rgba(0, 0, 0, 0.9);
  }
  > div {
    padding: 1vw 2vw 1vw 2vw;
    flex: 1;
    width: 100%;
    text-align: left;
    i {
      margin-right: 2vw;
    }
    a {
      color: #fff;
    }
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.2);
  }
}
</style>