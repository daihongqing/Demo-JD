<template>
  <div >
    <header>
      <span class="back" @click="back"></span>
      <h3>购物车</h3>
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
    </header>
    <main v-if="hide">
      <i>登录后可同步账户购物车中的商品</i>
      <van-button type="danger"  style="width:19vw;height:10vw">登录</van-button>
    </main>
    <section v-if="hide">
        <img src="//img11.360buyimg.com/jdphoto/s180x180_jfs/t18163/292/540553659/74408/adeb7463/5a93c51cN3bb5e37b.png" alt="">
        <p>登录后可同步购物车中商品</p>
    </section>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "XXX",
  data() {
    return {
      flag: false,
      hide:'true'
    };
  },
  methods: {
    back() {},
    hide() {
      this.flag = !this.flag;
    }
  },
  components: {

  }
};
</script>
<style lang="less" scoped>
section{
    width: 100%;
    height: 30vw;
    padding: 20vw;
    img{
        width: 10vw;
        height: 10vw;
    }
}
header{
//   position: fixed;
  width: 100%;
  height: 10vw;
}
main {
  width: 100%;
  height: 13vw;
  line-height: 13vw;
  i{
      font-size:3.5vw;
     margin-right: 3vw;
  }
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
h3 {
  width: 80vw;
  text-align: center;
  float: left;
  padding-top: 4vw;
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