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
    <!-- 用户 -->
    <div class="my_header">
      <div class="my_header1">
        <div class="user_info">
          <div class="info">
            <img src="../../assets/head.png" alt />
          </div>
        </div>
        <div class="personal_wrap">
          <div class="name_wrap">
            <span class="my_header_name">jd_183317byg</span>
            <span class="my_header_name_edit"></span>
            <span class="plus_icon"></span>
          </div>
          <div class="pin">
            <div class="lt">用户名：jd_4572477b343e7</div>
          </div>
          <div class="hor-tips">
            <div class="notice">京享值415</div>
            <div class="notice arrow">小白信用64.6</div>
          </div>
        </div>
      </div>
      <div class="account_wrap">
        <div class="account_wrap_content">
          <span class="account-icon"></span>账号管理
        </div>
      </div>
      <div class="plus_black_wrap">
        <div class="inner">
          <div class="title">
            <div class="plus_title">年卡特惠价</div>
            <div class="plus_subtitle">立即查看</div>
          </div>
          <div class="tip">
            京东PLUS会员
            <span class="keyword">省钱 · 省心 · 尊贵</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 订单 -->
    <van-grid :border="false" class="aa">
      <van-grid-item icon="card" text="待付款" />
      <van-grid-item icon="logistics" text="待收货" />
      <van-grid-item icon="gold-coin" text="退换/售后" />
      <van-grid-item icon="label" style="color:#ff0000" text="全部订单" />
    </van-grid>
    <!-- 资产 -->
    <van-grid :border="false" class="bb" :column-num="5">
      <van-grid-item>
        <div data-v-1e5feae4>
          <span class="assets_val lt">5</span>
          <span class="assets_unit">张</span>
        </div>
        <span class="assets_item_key">京东卷</span>
      </van-grid-item>
      <van-grid-item>
        <span class="openBaitiaoRed">立减40元</span>
        <div data-v-1e5feae4>
          <span class="assets_val lt">aaaa</span>
        </div>
        <span class="assets_item_key">白条</span>
      </van-grid-item>
      <van-grid-item>
        <div data-v-1e5feae4>
          <span class="assets_val lt">0</span>
          <span class="assets_unit">个</span>
        </div>
        <span class="assets_item_key">京豆</span>
      </van-grid-item>
      <van-grid-item>
        <div data-v-1e5feae4>
          <span class="assets_val lt">0</span>
          <span class="assets_unit">元</span>
        </div>
        <span class="assets_item_key">红包</span>
      </van-grid-item>
      <van-grid-item>
        <div data-v-1e5feae4>
          <van-icon name="pending-payment" size="20px" style="position: relative;
    top: 3px;" />
        </div>
        <span class="assets_item_key">我的资产</span>
      </van-grid-item>
    </van-grid>
    <!-- 收藏 -->
    <van-grid class="cc" :border="false" :column-num="3">
      <van-grid-item>
        <span>0</span>
        <span>我的收藏</span>
      </van-grid-item>
      <van-grid-item>
        <span>0</span>
        <span>店铺收藏</span>
      </van-grid-item>
      <van-grid-item>
        <span>0</span>
        <span>我的足迹</span>
      </van-grid-item>
    </van-grid>
    
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "XXX",
  data() {
    return {};
  },
  components: {}
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
  .my_header {
    position: relative;
    overflow: hidden;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 200vw 10vw;
    border-bottom-left-radius: 200vw 10vw;
    box-sizing: border-box;
    min-height: 110px;
    padding-top: 25px;
    background: linear-gradient(90deg, #dd9b4c, #ffd787);
    box-shadow: 0 2px 5px #f8e3c6;
    .my_header1 {
      padding: 0 15px 10px;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      position: relative;
      .user_info {
        position: relative;
        flex-shrink: 0;
        .info {
          width: 60px;
          height: 60px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
          border-radius: 60px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .personal_wrap {
        -webkit-box-flex: 1;
        flex: 1;
        overflow: hidden;
        padding: 0 0 0 15px;
        position: relative;
        .name_wrap {
          font-size: 14px;
          color: #fff;
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          .my_header_name {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .my_header_name_edit {
            flex-shrink: 0;
            margin: 0 0 0 4px;
            width: 12px;
            height: 12px;
            vertical-align: middle;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURUdwTP///////////////////////////////////////////////////////////////8/RimEAAAAQdFJOUwB3a5m4Veb3H6QDji7WgAgChXPEAAAApElEQVQoz3WSSwLDIAhEMUHBtkm4/2mL+Ld1VvGN4gQByGKHgehCxzCKI0lVHCzfsYp85YcsOsp++ZGd4anOaccp3RMnXgpHPbDw4jC4MQ8+apzp0wF2/v4EdYwLQugcQJ3MJQANXJ26pGYYf7WIVEstXEthzzlwvTzH5YVrXPvBa+VpZ1rfmmfisTTR39fUXWvitu37h9o/bRoG+TsMbXxCH58vmgwXoPcjyaAAAAAASUVORK5CYII=);
            background-size: 12px;
          }
          .plus_icon {
            flex-shrink: 0;
            width: 55px;
            height: 15px;
            margin: 0 0 0 10px;
            vertical-align: middle;
            background: url(https://img11.360buyimg.com/jdphoto/s109x30_jfs/t1/42820/29/8699/2820/5d22cc95E23672d4b/7fa5603ffb1b6c14.png);
            background-size: 55px 15px;
          }
        }
        .pin {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.7);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .hor-tips {
          display: flex;
          flex-wrap: wrap;
          -webkit-box-align: center;
          align-items: center;
          .notice {
            max-width: 150px;
            height: 16px;
            line-height: 16px;
            padding: 0 8px;
            margin: 6px 8px 0 0;
            border-radius: 10px;
            font-size: 10px;
            color: #fff;
            background-color: rgba(180, 116, 15, 0.3);
          }
          .arrow {
            position: relative;
            padding-right: 14px !important;
            &::after {
              display: block;
              content: "";
              width: 4px;
              height: 4px;
              border-top: 1px solid rgba(255, 255, 255, 0.7);
              border-left: 1px solid rgba(255, 255, 255, 0.7);
              -webkit-transform-origin: 50%;
              transform-origin: 50%;
              -webkit-transform: rotate(135deg);
              transform: rotate(135deg);
              position: absolute;
              right: 6px;
              top: 5px;
            }
          }
        }
      }
    }
    .account_wrap {
      position: absolute;
      right: 15px;
      top: 0;
      height: 40px;
      line-height: 40px;
      overflow: hidden;
      .account_wrap_content {
        color: rgba(76, 0, 0, 0.7);
        font-size: 12px;
        padding-left: 15px;
        position: relative;
        height: 40px;
        line-height: 40px;
        .account-icon {
          display: inline-block;
          width: 12px;
          height: 12px;
          position: relative;
          top: 2px;
          right: 2px;
          background: url(https://img11.360buyimg.com/jdphoto/s26x26_jfs/t14701/329/1603887827/338/bdda401f/5a53570bN44d2baad.png)
            no-repeat;
          background-position-x: 0px;
          background-position-y: 0px;
          background-size: 100% 100%;
        }
      }
    }
    .plus_black_wrap {
      width: 100%;
      height: 37px;
      box-sizing: border-box;
      padding: 0 20px;
      color: #ffe678;
      font-size: 12px;
      .inner {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 7px 10px 10px;
        background: url(https://img11.360buyimg.com/jdphoto/s710x134_jfs/t1/43463/14/4447/108469/5cd2c002Ee4dcb4c9/445d4efb8eee08e9.png)
          no-repeat left top;
        background-size: 100% 67px;
        .title {
          display: flex;
          -webkit-box-pack: justify;
          justify-content: space-between;
          .plus_title {
            position: relative;
            padding-left: 78px;
            -webkit-box-flex: 1;
            flex: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-align: initial;
            &::before {
              position: absolute;
              content: "";
              width: 57px;
              height: 12px;
              left: 0;
              top: 3px;
              background: url(https://img11.360buyimg.com/jdphoto/s113x21_jfs/t1/44130/31/4355/2489/5cd2d9bdE7fd63a96/155d2b916c3ede73.png)
                no-repeat center;
              background-size: 100% 100%;
            }
            &::after {
              position: absolute;
              content: "";
              width: 1px;
              height: 7px;
              background: #ffe678;
              left: 67px;
              top: 5px;
            }
          }
          .plus_subtitle {
            position: relative;
            padding-right: 10px;
            flex-shrink: 0;
            height: 18px;
          }
        }
        .tip {
          margin-top: 10px;
        }
      }
    }
  }
  .aa {
    line-height: 0;
    margin-top: 15px;
    .van-grid-item__icon {
      font-size: 23px;
      margin-bottom: 10px;
    }
  }
  .bb {
    margin-top: 15px;
    font-size: 10px;
    line-height: 18px;
    height: 100%;
    color: #e93b3d;
    white-space: nowrap;
    .van-grid-item__icon {
      font-size: 23px;
    }
    .openBaitiaoRed {
      position: absolute;
      top: 0;
      left: 27%;
      height: 16px;
      line-height: 16px;
      font-size: 12px;
      padding: 0 8px;
      background: -webkit-linear-gradient(left, #e93b3d, #ff9574);
      border-radius: 8px;
      border-bottom-left-radius: 0;
      -webkit-transform: scale(0.8);
      transform: scale(0.8);
      -webkit-transform-origin: left bottom;
      transform-origin: left bottom;
      white-space: nowrap;
      color: white;
    }
    .van-grid-item {
      position: relative;
      height: 72px;
      box-sizing: border-box;
    }
    .assets_val {
      display: inline;
      font-size: 16px;
    }
    .assets_unit {
      display: inline;
    }
    .assets_item_key {
      display: block;
      font-size: 12px;
      color: #666;
      line-height: 24px;
    }
  }
  .cc {
    line-height: 8vw;
    margin: 15px 0;
  }
}
</style>