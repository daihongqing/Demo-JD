<template>
  <div>
    <header>
      <span class="back" @click="back"></span>
      <h3>购物车</h3>
      <van-icon @click="hide" name="weapp-nav" class="menu" size="5vw" />
      <div class="rightMenu" v-show="flag">
        <div class="sanjiao"></div>
        <div>
          <router-link to="/index/home">
            <i class="iconfont ic on-yemian-copy-copy1"></i>
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
    <main v-if="hide1">
      <i>登录后可同步账户购物车中的商品</i>
      <van-button type="danger" style="width:19vw;height:10vw">登录</van-button>
    </main>
    <section v-if="hide1">
      <img
        src="//img11.360buyimg.com/jdphoto/s180x180_jfs/t18163/292/540553659/74408/adeb7463/5a93c51cN3bb5e37b.png"
        alt
      />
      <p>登录后可同步购物车中商品</p>
    </section>
    <div class="shop" v-else>
      <van-button @click="c1" class="rt" type="primary" size="small">编辑商品</van-button>
      <van-checkbox class="lt" v-model="checkAll">鸿星尔克官方服饰旗舰店</van-checkbox>
      <!-- <van-checkbox-group v-model="checked"> -->
      <van-checkbox
        v-for="i in ary"
        :key="i.value"
        class="lt"
        style="width:100%"
        :name="i.value"
        v-model="i.ispitch"
      >
        <van-card
          :num="i.num"
          :price="i.money"
          desc="正黑9054，L"
          title="鸿星尔克男短袖2019夏季新品男子圆领t恤针织衫时尚潮流运动T恤男 正黑9054 L"
          thumb="//img10.360buyimg.com/mobilecms/s337x337_jfs/t1/87434/31/5765/212386/5def62a2Ef9ec7875/4fc44b76180023c8.jpg!q70.dpg.webp"
        >
          <div slot="tags">
            <van-tag class="lt" plain type="danger">满300减30</van-tag>
            <van-tag class="lt" plain type="danger">白条3期免息</van-tag>
          </div>
          <div slot="footer">
            <van-stepper v-model="i.num" input-width="40px" button-size="32px" />
          </div>
        </van-card>
      </van-checkbox>

      <van-checkbox class="lt" v-model="checkAll">鸿星尔克官方服饰旗舰店</van-checkbox>
      <!-- <van-checkbox-group v-model="checked"> -->
      <van-checkbox
        v-for="i in ary"
        :key="i.value"
        class="lt"
        style="width:100%"
        :name="i.value"
        v-model="i.ispitch"
      >
        <van-card
          :num="i.num"
          :price="i.money"
          desc="正黑9054，L"
          title="鸿星尔克男短袖2019夏季新品男子圆领t恤针织衫时尚潮流运动T恤男 正黑9054 L"
          thumb="//img10.360buyimg.com/mobilecms/s337x337_jfs/t1/87434/31/5765/212386/5def62a2Ef9ec7875/4fc44b76180023c8.jpg!q70.dpg.webp"
        >
          <div slot="tags">
            <van-tag class="lt" plain type="danger">满300减30</van-tag>
            <van-tag class="lt" plain type="danger">白条3期免息</van-tag>
          </div>
          <div slot="footer">
            <van-stepper v-model="i.num" input-width="40px" button-size="32px" />
          </div>
        </van-card>
      
      </van-checkbox>
      <!-- <van-checkbox name="b">复选框 b</van-checkbox>
      <van-checkbox name="c">复选框 c</van-checkbox>-->
      <!-- </van-checkbox-group> -->
    </div>
    <div class="foot">
      <van-checkbox class="lt" style="margin-top:3vw" checked-color="red" v-model="checkAll">全选</van-checkbox>
      <span>
        总计金额是
        <i>${{total}}</i>
      </span>
      <van-button @click="submit" class="btn" type="danger">去结算</van-button>
    </div>
    <div class="foot foot1" v-show="appear">
      <van-checkbox class="lt" style="margin-top:3vw" checked-color="red" v-model="checkAll">全选</van-checkbox>
      <van-button class="btn" @click="del(i.ispitch)" type="danger">删除</van-button>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "XXX",
  data() {
    return {
      appear: false,
      //   value: "",
      flag: false,
      checked: [],
      hide1: false,
      //   modelu: false,
      //   result: [],
      //   chek: false,
      ary: [
        {
          id: 1,
          value: "ping",
          money: 32,
          ispitch: true
        },
        {
          id: 2,
          value: "ping1",
          money: 32,
          ispitch: false
        },
        {
          id: 3,
          value: "ping2",
          money: 32,
          ispitch: false
        },
        {
          id: 4,
          value: "ping3",
          money: 32,
          ispitch: false
        },
        {
          id: 5,
          value: "ping4",
          money: 32,
          ispitch: false
        },
        {
          id: 6,
          value: "ping5",
          money: 32,
          ispitch: false
        },
        {
          id: 7,
          value: "ping6",
          money: 32,
          ispitch: false
        }
      ]
    };
  },
  computed: {
    checkAll: {
      get() {
        return this.ary.every(item => item.ispitch);
      },
      set(val) {
        this.ary.forEach(item => (item.ispitch = val));
        console.log(this.ary);
      }
    },
    total() {
      return this.ary
        .filter(item => item.ispitch)
        .reduce((p, n) => p + n.num * n.money, 0);
    }
  },
  methods: {
    submit(){
       this.$router.push('/order')
    },
    back() {
      this.$router.back()
    },
    c1() {
      this.appear = !this.appear;
    },
    hide() {
      this.flag = !this.flag;
    },
    del() {
      this.ary = this.ary.filter(item => item.ispitch == false);
    }
  },
  components: {}
};
</script>
<style lang="less" scoped>
.foot {
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 11vw;
  left: 0;
  background: rgba(241, 240, 240, 0.952);
  line-height: 9vw;

  .btn {
    height: 100%;
    width: 26vw;
    float: right;
  }
  > span {
    padding-left: 10vw;
    i {
      color: red;
    }
  }
}
.van-card__price {
  float: left;
}
// .lt{
//  width: 100%;
//   height: 30vw;
//   padding: 8vw;
//   box-sizing: border-box;
//   img {
//     width: 20vw;
//     height: 20vw;
//   }
// }

header {
  //   position: fixed;
  width: 100%;
  height: 10vw;
}
main {
  width: 88%;
  height: 13vw;
  line-height: 13vw;
  i {
    font-size: 3.5vw;
    margin-right: 3vw;
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
h3 {
  width: 80vw;
  text-align: center;
  float: left;
  padding-top: 4vw;
}
.menu {
  float: right;
  padding-top: 4vw;
  padding-right: 1vw;
}
.rightMenu {
  z-index: 999;
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
</style>