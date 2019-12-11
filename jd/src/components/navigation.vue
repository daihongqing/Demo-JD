<template>
  <div class="jd-header-vertical-shortcut">
    <van-icon name="play" />
    <div>
      <router-link to="/index/home">
        <van-icon class="lt" name="wap-home-o"></van-icon>
        <div>首页</div>
      </router-link>
    </div>
    <div>
      <router-link to="/index/classify">
        <van-icon class="lt" name="apps-o"></van-icon>
        <div>分类搜索</div>
      </router-link>
    </div>
    <div>
      <router-link to="/index/surprise">
        <van-icon class="lt" name="cart-o"></van-icon>
        <div>购物车</div>
      </router-link>
    </div>
    <div>
      <router-link to="/index/shopping">
        <van-icon class="lt" name="user-circle-o"></van-icon>
        <div>我的京东</div>
      </router-link>
    </div>
    <div>
      <router-link to="/index/user">
        <van-icon class="lt" name="todo-list-o"></van-icon>
        <div>浏览足迹</div>
      </router-link>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "navigation",
  data() {
    return {};
  },
  components: {}
};
</script>
<style lang="less">
.jd-header-vertical-shortcut {
  text-align: initial;
  position: absolute;
  top: 53px;
  right: 10px;
  z-index: 1000;
  border-radius: 4px;
  width: 125px;
  background: rgba(0, 0, 0, 0.9);
  .van-icon-play {
    position: absolute;
    top: -11px;
    right: 5px;
    transform: rotate(-90deg);
  }
  > div {
    display: block;
    position: relative;
    margin-left: 40px;
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.2);
    height: 40px;
    line-height: 40px;
    z-index: 1000;
    .lt {
      position: absolute;
      top: 10px;
      font-size: 20px;
      color: #fff;
      left: -30px;
    }
    div{
        color: #fff
    }
  }
}
</style>