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
      <div class="start-time">
        <span>入住</span>
        <span>time</span>
      </div>
      <div class="result">共1晚</div>
      <div class="end-time">
        <span>离店</span>
        <span>time</span>
      </div>
    </div>

    <!--  关键字  -->
    <div class="key-world">
      <van-cell-group inset>
        <van-field v-model="state.keyworld" placeholder="请输入用户名" />
      </van-cell-group>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const state = ref({
      keyworld: null,
    });
    return {
      state,
    };
  },
});
</script>

<style lang="less" scoped></style>
