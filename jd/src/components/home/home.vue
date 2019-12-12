<template>
  <div class="homePage">
    <!-- 导航头部 -->
    <header>
      <div>
        <van-icon name="wap-nav" class="lt icon"></van-icon>
      </div>
      <van-search class="choose" label="JD " placeholder="请输入搜索关键词" v-model="value"></van-search>
      <div class="rt">登录</div>
    </header>
    <div class="mask"></div>
    <!-- 轮播图 -->
    <div class="slide">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in homeSlideList[0]['swiper']" :key="item.id">
          <img :src="item.pic" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 轮播图方格子 -->
    <van-swipe indicator-color="red">
      <van-swipe-item>
        <van-grid :border="false" icon-size="47" :square="true" :column-num="5">
          <van-grid-item
            v-for="i in homeSlideList[1]['card1']"
            :key="i.id"
            :icon="i.pic"
            :text="i.title"
          ></van-grid-item>
        </van-grid>
      </van-swipe-item>
      <van-swipe-item>
        <van-grid :border="false" icon-size="47" :square="true" :column-num="5">
          <van-grid-item
            v-for="i in homeSlideList[2]['card2']"
            :key="i.id"
            :icon="i.pic"
            :text="i.title"
          ></van-grid-item>
        </van-grid>
      </van-swipe-item>
    </van-swipe>
    <!-- 广告 -->
    <div class="tab">
      <div>
        <img
          src="https://m.360buyimg.com/mobilecms/s250x200_jfs/t1/89114/40/4818/77250/5de9bf90E57fc7448/08a206dbfa135965.jpg!q70.jpg.dpg"
          alt
        />
      </div>
      <div>
        <img
          src="https://m.360buyimg.com/mobilecms/jfs/t1/97400/34/4870/76405/5de9bfd8E58cc229b/8ee7725674f5d2df.gif"
          alt
        />
      </div>
      <div>
        <img
          src="https://m.360buyimg.com/mobilecms/s250x200_jfs/t1/104688/13/4870/81159/5de9c020Eaab62bb4/55ebc8e27f17e0bb.jpg!q70.jpg.dpg"
          alt
        />
      </div>
    </div>
    <!-- 带有背景色的部分 -->
    <div class="seckill">
      <!-- 京东秒杀 -->
      <div class="jdSlide">
        <div class="lt">
          <span
            style="font-size: 20px; margin-right: 2vw; font-weight: 700; font-family: monospace;"
          >京东秒杀</span>
          <span style="font-size:15px;  margin-right: 2vw; font-weight: 600;">16点场</span>
          <span style="font-size: 15px;display:inline-block">
            <van-count-down :time="time"></van-count-down>
          </span>
        </div>
        <div class="rt">
          <span style="font-size:16px;color:red; ">
            更多秒杀
            <van-icon name="play"></van-icon>
          </span>
        </div>
        <div class="imgBox">
          <ul>
            <!-- runM -->
            <li v-for="item in homeSlideList[3]['runM']" :key="item.id">
              <img :src="item.pic" alt />
              <span
                style="color:red; font-size: 16px; font-weight: 600;display: block; "
              >{{item.original}}</span>
              <span style="color:#999;text-decoration:line-through;">{{item.present}}</span>
            </li>
          </ul>
        </div>
      </div>
      <!--广告  -->
      <div class="happy">
        <div>
          <img
            src="https://m.360buyimg.com/mobilecms/s376x240_jfs/t1/49601/16/12206/115887/5d91b4d5E34709952/aba2bcb4855e6e52.png!q70.jpg.dpg"
            alt
          />
        </div>
        <div>
          <img
            src="https://m.360buyimg.com/mobilecms/s376x240_jfs/t1/32449/33/15631/174497/5cc2d86bE0289110c/9c53e25651659d43.png!q70.jpg.dpg"
            alt
          />
        </div>
      </div>
      <!--又一个广告  -->
      <div class="title">
        <img
          src="https://m.360buyimg.com/mobilecms/s750x200_jfs/t1/91992/11/5530/88892/5dee11b7E46e12087/df7ce9f0857e22fc.png!q70.webp"
          alt
        />
      </div>
      <!-- 四个框 -->
      <ul class="gird">
        <li class="bg">
          <img
            src="https://m.360buyimg.com/mobilecms/s184x242_jfs/t1/64334/23/16552/15836/5de0b7fcE54784a89/2774d71def05b8ed.png!q70.jpg.dpg"
            alt
          />
        </li>
        <li>
          <img
            src="https://m.360buyimg.com/mobilecms/s184x242_jfs/t1/64334/23/16552/15836/5de0b7fcE54784a89/2774d71def05b8ed.png!q70.jpg.dpg"
            alt
          />
        </li>
        <li>
          <img
            src="https://m.360buyimg.com/mobilecms/s184x242_jfs/t1/64334/23/16552/15836/5de0b7fcE54784a89/2774d71def05b8ed.png!q70.jpg.dpg"
            alt
          />
        </li>
        <li>
          <img
            src="https://m.360buyimg.com/mobilecms/s184x242_jfs/t1/64334/23/16552/15836/5de0b7fcE54784a89/2774d71def05b8ed.png!q70.jpg.dpg"
            alt
          />
        </li>
      </ul>

      <!--东家小院  -->
      <div class="xiaoyuan">
        <img
          src="https://m.360buyimg.com/mobilecms/s750x80_jfs/t1/104532/40/2146/24646/5dcc2957E83954979/5ec2bb870605dcb3.png!q70.jpg.dpg"
          alt
        />
      </div>
      <div class="footerBox">
        <!-- 上面 -->
        <div class="sport">
          <div class="computer" v-for="item in homeSlideList[4]['skill']" :key="item.id">
            <span>
              <h4 class="skil">{{item.fullName}}</h4>
              <span>{{item.firstName}}</span>
            </span>
            <div class="both">
              <img :src="item.pic1" />
              <img :src="item.pic2" />
            </div>
          </div>
        </div>
        <!-- 下面 -->
        <div class="fourthBox">
          <div class="one" v-for="item in homeSlideList[5]['fourth']" :key="item.id">
            <div class="font">
              <span>
                <h4>{{item.fullName}}</h4>
                <span>{{item.firstName}}</span>
              </span>
            </div>
            <div class="imgbox">
              <img :src="item.pic" />
            </div>
          </div>
        </div>
      </div>

      <!-- 每日逛 -->
      <div class="guang">
        <img
          src="https://m.360buyimg.com/mobilecms/s750x80_jfs/t1/83520/33/13546/23804/5dcc2979E64764662/4654df31323ded7c.png!q70.jpg.dpg"
          alt
        />
      </div>
      <div class="bottom">
        <div class="fourthBox">
          <div class="one" v-for="item in homeSlideList[6]['guang']" :key="item.id">
            <div class="font">
              <span>
                <h4>{{item.fullName}}</h4>
                <span>{{item.firstName}}</span>
              </span>
            </div>
            <div class="imgbox">
              <img :src="item.pic" />
            </div>
          </div>
        </div>
        <div class="fourthBox">
          <div class="one" v-for="item in homeSlideList[7]['tao']" :key="item.id">
            <div class="font">
              <span>
                <h4>{{item.fullName}}</h4>
                <span>{{item.firstName}}</span>
              </span>
            </div>
            <div class="imgbox">
              <img :src="item.pic" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 京东快报 -->
    <div class="mainBox">
      <div class="quire">
        <div class="lt">京东快报</div>
        <van-swipe style="height: 5vw;" :autoplay="2000" :show-indicators="false" vertical>
          <van-swipe-item>
            <div>
              <i style="color:red">最新</i>
              <span>联想小新Pro，舒适的视觉体验真不错</span>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <i style="color:red">最热</i>
            <span>联想小新Pro，舒适的视觉体验</span>
          </van-swipe-item>
          <van-swipe-item>
            <i style="color:red">推荐</i>
            <span>联想小新Pro，舒适的视觉体验坚持是都会发生两顿饭了</span>
          </van-swipe-item>
        </van-swipe>
        <div class="rt">更多</div>
      </div>
      <div class="title">
        <img
          src="https://img11.360buyimg.com/jdphoto/jfs/t1/31601/22/15554/14040/5cc2a86fEbdb1098b/88174b36f85283b6.png"
          alt
        />
      </div>
    </div>

    <lazy-component>
      <rec></rec>
    </lazy-component>
  </div>
