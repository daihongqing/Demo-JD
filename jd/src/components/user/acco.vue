<template>
  <div class="Box">
    <!-- 头部 -->
    <div class="header">
      <van-icon class="lt a" name="arrow-left" size="20px" @click="ck" />
      <div class="miJD">我的京东</div>
      <van-icon class="rt dot" name="ellipsis" size="20px" @click="cli" />
    </div>
    <div class="accountArea">
      <section class="account_section_v2">
        <div class="account_section_title">
          <span class="account_section_title_left">管理我的帐号</span>
        </div>
        <ul class="account_list">
          <li class="account_itemv2 current_account">
            <!--当前登录的图标-->
            <div class="bottom_left_decoration_points"></div>
            <div class="top_right_decoration_points"></div>
            <div class="top_right_decoration_ring"></div>
            <div class="top_right_decoration_circle"></div>
            <div class="current_account_tip">{{loginState?'当前登录':'当前未登录'}}</div>
            <!--END当前登录的图标-->
            <div class="user_info">
              <img
                class="user_avator"
                src="//img11.360buyimg.com/jdphoto/s120x120_jfs/t21160/90/706848746/2813/d1060df5/5b163ef9N4a3d7aa6.png"
              />
              <div class="user_detail">
                <div class="main_detail">
                  <span class="user_name">jd_183317byg</span>
                </div>
                <div class="append_detail">
                  <span class="user_pin">用户名: jd_4572477b343e7</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>

    <ul class="account_manage">
      <li class="item">
        <a href>
          收货地址管理
          <span class="text">创建第一个收货地址</span>
          <van-icon name="arrow" />
        </a>
      </li>
    </ul>

    <ul class="account_manage">
      <li class="item">
        <a href>
          实名认证
          <span class="text">已实名认证</span>
          <van-icon name="arrow" />
        </a>
      </li>
      <li class="item">
        <a href>
          修改手机号
          <span class="text">183*****542</span>
          <van-icon name="arrow" />
        </a>
      </li>
      <li class="item">
        <a href>
          账号登录密码
          <span class="text">定期修改更安全</span>
          <van-icon name="arrow" />
        </a>
      </li>
      <li class="item">
        <a href>
          京东支付密码
          <span class="text">已设置</span>
          <van-icon name="arrow" />
        </a>
      </li>
      <li class="item">
        <a href>
          关联邮箱
          <span class="text">未设置</span>
        </a>
      </li>
      <li class="item">
        <a href>
          关联账号
          <van-icon name="arrow" />
        </a>
      </li>
    </ul>

    <ul class="account_manage">
      <li class="item">
        <a href>
          联系客服
          <span class="text">即时解答用户疑难</span>
          <van-icon name="arrow" />
        </a>
      </li>
      <li class="item">
        <a href>
          切换站点
          <van-icon name="arrow" />
        </a>
      </li>
    </ul>

    <div class="footerNav">
      <a class="logo">
        <img
          src="//img13.360buyimg.com/jdphoto/jfs/t9715/362/323851365/1279/81de6d72/59cc5903N7d14ca0e.png"
          alt
        />意见反馈
      </a>
      <a class="openapp J_ping">
        <img
          src="//img12.360buyimg.com/jdphoto/jfs/t9196/304/2362310772/2730/775aea35/59cc5931Nd495934f.png"
          alt
        />京东客户端
      </a>
      <a class="login_out" @click="login">
        <img
          src="//img10.360buyimg.com/jdphoto/jfs/t9052/339/2338090052/1443/912da0a4/59cc5951N10f8f9b3.png"
          alt
        />
        {{loginState?'退出登录':'请登录'}}
      </a>
    </div>
    <navigation v-show="a"></navigation>
  </div>
