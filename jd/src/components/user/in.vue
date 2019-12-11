<template>
  <div class="Box">
    <!-- 用户 -->
    <div class="my_header">
      <div class="my_header1">
        <div class="user_info">
          <div class="info">
            <img src="../../assets/head.png" alt />
          </div>
        </div>
        <div class="personal_wrap">
          <div class="name_wrap" @click="showPopup">
            <span class="my_header_name">{{nam}}</span>
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
      <!-- 账号管理 -->
      <div class="account_wrap">
          <div class="account_wrap_content" @click="cli">
            <span class="account-icon"></span>账号管理
          </div>
      </div>
      <!-- 特惠 -->
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
    <!-- 弹框 -->
    <van-popup v-model="show">
      <div class="my_alert fixed">
        <div class="my_alert_title">编辑京东账号信息</div>
        <div class="my_alert_input type_disabled">
          <div class="my_alert_input_label">用户名</div>
          <div class="user_name">jd_4572477b343e7</div>
        </div>
        <div class="my_alert_input_text">用户名不可修改</div>
        <div class="my_alert_input my_alert_nickname_input">
          <div for="nickname" class="my_alert_input_label">昵称</div>
          <input id="nickName" name type="text" maxlength="140" placeholder v-model="age" />
        </div>
        <div hidden="hidden" class="my_alert_input_text type_alert nick_name_point">此昵称已被其他用户抢注，请修改</div>
        <div class="my_alert_input_text">4-20个字符，可由中英文、数字、"-"、"_" 组成</div>
        <div class="my_alert_btns">
          <div class="my_alert_btn" @click="showBtn">取消</div>
          <div class="my_alert_btn color_red" @click="kd">保存</div>
        </div>
      </div>
    </van-popup>
    <!-- 订单 -->
    <van-grid :border="false" class="aa">
      <van-grid-item
        icon="https://img11.360buyimg.com/jdphoto/s40x40_jfs/t14911/113/1615678148/168/7734f24f/5a53578eN0e2811b6.png"
        text="待付款"
      />
      <van-grid-item
        icon="https://img11.360buyimg.com/jdphoto/s40x40_jfs/t14608/2/1636876268/266/b4ebb3f2/5a535791N627c296c.png"
        text="待收货"
      />
      <van-grid-item
        icon="https://img11.360buyimg.com/jdphoto/s40x40_jfs/t15049/345/1573771240/492/7ef15694/5a5357eaNab882dcb.png"
        text="退换/售后"
      />
      <van-grid-item
        icon="https://img30.360buyimg.com/jdphoto/jfs/t14953/346/2113764063/185/1a1dcd24/5a6d7b8bN8431ea1a.png"
        style="color:#ff0000"
        text="全部订单"
      />
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
          <van-icon
            name="https://img11.360buyimg.com/jdphoto/s40x40_jfs/t20329/11/1228908740/243/73a7934c/5b235f37Ne85fdb85.png"
            size="20px"
            style="position: relative;
    top: 3px;"
          />
        </div>
        <span class="assets_item_key">我的资产</span>
      </van-grid-item>
    </van-grid>
    <!-- 收藏 -->
    <van-grid class="cc" :border="false" :column-num="3">
      <van-grid-item>
        <span class="store_val">0</span>
        <span class="assets_item_key">我的收藏</span>
      </van-grid-item>
      <van-grid-item>
        <span class="store_val">0</span>
        <span class="assets_item_key">店铺收藏</span>
      </van-grid-item>
      <van-grid-item>
        <span class="store_val">0</span>
        <span class="assets_item_key">我的足迹</span>
      </van-grid-item>
    </van-grid>
    <!-- 小应用 -->
    <van-grid :border="false" class="aa">
      <van-grid-item
        icon="https://img14.360buyimg.com/jdphoto/jfs/t1/24988/22/12030/2316/5c94d6d4E7cdcf995/c8fe8e84d89685f7.png!q70.webp"
        text="我的预约"
      />
      <van-grid-item
        icon="https://img10.360buyimg.com/jdphoto/jfs/t12931/150/1327543095/1276/e9e67341/5a1e9ee2Nb5baf153.png!q70.webp"
        text="京东车票"
      />
      <van-grid-item
        icon="https://img13.360buyimg.com/jdphoto/jfs/t13612/121/1346421356/1355/9014e74f/5a1e9f1cNab886864.png!q70.webp"
        text="应用推荐"
      />
      <van-grid-item
        icon="https://img30.360buyimg.com/jdphoto/jfs/t12514/60/1318835455/1723/d6ae70f5/5a1e9e39Ndc5e9285.png!q70.webp"
        text="用户福利"
      />
      <van-grid-item
        icon="https://img14.360buyimg.com/jdphoto/jfs/t18940/299/476632277/2164/4453d9e4/5a813897N7c80dea2.png!q70.webp"
        text="京东机票"
      />
      <van-grid-item
        icon="https://img20.360buyimg.com/jdphoto/jfs/t16390/157/2010422417/341/bb4c68c4/5a8138f2Nfd5de7b7.png!q70.webp"
        text="京东酒店"
      />
      <van-grid-item icon text />
      <van-grid-item icon text />
    </van-grid>
    <!-- 服务 -->
    <div class="service">客服服务</div>

    <!-- 分割线 -->
    <van-divider
      class="recomm_mod_title_text"
      :style="{ color: '#999', borderColor: '#ccc', padding: '0 16px'}"
    >
      <span>为您推荐</span>
    </van-divider>
    <!-- 推荐 -->
    <van-grid class="qqq" :gutter="1" :column-num="2">
      <van-grid-item>
        <van-image
          src="https://img14.360buyimg.com/n7/jfs/t1/105414/35/5191/206584/5deb87e0E69b11452/eb6745b0f817e1de.jpg!q70.dpg.webp"
        />
        <div class="info">
          <div class="rec_name">
            <i class="mod_tag">
              <img
                src="https://img20.360buyimg.com/jdphoto/jfs/t1/97691/14/3984/3386/5de478dcE037aad73/9f582c42b5be2826.png"
              />
            </i>
            斯丹澳 折叠沙发床 两用小户型客厅单双人1.5米实木多功能储物布艺简约北欧沙发床两用 100cm*192cm(普通海绵坐垫) 1.8米*2.0米
          </div>
          <div class="price_info">
            <div class="price">
              ￥
              <em>1000</em>
            </div>
          </div>
        </div>
      </van-grid-item>
      <van-grid-item>
        <van-image
          src="https://img14.360buyimg.com/n7/jfs/t1/105414/35/5191/206584/5deb87e0E69b11452/eb6745b0f817e1de.jpg!q70.dpg.webp"
        />
        <div class="info">
          <div class="rec_name">
            <i class="mod_tag">
              <img
                src="https://img20.360buyimg.com/jdphoto/jfs/t1/97691/14/3984/3386/5de478dcE037aad73/9f582c42b5be2826.png"
              />
            </i>
            斯丹澳 折叠沙发床 两用小户型客厅单双人1.5米实木多功能储物布艺简约北欧沙发床两用 100cm*192cm(普通海绵坐垫) 1.8米*2.0米
          </div>
          <div class="price_info">
            <div class="price">
              ￥
              <em>1000</em>
            </div>
          </div>
        </div>
      </van-grid-item>
      <van-grid-item>
        <van-image
          src="https://img14.360buyimg.com/n7/jfs/t1/105414/35/5191/206584/5deb87e0E69b11452/eb6745b0f817e1de.jpg!q70.dpg.webp"
        />
        <div class="info">
          <div class="rec_name">
            <i class="mod_tag">
              <img
                src="https://img20.360buyimg.com/jdphoto/jfs/t1/97691/14/3984/3386/5de478dcE037aad73/9f582c42b5be2826.png"
              />
            </i>
            斯丹澳 折叠沙发床 两用小户型客厅单双人1.5米实木多功能储物布艺简约北欧沙发床两用 100cm*192cm(普通海绵坐垫) 1.8米*2.0米
          </div>
          <div class="price_info">
            <div class="price">
              ￥
              <em>1000</em>
            </div>
          </div>
        </div>
      </van-grid-item>
      <van-grid-item>
        <van-image
          src="https://img14.360buyimg.com/n7/jfs/t1/105414/35/5191/206584/5deb87e0E69b11452/eb6745b0f817e1de.jpg!q70.dpg.webp"
        />
        <div class="info">
          <div class="rec_name">
            <i class="mod_tag">
              <img
                src="https://img20.360buyimg.com/jdphoto/jfs/t1/97691/14/3984/3386/5de478dcE037aad73/9f582c42b5be2826.png"
              />
            </i>
            斯丹澳 折叠沙发床 两用小户型客厅单双人1.5米实木多功能储物布艺简约北欧沙发床两用 100cm*192cm(普通海绵坐垫) 1.8米*2.0米
          </div>
          <div class="price_info">
            <div class="price">
              ￥
              <em>1000</em>
            </div>
          </div>
        </div>
      </van-grid-item>
      <van-grid-item>
        <van-image
          src="https://img14.360buyimg.com/n7/jfs/t1/105414/35/5191/206584/5deb87e0E69b11452/eb6745b0f817e1de.jpg!q70.dpg.webp"
        />
        <div class="info">
          <div class="rec_name">
            <i class="mod_tag">
              <img
                src="https://img20.360buyimg.com/jdphoto/jfs/t1/97691/14/3984/3386/5de478dcE037aad73/9f582c42b5be2826.png"
              />
            </i>
            斯丹澳 折叠沙发床 两用小户型客厅单双人1.5米实木多功能储物布艺简约北欧沙发床两用 100cm*192cm(普通海绵坐垫) 1.8米*2.0米
          </div>
          <div class="price_info">
            <div class="price">
              ￥
              <em>1000</em>
            </div>
          </div>
        </div>
      </van-grid-item>
      <van-grid-item>
        <van-image
          src="https://img14.360buyimg.com/n7/jfs/t1/105414/35/5191/206584/5deb87e0E69b11452/eb6745b0f817e1de.jpg!q70.dpg.webp"
        />
        <div class="info">
          <div class="rec_name">
            <i class="mod_tag">
              <img
                src="https://img20.360buyimg.com/jdphoto/jfs/t1/97691/14/3984/3386/5de478dcE037aad73/9f582c42b5be2826.png"
              />
            </i>
            斯丹澳 折叠沙发床 两用小户型客厅单双人1.5米实木多功能储物布艺简约北欧沙发床两用 100cm*192cm(普通海绵坐垫) 1.8米*2.0米
          </div>
          <div class="price_info">
            <div class="price">
              ￥
              <em>1000</em>
            </div>
          </div>
        </div>
      </van-grid-item>
      <van-grid-item>
        <van-image
          src="https://img14.360buyimg.com/n7/jfs/t1/105414/35/5191/206584/5deb87e0E69b11452/eb6745b0f817e1de.jpg!q70.dpg.webp"
        />
        <div class="info">
          <div class="rec_name">
            <i class="mod_tag">
              <img
                src="https://img20.360buyimg.com/jdphoto/jfs/t1/97691/14/3984/3386/5de478dcE037aad73/9f582c42b5be2826.png"
              />
            </i>
            斯丹澳 折叠沙发床 两用小户型客厅单双人1.5米实木多功能储物布艺简约北欧沙发床两用 100cm*192cm(普通海绵坐垫) 1.8米*2.0米
          </div>
          <div class="price_info">
            <div class="price">
              ￥
              <em>1000</em>
            </div>
          </div>
        </div>
      </van-grid-item>
      <van-grid-item>
        <van-image
          src="https://img14.360buyimg.com/n7/jfs/t1/105414/35/5191/206584/5deb87e0E69b11452/eb6745b0f817e1de.jpg!q70.dpg.webp"
        />
        <div class="info">
          <div class="rec_name">
            <i class="mod_tag">
              <img
                src="https://img20.360buyimg.com/jdphoto/jfs/t1/97691/14/3984/3386/5de478dcE037aad73/9f582c42b5be2826.png"
              />
            </i>
            斯丹澳 折叠沙发床 两用小户型客厅单双人1.5米实木多功能储物布艺简约北欧沙发床两用 100cm*192cm(普通海绵坐垫) 1.8米*2.0米
          </div>
          <div class="price_info">
            <div class="price">
              ￥
              <em>1000</em>
            </div>
          </div>
        </div>
      </van-grid-item>
      <van-grid-item>
        <van-image
          src="https://img14.360buyimg.com/n7/jfs/t1/105414/35/5191/206584/5deb87e0E69b11452/eb6745b0f817e1de.jpg!q70.dpg.webp"
        />
        <div class="info">
          <div class="rec_name">
            <i class="mod_tag">
              <img
                src="https://img20.360buyimg.com/jdphoto/jfs/t1/97691/14/3984/3386/5de478dcE037aad73/9f582c42b5be2826.png"
              />
            </i>
            斯丹澳 折叠沙发床 两用小户型客厅单双人1.5米实木多功能储物布艺简约北欧沙发床两用 100cm*192cm(普通海绵坐垫) 1.8米*2.0米
          </div>
          <div class="price_info">
            <div class="price">
              ￥
              <em>1000</em>
            </div>
          </div>
        </div>
      </van-grid-item>
      <van-grid-item>
        <van-image
          src="https://img14.360buyimg.com/n7/jfs/t1/105414/35/5191/206584/5deb87e0E69b11452/eb6745b0f817e1de.jpg!q70.dpg.webp"
        />
        <div class="info">
          <div class="rec_name">
            <i class="mod_tag">
              <img
                src="https://img20.360buyimg.com/jdphoto/jfs/t1/97691/14/3984/3386/5de478dcE037aad73/9f582c42b5be2826.png"
              />
            </i>
            斯丹澳 折叠沙发床 两用小户型客厅单双人1.5米实木多功能储物布艺简约北欧沙发床两用 100cm*192cm(普通海绵坐垫) 1.8米*2.0米
          </div>
          <div class="price_info">
            <div class="price">
              ￥
              <em>1000</em>
            </div>
          </div>
        </div>
      </van-grid-item>
    </van-grid>

    <!-- 底部 -->
    <div class="m-common-footer">
      <ul class="common-links">
        <li>
          <a href>jd_4572477b343e7</a>
        </li>
        <li>
          <a href>退出</a>
        </li>
        <li>
          <a href>客户服务</a>
        </li>
        <li>
          <a href style="border-right: 1px solid transparent">返回顶部</a>
        </li>
      </ul>
      <ul class="common-icons">
        <li>
          <a href>
            <img
              src="//m.360buyimg.com/mobilecms/jfs/t16423/186/2517573622/5186/75a541f7/5ab1c0deN947bdcba.png"
              alt
            />
          </a>
        </li>
        <li>
          <a href>
            <img
              src="//m.360buyimg.com/mobilecms/jfs/t18550/294/898388074/6574/3a8c5413/5ab0b8e9Ne9c48331.png"
              alt
            />
          </a>
        </li>
        <li>
          <a href>
            <img
              src="//m.360buyimg.com/mobilecms/jfs/t14581/218/2689195961/4696/203b872a/5ab1c0f2N51c3f1bb.png"
              alt
            />
          </a>
        </li>
      </ul>
      <div class="common-copyright">Copyright © 2004-2019 京东JD.com 版权所有</div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Acco from "./acco";
