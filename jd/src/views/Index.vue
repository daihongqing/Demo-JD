<template>
  <div class="box">
        <div class="content">
          <router-view></router-view>
          </div>
        <nav class="navBox">
         <div>
           <router-link to="/index/home">
              <div>首页</div>
           </router-link>
         </div>
         <div><router-link to="/index/classify">
              <div>分类</div>
           </router-link></div>
         <div><router-link to="/index/surprise">
              <div>京喜</div>
           </router-link></div>
         <div><router-link to="/index/shopping">
              <div>购物车</div>
           </router-link></div>
         <div><router-link to="/index/user">
              <div>未登录</div>
           </router-link></div>
        </nav>
  </div>
    
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
      
  }
}
</script>
<style lang="less" scoped>
  .box{
    padding-bottom: 15vw
  }
  nav{
    width: 100%;
    height: 15vw;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #fff;
    box-shadow: -1px 4px 6px 15px #eee;
    div{
      flex: 1;
      text-align: center;
      line-height: 18vw;
      border-right: 1px #ccc solid;
      &:nth-child(5){
        border-right: 0
      };
    }
  }
</style>
