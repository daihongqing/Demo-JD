<template>
  <div class="loginBox">
    <header>
      <div class="lt" @touchend="black">X</div>
      <div class="rt">帮助</div>
    </header>
    <div class="icon-1">
      <img src="../img/1.png" alt />
    </div>
    <div class="account" v-if="isSelect">
      <div class="inpBox">
        <div class="useBox">
          <el-input placeholder="手机号/邮箱/手机号 " v-model="input1" clearable @input="msgFn"></el-input>
        </div>
        <div class="pswBox">
          <el-input placeholder="请输入密码" v-model="input2" show-password clearable @input="msgFn"></el-input>
          <span class="forget">忘记密码</span>
        </div>
      </div>
      <el-button class="btn" :class="{active:flag}" type="danger" round @click="login">登录</el-button>
      <div class="textBox">
        <div class="lt" @click="changeBtn">短信验证码登录</div>
        <router-link to="/create">
          <div class="rt">新用户注册</div>
        </router-link>
      </div>
    </div>
    <div class="account" v-show="!isSelect">
      <div class="inpBox">
        <div class="useBox">
          <span class="forget">中国/地区</span>
          <i></i>
          <span class="forget">中国(+86)</span>
        </div>
        <div class="pswBox">
          <el-input placeholder="请输入手机号" v-model="input2" clearable @input="accountFn"></el-input>
        </div>
      </div>
      <el-button class="btn" :class="{active:flag}" type="danger" round>获取验证码</el-button>
      <div class="textBox">
        <div class="lt" @click="changeBtn">账号密码登录</div>
        <router-link to="/create">
          <div class="rt">新用户注册</div>
        </router-link>
      </div>
    </div>
    <div class="outher">
      <van-divider :style="{ color: '#ccc', borderColor: '#ccc'}">其它登录方式</van-divider>
    </div>
    <div class="footer">
      <div>
        <i class="iconfont icon-weixin"></i>
        <div>微信登录</div>
      </div>
      <div class="QQ">
        <i class="iconfont icon-QQ"></i>
        <div>QQ登录</div>
      </div>
    </div>
    <div class="foot">
      <span>未注册的手机号验证后将自动创建京东账号</span>
      <span>
        登录及代表您已经同意
        <a href>《京东隐私政策》</a>
      </span>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import { changeState } from "@/store/actions";
export default {
  name: "XXX",
  data() {
    return {
      input1: "",
      input2: "",
      flag: false,
      isSelect: true
    };
  },
  methods: {
    msgFn() {
      console.log(this.flag);
      if (this.input1 && this.input2) {
        this.flag = true;
      } else {
        this.flag = false;
      }
    },
    accountFn() {
      if (/^1[3-9]\d{9}$/.test(this.input2)) {
        this.flag = true;
      } else {
        this.flag = false;
      }
    },
    changeBtn() {
      this.isSelect = !this.isSelect;
    },
    black() {
      this.$router.go(-1);
    },
    login() {
      let obj = {
        phone: this.input1,
        password: this.input2
      };
      this.$store.dispatch("changeState", obj);
      
    }
  },
  components: {}
};
</script>
<style lang="less">
.loginBox {
  padding: 5vw;
  header {
    overflow: hidden;
  }
  .icon-1 {
    width: 40vw;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100px;
    }
  }
  .inpBox {
    > div {
      border-bottom: 1px solid #ccc;
    }
    input {
      display: block;
      border: none;
      border-radius: 0;
      height: 18vw;
      margin: auto;
      outline: none;
    }
    .pswBox {
      display: flex;
      input {
        flex: 1;
      }

      .forget {
        width: 30vw;
        text-align: center;
        line-height: 18vw;
        font-size: 4vw;
        color: #606266;
      }
    }
    .useBox {
      display: flex;
      i {
        flex: 1;
      }
      .forget {
        width: 30vw;
        text-align: center;
        line-height: 18vw;
        font-size: 4vw;
        color: #606266;
      }
    }
  }
  .btn {
    width: 80vw;
    margin-top: 8vw;
    height: 13vw;
    background: red;
  }
  .el-button--danger {
    opacity: 0.3;
  }
  .active {
    opacity: 1;
  }
  .textBox {
    margin: 5vw;
    font-size: 3.5vw;
    a {
      color: #606266;
    }
  }
  .outher {
    margin-top: 35vw;
  }
  .footer {
    width: 100%;
    position: fixed;
    display: flex;
    bottom: 12vw;
    left: 0;
    height: 18vw;
    > div {
      flex: 1;
      font-size: 3.5vw;
      i {
        font-size: 8vw;
        font-weight: 400;
        color: rgb(27, 202, 27);
      }
    }
    .QQ {
      i {
        color: rgb(123, 123, 211);
      }
    }
  }
  .foot {
    position: fixed;
    bottom: 1vw;
    height: 10vw;
    > span {
      text-align: center;
      font-size: 3.5vw;
      display: block;
      line-height: 5vw;
      margin-left: 11vw;
      color: #606266;
    }
    a {
      color: rgb(131, 131, 248);
    }
  }
}
</style>
