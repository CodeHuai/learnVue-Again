<template>
  <div :style="cusStyle" class="navbar-container">
    <slot name="navbar-slot"></slot>
    <span class="navbar-title">{{ titleName }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
    },
    slotStyle: {
      type: Object,
    },
  },
  setup(props) {
    const { title: titleName, slotStyle: cusStyle } = toRefs(props);
    return {
      titleName,
      cusStyle,
    };
  },
});
</script>

<style lang="less" scoped>
.navbar-container {
  height: 50px;
  align-content: center;
  border-bottom: 1px solid #999;
  overflow: hidden;
  background-color: #ffffff;

  .navbar-title {
    width: 100%;
    height: 100%;
    line-height: 50px;
    text-align: center;
    display: inline-block;
    color: #999999;
    font-size: 20px;
  }
}
</style>
