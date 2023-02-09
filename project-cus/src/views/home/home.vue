<template>
  <div>
    <!-- 头部标题 -->
    <nav-bar title="咕咕"></nav-bar>

    <!-- 图片展示 -->
    <img :src="getBannerImg" alt="banner" class="banner-img" />

    <!-- 搜索相关 -->
    <search-city></search-city>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import navBar from "./navBar/navBar.vue";
import searchCity from "./searchCity/searchCity.vue";
import { getAssetsUrl } from "@/utils/getAssetsUrl";
import { useHomeStore } from "@/stores/index";

export default defineComponent({
  components: { navBar, searchCity },
  setup() {
    const getBannerImg = getAssetsUrl("home/banner.webp");
    const homeStore = useHomeStore();
    homeStore.getHomeHotSuggests();

    return {
      getBannerImg,
    };
  },
});
</script>

<style lang="less" scoped>
.banner-img {
  width: 100%;
  margin-bottom: 10px;
}
</style>
