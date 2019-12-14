<template>
  <div class="Box">
    <!-- 头部 -->
    <div class="header">
      <van-icon class="lt a" name="arrow-left" size="20px" @click="cl" />
      <div class="miJD">我的京东</div>
      <van-icon class="rt dot" name="ellipsis" size="20px" @click="cli" />
    </div>
    <in v-if="loginState" :value = "userList"></in>
    <unin v-else></unin>
    <navigation v-show="a"></navigation>
  </div>
</template>
<script>
// @ is an alias to /src
import In from "./in";
import Unin from './unin'
import Navigation from "../navigation";
import { getUser } from "@/api/login";
import {mapState} from 'vuex'
export default {
  name: "user",
  data() {
    return {
      a: false,
      userList: {}
    };
  },
  created() {
    getUser().then(data => {
    this.userList = data
    console.log(this.userList);
    
    });
  },
  computed: {
    ...mapState(['loginState'])
  },
  components: {
    in: In,
    unin:Unin,
    navigation: Navigation
  },
  methods: {
    cl() {
      this.$router.back();
    },
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