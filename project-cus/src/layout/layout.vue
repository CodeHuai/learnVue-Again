<template>
  <div class="layout-container">
    <router-view></router-view>
    <TabBar></TabBar>
  </div>
</template>

<script lang="ts">
import TabBar from "../components/tabbar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    TabBar,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="less" scoped>
.layout-container {
  position: relative;
  padding-bottom: 100px;
  overflow: hidden;
  overflow-y: auto;
  flex: 1;
}
</style>
