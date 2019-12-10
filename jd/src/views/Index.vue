<template>
  <div class="box">
    <div class="content">
      <router-view></router-view>
    </div>
    <nav class="navBox">
      <div>
        <router-link to="/index/home">
          <van-icon name="thumb-circle-o"></van-icon>
          <div>首页</div>
        </router-link>
      </div>
      <div>
        <router-link to="/index/classify">
          <van-icon name="apps-o"></van-icon>
          <div>分类</div>
        </router-link>
      </div>
      <div>
        <router-link to="/index/surprise">
          <img
            src="https://img11.360buyimg.com/jdphoto/jfs/t1/72396/11/16575/24863/5de0f4f5Eeb23ef59/46df2d40dbb361b2.gif"
            style="width:13vw"
            alt
          />
        </router-link>
      </div>
      <div>
        <router-link to="/index/shopping">
          <van-icon name="shopping-cart-o"></van-icon>
          <div>购物车</div>
        </router-link>
      </div>
      <div>
        <router-link to="/index/user">
          <van-icon name="user-o"></van-icon>
          <div>未登录</div>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "home",
  data() {
    return {
      active: 0,
      pathname: window.location.pathname
    };
  },
  created() {
    console.log(this.pathname)
  },
  /* computed: {
    move:function() {
      switch (this.pathname) {
        case '/index/home':
          console.log(qqq)
         return this.active = 0;
          break;

        case '/index/classify':
         return this.active = 1;
          break;
        default:
          console.log(111)
          break;
          
      }
    }
  }, */
  methods: {},
  components: {},
  watch: {
    'this.pathname':function(newVal,oldVal){
      console.log(newVal,oldVal)
      if(newVal==='/index/home'){
        console.log(111)
      }else if(newVal==='/index/classify'){
        console.log(222)
      }
    }
  }
};
</script>
<style lang="less" scoped>
.box {
  padding-bottom: 15vw;
  height: 100%;
}
nav {
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #fff;
  > div {
    flex: 1;
    text-align: center;
    // border-top: 1px #ccc solid;
    padding: 9px;
    > a {
      color: gray;
      width: 100%;
      display: block;
      i {
        font-size: 22px;
      }
      > div {
        font-size: 14px;
      }
    }
    &:nth-child(5) {
      border-right: 0;
    }
    a.router-link-active {
      color: red;
    }
  }

}
</style>
