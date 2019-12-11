<template>
  <div class="box">
    <div v-for="i in 4" :key="i" class="allBox">
      <h4 class="title">热门品牌</h4>
      <ul>
        <router-link to>
          <li v-for="i in 10" :key="i" class="imgBox">
            <img
              src="https://img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png"
              alt
            />
            <i class="test">小米</i>
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "test",
  data() {
    return {};
  },
  components: {}
};
</script>
<style lang="less" scoped>
.box {
  width: 79vw;
  float: right;
  //   margin-left: 20vw;
  margin-top: 13vw;
  margin-bottom: 15vw;
  // position: absolute;
  h4 {
    text-align: left;
    padding: 2vw;
  }
  ul {
    float: left;
    padding: 5vw;
    .imgBox {
      margin-right: 7vw;
      width: 16vw;
      height: 24vw;
      float: left;
      &:nth-child(3) {
        margin-right: 0vw;
      }
      img {
        width: 100%;
        height: 16vw;
      }
      .test {
        text-align: center;
        width: 100%;
        height: 5vw;
        line-height: 5vw;
        font-size: 3vw;
      }
    }
  }
}
</style>