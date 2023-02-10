<template>
  <div class="search-box">
    <!--  位置  -->
    <div class="location">
      <div class="city-name">广州</div>
      <div class="self-city">
        <span class="text">我的位置</span>
        <img alt="定位" src="@/assets/img/home/icon_location.png" />
      </div>
    </div>

    <!--  日期范围  -->
    <div class="date-box">
      <div class="start-time flex1">
        <span>入住</span>
        <span class="eli">time</span>
      </div>
      <div class="result flex1">共1晚</div>
      <div class="end-time flex1">
        <span>离店</span>
        <span class="eli">time</span>
      </div>
    </div>

    <!-- 价格不限、人数不限  -->
    <div class="detail-info">
      <div class="price cus-width">
        <van-field
          v-model="state.price"
          placeholder="价格不变"
          class="noPaddingLeft noPaddingRight"
        />
      </div>
      <div class="person-count cus-width">
        <van-field
          input-align="right"
          v-model="state.personCount"
          placeholder="人数不限"
          class="noPaddingLeft noPaddingRight"
        />
      </div>
    </div>

    <van-field
      v-model="state.address"
      placeholder="关键字/位置/名宿命"
      class="noPaddingLeft noPaddingRight"
    />

    <!--    城市-->
    <div class="city-block">
      <span
        @click="handleClick(item)"
        class="address-item"
        :style="{
          color: item.tagText.color,
          background: item.tagText.background.color,
        }"
        v-for="(item, index) in hotSuggests"
        :key="index"
        >{{ item.tagText.text }}</span
      >
    </div>

    <!--  开始搜索  -->
    <van-button round type="warning">开始搜索</van-button>
  </div>

  <!--  滚动菜单  -->
  <div class="scroll-wrapper" ref="scrollRef">
    <div class="scroll-content">
      <div v-for="item in categories" :key="item.id" class="content-item">
        <img :src="item.pictureUrl" alt="类型" />
        <div class="text">{{ item.title }}</div>
      </div>
    </div>
  </div>

  <!--  热门精选-->
  <div class="hot-select">
    <div class="hot-title">热门精选</div>
    <div class="all-select"></div>
  </div>
</template>

<script lang="ts">
import BScroll from "@better-scroll/core";
import { defineComponent, onMounted, ref, nextTick } from "vue";
import { storeToRefs } from "pinia";
import { useHomeStore } from "@/stores";

export default defineComponent({
  setup() {
    const homeStore = useHomeStore();
    const scrollRef = ref(null);
    const state = ref({
      keyworld: null,
      price: null,
      personCount: null,
      address: null,
    });
    // 热门地点、图片滚动导航
    const { hotSuggests, categories } = storeToRefs(homeStore);

    const handleClick = function (item) {
      console.log(item);
    };

    onMounted(() => {
      nextTick(() => {
        new BScroll(".scroll-wrapper", { scrollX: true, probeType: 3 });
      });
    });

    return {
      state,
      hotSuggests,
      handleClick,
      categories,
      scrollRef,
    };
  },
});
</script>

<style lang="less" scoped>
.search-box {
  padding: 0 20px 20px 20px;
  display: flex;
  flex-direction: column;

  .location {
    display: flex;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    color: #999999;

    .city-name {
      width: 100px;
    }

    .self-city {
      display: flex;
      align-items: center;

      img {
        margin-left: 10px;
        width: 20px;
        height: 20px;
      }
    }
  }

  .date-box {
    display: flex;
    height: 50px;
    justify-content: space-between;
    font-size: 14px;
    color: #999999;

    .start-time {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      & span:nth-child(2) {
        font-size: 20px;
        color: #000;
      }
    }

    .result {
      text-align: center;
      height: 100%;
      line-height: 50px;
    }

    .end-time {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-between;

      & span:nth-child(2) {
        font-size: 20px;
        color: #000;
      }
    }
  }

  .detail-info {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .cus-width {
      width: 33.333333%;
    }
  }

  .city-block {
    padding: 10px 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    font-size: 10px;
    color: #999999;

    .address-item {
      margin-bottom: 10px;
      margin-right: 15px;
      padding: 4px 4px;
      border-radius: 8px;
      white-space: nowrap;
    }
  }
}

.scroll-wrapper {
  position: relative;
  width: 100%;
  padding-left: 20px;
  overflow: hidden;
  white-space: nowrap;

  .scroll-content {
    display: inline-block;

    .content-item {
      margin-right: 33px;
      display: inline-block;
      font-size: 10px;
      color: #999999;
      text-align: center;

      img {
        width: 32px;
      }
    }
  }
}
.hot-select {
  padding: 40px 20px 0 20px;
  .hot-title {
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
