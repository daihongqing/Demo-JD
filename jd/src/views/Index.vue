<template>
  <div class="box">
    <div class="content">
      <router-view></router-view>
    </div>
    <nav class="navBox">
      <div>
        <router-link to="/index/home">
          <div >
           <i style="font-size:7vw;
          display:block ; height:7vw" class="iconfont icon-jingdong"></i>
           <span>首页</span>
          </div>
        </router-link>
      </div>
      <div>
        <router-link to="/index/classify">
          <div>
            <i style="font-size:7vw;
             display:block ; height:7vw" class="iconfont icon-fenlei"></i>
           <span>分类</span>
          </div>
        </router-link>
      </div>
      <div>
        <router-link to="/index/surprise">
          <div>
            <img src="../assets/surprise.gif" alt />
          </div>
        </router-link>
      </div>
      <div>
        <router-link to="/shopping">
          <div>
             <i style="font-size:7vw;
             display:block ; height:7vw" class="iconfont icon-cart"></i>
           <span>购物车</span>
          </div>
        </router-link>
      </div>
      <div>
        <router-link to="/index/user">
          <div>
             <i style="font-size:7vw;
             display:block ; height:7vw" class="iconfont icon-mainoff"></i>
           <span>我的</span>
          </div>
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
  },
};
</script>
<style lang="less" scoped>
.box {
  padding-bottom: 15vw;
}
nav {
  width: 100%;
  height: 15vw;
  display: flex;
  position: fixed;
  align-items: center;
  bottom: 0;
  left: 0;
  background: #fff;
  box-shadow: 0 0 10px 0 hsla(0,6%,58%,.6);
  -webkit-box-shadow: 0 0 10px 0 hsla(0,6%,58%,.6);
  div {
    flex: 1;
    text-align: center;
    // line-height: 15vw;
    border-right: 1px #ccc solid;
    
    img {
      width: 100%;
      height: 100%;
    }
    &:nth-child(5) {
      border-right: 0;
    }
  }
  .router-link-active{
    color: red
  }
}
</style>
