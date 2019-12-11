<template>
  <div class="Box">
    <!-- 头部 -->
    <div class="header">
      <van-icon class="lt a" name="arrow-left" size="20px" />
      <div class="miJD">我的京东</div>
      <van-icon class="rt dot" name="ellipsis" size="20px" @click="cli"/>
    </div>
    <in></in>
    <navigation v-show="a"></navigation>
  </div>
</template>
<script>
// @ is an alias to /src
import In from "./in";
import Navigation from '../navigation'
export default {
  name: "user",
  data() {
    return {
      a: false
    };
  },
  components: {
    in: In,
    navigation:Navigation
  },
  methods: {
    cli() {
      this.a = !this.a;
    }
  }
};
</script>
<style lang="less">
.Box {
  background: #f2f3f5;
   
}
</style> 