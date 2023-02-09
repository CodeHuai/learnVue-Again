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

    <!--  关键字  -->
    <!--    <div class="key-world">-->
    <!--      <van-cell-group inset>-->
    <!--        <van-field v-model="state.keyworld" placeholder="请输入用户名" />-->
    <!--      </van-cell-group>-->
    <!--    </div>-->

    <!--    城市-->
    <div class="city-block">
      <span></span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useHomeStore } from "@/stores/index";

export default defineComponent({
  setup() {
    const homeStore = useHomeStore();
    const state = ref({
      keyworld: null,
      hotSuggests: [],
    });
    state.value.hotSuggests = computed(() => homeStore.hotSuggests).value;
    return {
      state,
    };
  },
});
</script>

<style lang="less" scoped>
.search-box {
  padding: 0 20px 10px 20px;
  display: flex;
  flex-direction: column;

  .location {
    display: flex;
    justify-content: space-between;
    height: 40px;
    line-height: 40px;
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
}
</style>