</template>

<script>
import { mapState } from "vuex";
// import homeSlideList from "@/api/home.js";
import Rec from "../rec";
export default {
  name: "home",
  data() {
    return {
      value: "",
      time: 30 * 60 * 60 * 1000
    };
  },
  created() {
    this.$store.dispatch("changeSdList");
  },
  methods: {},
  computed: {
    ...mapState(["homeSlideList"])
  },
  components: {
    rec: Rec
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" >
.homePage {
  height: 100%;
  > header {
    display: flex;
    position: fixed;
    z-index: 99;
    top: 0;
    width: 100%;
    align-items: center;
    background: orange;
    > div {
      padding: 10px;
      margin: auto;
      text-align: center;
      color: #fff;
      .icon {
        font-size: 7vw;
      }
    }
    .choose {
      background: transparent !important;
    }
    .van-search__content {
      border-radius: 10px;
      width: 62vw;
    }
    .van-search__label {
      color: red;
      font-size: 18px;
      font-weight: 700;
    }
  }
  .mask {
    background: orange;
    height: 40vw;
    border-bottom-right-radius: 10px;
  }
  .slide {
    padding: 10px 10px 0 10px;
    margin-top: -120px;
    > .van-swipe {
      border-radius: 10px;
    }
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
  .van-grid {
    margin: 5px 0 18px 0;
  }
  .tab {
    width: 100%;
    display: flex;
    div {
      flex: 1;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .seckill {
    height: 100%;
    background: orange;
    padding: 4vw;
    > .jdSlide {
      background: #fff;
      width: 100%;
      border-radius: 10px;
      > div {
        flex: 1;
      }
      ul {
        width: 100%;
        padding: 2vw 0;
        display: flex;
        overflow-y: scroll;
        li {
          flex: 1;
          margin-right: 2vw;
          img {
            width: 18.5vw;
          }
        }
      }
    }
    .happy {
      display: flex;
      height: 100%;
      padding: 3vw 0;
      > div {
        flex: 1;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .title {
      width: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .gird {
      width: 100%;
      height: 100%;
      display: flex;
      li {
        flex: 1;
        img {
          width: 100%;
        }
      }
    }
    .footerBox {
      .sport {
        text-align: left;
        display: flex;
        width: 100%;
        .computer {
          flex: 1;
          background: #fff;
          margin-right: 3px;
          padding: 4px;
          span:nth-child(2) {
            font-size: 14px;
          }
          .skil {
            color: transparent;
            background: linear-gradient(90deg, #45caff, #1471fb);
            background-clip: text;
          }
          .both {
            display: flex;
            img {
              flex: 1;
              width: 3vw;
            }
          }
        }
      }
    }
    .fourthBox {
      width: 100%;
      display: flex;
      .one {
        width: 25%;
        flex: 1;
        margin: 1vw 1vw 0 0;
        background: #fff;
        span:nth-child(2) {
          font-size: 13px;
        }
        .imgbox {
          margin: 2vw;
        }
        img {
          width: 100%;
        }
      }
    }
    .xiaoyuan,
    .guang {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
  .mainBox {
    background: #eee;
    .quire {
      overflow: hidden;
      display: flex;
      margin: 0 2vw 2vw 2vw;
      border-radius: 5px;
      background: #fff;
      div {
        width: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        i {
          font-size: 4vw;
          margin-right: 10px;
        }
        span {
          font-size: 3.8vw;
        }
      }
      .van-swipe {
        flex: 1;
      }
    }
    .title {
      display: flex;
      margin: 0 2vw;
      border-bottom: 1px #f0f2f5 solid;
      img {
        flex: 1;
        width: 100%;
      }
    }
   
  }
}
</style>
