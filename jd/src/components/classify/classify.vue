<template>
  <div>
    <header-div></header-div>
    <div class="text">
      <div class="left">
        <van-sidebar id="leftNav" v-model="activeKey">
          <van-sidebar-item
            v-for=" item in nav"
            :title="item.til"
            :key="item.til"
            @click="change"
            id="navItem"
          ></van-sidebar-item>
        </van-sidebar>
      </div>

      <my-test></my-test>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import test from "./test";
import header from './header'
import {getList} from '@/api/classify.js'
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
  computed: {
    
  },
  created() {
    // this.$store.dispatch('getClassifyList')
    getList().then(data=>{
      if(data.code==0){
        this.nav=data.data[0].title
         console.log(data.data[0].title,1111)
      }
     
    })
  },
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
        let item = document.getElementById("navItem");//每一个导航
        let ul = document.getElementById("leftNav");//最高的div
        let box = document.getElementsByClassName("left")[0];//短的div
        let height = item.offsetHeight;
        let allHeight = box.offsetHeight;
        let ulHeight=ul.offsetHeight
        
        ul.style.transform = `translateY(${-height * index +allHeight/2>=0?0:-height * index +allHeight/2<=-ulHeight+allHeight?-ulHeight+allHeight:-height * index +allHeight/2}px)`;
        console.log(-height * index +allHeight/2,-ulHeight)
        // return change(index)
      });
    }
  },
  components: {
    "my-test": test,
    'header-div':header
  }
};
</script>
<style lang="less" scoped>
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