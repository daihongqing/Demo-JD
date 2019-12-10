<template>
  <div>
    <header>
      <span class="back" @click="back"></span>
      <van-search class="inp" placeholder="搜索商品/店铺" v-model="value" style="width:88vw" />
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
    <div class="text">
      <div class="left">
        <van-sidebar id="leftNav" v-model="activeKey">
          <van-sidebar-item
            v-for=" item in nav"
            :title="item"
            :key="item"
            @click="change"
            id="navItem"
          ></van-sidebar-item>
        </van-sidebar>
      </div>

      <!-- <my-test></my-test> -->
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import test from "./test";
export default {
  name: "XXX",
  data() {
    return {
      activeKey: 0,
      value: "",
      flag: false,
      nav: [
        "热门推荐",
        "手机数码",
        "家用电器",
        "电脑办公",
        "计生情趣",
        "美妆护肤",
        "个护清洁",
        "汽车生活",
        "京东超市",
        "男装",
        "男鞋",
        "女装",
        "女鞋",
        "母音童装",
        "图像音屏",
        "运动户外",
        "内衣配饰",
        "食品生鲜",
        "酒水饮料",
        "家具家装",
        "家具厨具",
        "箱包手袋",
        "钟表珠宝",
        "玩具乐器"
      ],

      index: 0
    };
  },
  created() {},
  computed: {
    // change:function (){
    //   return this.index=this.activeKey
    // }
  },
  mounted() {},
  methods: {
    back() {
      this.$router.push("/index/home");
    },
    hide() {
      this.flag = !this.flag;
    },
    change(index) {
      //  console.log(index);
      this.$nextTick(() => {
        let item=document.getElementById('navItem')
        let nav=document.getElementById('leftNav')
        let left=document.getElementsByClassName('left')[0]
        let  height=item.offsetHeight;
        let allHeight=left.offsetHeight;
        let navHeight=nav.offsetHeight
        let t= allHeight-navHeight;
        let n=1
        // console.log(nav,-height*index)
        nav.style.transform=`translateY(${(height*index>=allHeight/2 ?-height*n++ :0 )}px)`
        console.log(height*index,allHeight/2,n )
        // debugger
        //  left.scrollTop=height*index-1

        // let box = document.getElementById("left");
        // let ul = box.querySelector(".leftNav");
        // debugger
        // let x =( y = 0);
        // box.ontouchstart = function(e) {
        //   this.sx = e.touches[0].pageX;
        //   this.sy = e.touches[0].pageY;
        // };
        // box.ontouchmove = function(e) {
        //   let { pageX, pageY } = e.changedTouches[0];
        //   console.log(pageX - box.sx);
        //   ul.style.transform = `translateY(${x + pageX - box.sx}px)`;
        // };
        // box.ontouchend = function(e) {
        //   let { pageX, pageY } = e.changedTouches[0];
        //   x = x + pageX - box.sx;
        //   y = y + pageY - box.sy;
        // };
      });
    }
  },
  components: {
    "my-test": test
  }
};
</script>
<style lang="less">
header {
  position: fixed;
}

.test {
  width: 100%;
  // display: flex
}
.left {
  float: left;
  width: 21vw;

  position: fixed;
  left: 0;
  top: 11vw;
  height: 86vh;
  // overflow: scroll;
  overflow: hidden;
}
#leftNav {
  // flex: 1
  // overflow: scroll;
  transition: all 0.3s;
  height: 1140px;
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
.inp {
  float: left;
}
</style>