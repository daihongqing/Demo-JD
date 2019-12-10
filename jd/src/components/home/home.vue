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
        <van-swipe-item v-for="item in homeSlideList" :key="item.id">
          <img :src="item.pic" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 轮播图方格子 -->
    <van-swipe indicator-color="red">
      <van-swipe-item>
        <van-grid :border="false" icon-size="45.6"   :column-num="5">
          <van-grid-item
            v-for="value in 10"
            :key="value"
            icon="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png.webp"
            text="京东超市"
          ></van-grid-item>
        </van-grid>
      </van-swipe-item>
      <van-swipe-item>
        <van-grid :border="false" icon-size="45.6"  :column-num="5">
          <van-grid-item
            v-for="value in 10"
            :key="value"
            icon="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png.webp"
            text="京东超市"
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
            <li>
              <img
                src="https://img14.360buyimg.com/n1/s150x150_jfs/t1/50389/36/7786/321540/5d561738Ede7970e2/81f0bb0f1d51264e.jpg.dpg"
                alt
              />
              <span style="color:red; font-size: 16px; font-weight: 600; ">￥250</span>
              <span style="color:#999;text-decoration:line-through;">￥360</span>
            </li>
            <li>
              <img
                src="https://img14.360buyimg.com/n1/s150x150_jfs/t1/50389/36/7786/321540/5d561738Ede7970e2/81f0bb0f1d51264e.jpg.dpg"
                alt
              />
              <span>￥250</span>
              <span>￥360</span>
            </li>
            <li>
              <img
                src="https://img14.360buyimg.com/n1/s150x150_jfs/t1/50389/36/7786/321540/5d561738Ede7970e2/81f0bb0f1d51264e.jpg.dpg"
                alt
              />
              <span>￥250</span>
              <span>￥360</span>
            </li>
            <li>
              <img
                src="https://img14.360buyimg.com/n1/s150x150_jfs/t1/50389/36/7786/321540/5d561738Ede7970e2/81f0bb0f1d51264e.jpg.dpg"
                alt
              />
              <span>￥250</span>
              <span>￥360</span>
            </li>
            <li>
              <img
                src="https://img14.360buyimg.com/n1/s150x150_jfs/t1/50389/36/7786/321540/5d561738Ede7970e2/81f0bb0f1d51264e.jpg.dpg"
                alt
              />
              <span>￥250</span>
              <span>￥360</span>
            </li>
            <li>
              <img
                src="https://img14.360buyimg.com/n1/s150x150_jfs/t1/50389/36/7786/321540/5d561738Ede7970e2/81f0bb0f1d51264e.jpg.dpg"
                alt
              />
              <span>￥250</span>
              <span>￥360</span>
            </li>
          </ul>
        </div>
      </div>
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
      <!-- 又一个广告 -->
      <div class="title">
        <img
          src="https://m.360buyimg.com/mobilecms/s750x200_jfs/t1/91992/11/5530/88892/5dee11b7E46e12087/df7ce9f0857e22fc.png!q70.webp"
          alt
        />
      </div>
      <ul class="gird">
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
        <li>
          <img
            src="https://m.360buyimg.com/mobilecms/s184x242_jfs/t1/64334/23/16552/15836/5de0b7fcE54784a89/2774d71def05b8ed.png!q70.jpg.dpg"
            alt
          />
        </li>
      </ul>
      <div class="xiaoyuan">
        <img
          src="https://m.360buyimg.com/mobilecms/s750x80_jfs/t1/104532/40/2146/24646/5dcc2957E83954979/5ec2bb870605dcb3.png!q70.jpg.dpg"
          alt
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import homeSlideList from "@/api/home.js";
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
    console.log(this.homeSlideList);
  },
  computed: {
    ...mapState(["homeSlideList"])
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
    border-bottom-left-radius: 10px;
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

  .tab {
    width: 100%;
    display: flex;
    div {
      flex: 1;
      img {
        width: 100%;
        height: 100%;
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
        padding-top: 4vw;
        display: flex;
        overflow-y: scroll;
        li {
          flex: 1;
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
    .xiaoyuan {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
}
</style>
