<template>
    <div class="Box">
  
      <van-grid class="qqq" :gutter="1" :column-num="2">
        <van-grid-item v-for="item in homeSlideList[8]['recommend1']" :key="item.id" >
          <van-image :src="item.pic" />
          <div class="info">
            <div class="rec_name">
              <i class="mod_tag">
                <img
                  src="https://img20.360buyimg.com/jdphoto/jfs/t1/97691/14/3984/3386/5de478dcE037aad73/9f582c42b5be2826.png"
                />
              </i>
              {{item.desc}}
            </div>
            <div class="price_info">
              <div class="price">
                ￥
                <em>{{item.price}}</em>
              </div>
            </div>
          </div>
        </van-grid-item>
      
      </van-grid>
   
    </div>
</template>
<script>
// @ is an alias to /src
import { mapState } from "vuex";
export default {
  data() {
    return {
    
    };
  },
  created() {
    this.$store.dispatch("changeSdList");
  },
  methods: {
   
  },
  computed: {
    ...mapState(["homeSlideList"])
  }
};
</script>
<style lang="less">
.qqq {
  background: #eee;
  margin: 0 2vw;
  .van-grid-item {
    padding: 0 3px 2px 0;
    padding: none;
    .van-grid-item__content {
      padding: 15px 15px 0;
      &::after {
        border-width: 0;
      }
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
</style>