export default {
  name: "user",
  data() {
    return {
      show: false,
      nam: "jd_183317byg",
      age: "jd_183317byg"
    };
  },
  components: {
    acco: Acco
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    showBtn() {
      this.show = false;
    },
    kd() {
      this.nam = this.age;
      this.show = false;
    },
    cli(){
      this.$router.push("acco")
    }
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
  .my_alert {
    .my_alert_title {
      position: relative;
      margin-bottom: 15px;
      height: 45px;
      line-height: 45px;
      text-align: center;
      font-size: 16px;
      font-weight: normal;
      color: #333;
      &::after {
        content: "";
        position: absolute;
        z-index: 1;
        pointer-events: none;
        background-color: #ccc;
        height: 1px;
        left: 0;
        right: 0;
        bottom: 0;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
        -webkit-transform-origin: 50% 100%;
        transform-origin: 50% 100%;
      }
    }
    .type_disabled {
      background-color: #f2f2f7;
    }
    .my_alert_input {
      position: relative;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      margin: 10px 15px;
      height: 45px;
      line-height: 45px;
      font-size: 14px;
      .my_alert_input_label {
        position: relative;
        min-width: 3rem;
        text-align: center;
        color: #999;
        &::after {
          z-index: 1;
          content: "";
          position: absolute;
          pointer-events: none;
          background-color: #ccc;
          width: 1px;
          top: 0;
          bottom: 0;
          right: 0;
          -webkit-transform: scaleX(0.5);
          transform: scaleX(0.5);
          -webkit-transform-origin: 100% 50%;
          transform-origin: 100% 50%;
        }
      }
      .user_name {
        padding-left: 0.5rem;
        color: #999;
      }
      &::after {
        content: "";
        position: absolute;
        z-index: 1;
        pointer-events: none;
        background-color: #ccc;
        border: 1px solid #ddd;
        top: 0;
        left: 0;
        background: none;
        border-color: #ccc;
        right: -100%;
        bottom: -100%;
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
      }
      input {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        padding: 10px;
        border: none;
        color: #333;
        height: 25px;
        line-height: 25px;
        -webkit-appearance: none;
        background-color: transparent;
      }
    }
    .my_alert_input_text {
      margin: 10px 15px 17px;
      font-size: 12px;
      color: #999;
    }
    .my_alert_btns {
      position: relative;
      display: flex;
      .my_alert_btn {
        position: relative;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 16px;
        color: #333;
      }
      .color_red {
        color: #e93b3d;
        &::after {
          content: "";
          position: absolute;
          z-index: 1;
          pointer-events: none;
          background-color: #ccc;
          width: 1px;
          top: 0;
          bottom: 0;
          left: 0;
          -webkit-transform: scaleX(0.5);
          transform: scaleX(0.5);
          -webkit-transform-origin: 0 50%;
          transform-origin: 0 50%;
        }
      }
      &::after {
        content: "";
        position: absolute;
        z-index: 1;
        pointer-events: none;
        background-color: #ccc;
        height: 1px;
        left: 0;
        right: 0;
        top: 0;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
        -webkit-transform-origin: 50% 0;
        transform-origin: 50% 0;
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
    .store_val {
      font-size: 16px;
      font-weight: 700;
      color: #333;
      position: relative;
    }
    .assets_item_key {
      font-size: 12px;
      color: #666;
      line-height: 20px;
      display: block;
    }
  }
  .service {
    position: relative;
    margin: 15px 0;
    background: #fff;
    height: 45px;
    line-height: 45px;
    font-size: 14px;
    padding: 0 10px;
    text-align: initial;
  }
  .recomm_mod_title_text {
    position: relative;
    margin: 15px 0;
    height: 1em;
    line-height: 1em;
    text-align: center;
    font-size: 12px;
    color: #999;
    span {
      z-index: 2;
      position: relative;
      background-color: #f7f7f7;
      &::before,
      &::after {
        content: "";
        position: absolute;
        top: 49%;
        margin-top: -2px;
        width: 4px;
        height: 4px;
        background-color: #ccc;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
      }
      &::before {
        left: -15px;
      }
      &::after {
        right: -15px;
      }
    }
  }
  .qqq {
    .van-grid-item {
      .van-grid-item__content {
        padding: 15px 15px 0;
        .info {
          .rec_name {
            margin: 12px 0 4px;
            font-size: 12px;
            color: #333;
            line-height: 18px;
            height: 36px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            text-align: initial;
            .mod_tag {
              display: inline-block;
              vertical-align: middle;
              height: 14px;
              img {
                display: block;
                height: 100%;
              }
            }
          }
          .price_info {
            width: 100%;
            text-align: initial;
            overflow: hidden;
            .price {
              display: inline-block;
              font-size: 12px;
              color: #e93b3d;
              margin-right: 3px;
              line-height: 20px;
              em {
                font-size: 16px;
                font-style: normal;
              }
            }
          }
        }
      }
    }
  }
  .m-common-footer {
    min-width: 320px;
    margin: 0 auto;
    background-color: #fff;
    .common-links {
      box-sizing: border-box;
      border-bottom: 1px solid #e5e5e5;
      border-top: 1px solid #e5e5e5;
      padding: 4.26667vw 5.33333vw;
      li {
        float: left;
        text-align: center;
        width: 25%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding: 0 5px;
        box-sizing: border-box;
        a {
          position: relative;
          display: block;
          box-sizing: border-box;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: #848689;
          font-size: 3.73333vw;
          padding-top: 3px;
          &::after {
            content: "";
            display: inline-block;
            height: 70%;
            width: 1px;
            background-color: #d7d7d7;
            position: absolute;
            right: 0;
            top: 15%;
          }
        }
      }
      &::after {
        content: "";
        display: table;
        clear: both;
      }
    }
    .common-icons {
      border-bottom: 1px solid #e5e5e5;
      padding: 1.06667vw 2vw;
      li {
        float: left;
        text-align: center;
        width: 33.3333%;
        a {
          display: block;
          width: 100%;
          position: relative;
          img {
            width: 16vw;
            vertical-align: middle;
          }
        }
      }
      &::after {
        content: "";
        display: table;
        clear: both;
      }
    }
    .common-copyright {
      text-align: center;
      color: #848689;
      font-size: 1.86667vw;
      padding: 2vw 0;
    }
  }
}
</style>