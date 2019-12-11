<template>
  <div class="Box">
    <!-- 头部 -->
    <div class="header">
      <div class="a lt">
        <img src="../../assets/back.png" alt />
      </div>
      <div class="miJD">我的京东</div>
      <div class="dot rt">
        <img src="../../assets/dot.png" alt />
      </div>
    </div>
    <in></in>
  </div>
</template>
<script>
// @ is an alias to /src
import In from "./in";
export default {
  name: "user",
  data() {
    return {};
  },
  components: {
    in: In,
  }
};
</script>
<style lang="less">
.Box {
  background: #f2f3f5;
  .header {
    background: #fff;
    position: relative;
    width: 100%;
    height: 12vw;
    // border-bottom: 1px solid #ccc;
    .a {
      position: absolute;
      //   background: #000;
      width: 11vw;
      height: 12vw;
      img {
        width: 20px;
        height: 20px;
        margin: 12px 0 0 3px;
      }
    }
    .miJD {
      height: 12vw;
      line-height: 12vw;
    }
    .dot {
      overflow: hidden;
      position: absolute;
      top: 0;
      right: 0;
      width: 11vw;
      height: 12vw;
      img {
        display: inline-block;
        margin: 20px 12px 20px 10px;
        width: 20px;
      }
    }
  }
}
</style> 