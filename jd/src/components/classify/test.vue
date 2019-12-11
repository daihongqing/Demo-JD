<template>
  <div class="box">
    <div v-for="i in data[0]" :key="i.id" class="allBox">
      <h4 class="title">{{i.title}}</h4>
      <ul>
        <router-link to>
          <li v-for="item in i.children" :key="item.describe" class="imgBox">
            <img :src="item.pic_url" alt />
            <i class="test">{{item.describe}}</i>
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
  props: ["data"],
  data() {
    return {};
  },
  created() {
    console.log(this.data);
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