</template>
<script>
// @ is an alias to /src
import Navigation from "../navigation";
import { mapState } from "vuex";
export default {
  name: "acco",
  data() {
    return {
      a: false
    };
  },
  components: {
    navigation: Navigation
  },
  methods: {
    ck() {
      this.$router.push("/index/user");
    },
    cli() {
      this.a = !this.a;
    },
    login() {
      localStorage.setItem('token','www')
      this.$store.commit("changeState", { loginState: false });
      this.$router.push("/login");
    }
  },
  computed: {
    ...mapState(["loginState"])
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
      top: 30%;
      left: 8px;
    }
    .miJD {
      height: 12vw;
      line-height: 12vw;
    }
    .dot {
      position: absolute;
      top: 30%;
      right: 8px;
    }
  }
  .accountArea {
    text-align: initial;
    .account_section_v2 {
      background: #fff;
      position: relative;
      padding: 12px 10px 0;
      margin-bottom: 15px;
      .account_section_title {
        color: #333;
        font-size: 16px;
      }
    }
    .account_list {
      list-style: none;
      position: relative;
      margin: 0;
      padding: 2px 0 15px;
      .account_itemv2 {
        color: #999;
        line-height: 1.8em;
        background: #fff9f9;
        border: 1px solid #e93b3d;
        height: 85px;
        padding: 15px;
        position: relative;
        border-radius: 10px;
        min-height: 75px;
        margin-top: 10px;
        box-sizing: border-box;
        overflow: hidden;
        font-size: 12px;
        .top_right_decoration_points {
          position: absolute;
          bottom: 10px;
          right: 40px;
          width: 27px;
          height: 22px;
          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAArBAMAAAAu4Q2VAAAABGdBT…bnya815xLOuikLbrbRmtKaNH+dCRPFG5/mEGdXN9JfJOMQd0IkHMz6oaQhAAAAAElFTkSuQmCC);
          background-size: 27px 22px;
        }
        .top_right_decoration_ring {
          position: absolute;
          bottom: 6px;
          right: 16px;
          width: 13px;
          height: 13px;
          background: transparent;
          border-radius: 100%;
          border: 2px solid #ffa9a9;
          opacity: 0.3;
        }
        .top_right_decoration_circle {
          position: absolute;
          width: 52px;
          height: 52px;
          bottom: -25px;
          right: -23px;
          border-radius: 100%;
          background-color: #ffa9a9;
          opacity: 0.3;
        }
        .current_account_tip {
          position: absolute;
          right: 0;
          top: 0;
          padding: 1px 10px;
          background-color: #ffe4e4;
          color: #e2231a;
          border-top-right-radius: 10px;
          border-bottom-left-radius: 10px;
        }
        .user_info {
          width: auto;
          align-items: center;
          display: flex;
          -webkit-box-align: center;
          .user_avator {
            width: 45px;
            height: 45px;
            margin-right: 10px;
            border-radius: 100%;
          }
          .user_detail {
            .main_detail {
              padding: 4px 0 1px;
              margin-bottom: 2px;
              .user_name {
                color: #333;
                margin-right: 5px;
              }
            }
            .append_detail {
              .user_pin {
                color: #333;
                margin-top: -2px;
                opacity: 0.7;
              }
            }
          }
        }
      }
    }
  }
  .account_manage {
    text-align: initial;
    position: relative;
    margin-bottom: 15px;
    background: #fff;
    .item {
      a {
        display: block;
        position: relative;
        height: 44px;
        line-height: 44px;
        margin-left: 10px;
        padding-right: 27px;
        font-size: 16px;
        color: #333;
        .text {
          font-size: 12px;
          color: #999;
          float: right;
        }
        .van-icon {
          position: absolute;
          display: inline-block;
          right: 10px;
          width: 12px;
          color: #999;
          height: 12px;
          top: 35%;
        }
      }
    }
  }
  .footerNav {
    display: flex;
    margin: 10px 0 0;
    .logo,
    .openapp,
    .login_out {
      display: block;
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      flex: 1;
      text-align: center;
      font-size: 12px;
      color: #666;
      margin-left: 10px;
      padding: 6px 0;
      position: relative;
      > img {
        width: 18px;
        height: 18px;
        padding-right: 3px;
        display: inline-block;
        border: 0 none;
        vertical-align: top;
      }
    }
  }
}
</style>