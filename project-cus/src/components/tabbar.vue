<template>
  <div class="tab-bar">
    <div
      v-for="item in state.tabbarList"
      :key="item.routeName"
      class="tab-bar-item"
      @click="jump(item.routeName)"
    >
      <img
        :alt="item.name"
        :src="
          state.clickFlag === item.routeName
            ? item.imgActiveUrl
            : item.imgInactiveUrl
        "
        class="tab-bar-active-icon"
      />
      <span
        :class="
          state.clickFlag === item.routeName ? 'fontColor' : 'defaultColor'
        "
        >{{ item.name }}</span
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { getAssetsUrl } from "../utils/getAssetsUrl";

export default defineComponent({
  setup() {
    const router = useRouter();
    const state = ref({
      clickFlag: "home",
      tabbarList: [
        {
          routeName: "home",
          name: "首页",
          imgActiveUrl: getAssetsUrl(
            "../assets/img/tabbar/tab_home_active.png"
          ),
          imgInactiveUrl: getAssetsUrl("../assets/img/tabbar/tab_home.png"),
        },
        {
          routeName: "favor",
          name: "收藏",
          imgActiveUrl: getAssetsUrl(
            "../assets/img/tabbar/tab_favor_active.png"
          ),
          imgInactiveUrl: getAssetsUrl("../assets/img/tabbar/tab_favor.png"),
        },
        {
          routeName: "order",
          name: "订单",
          imgActiveUrl: getAssetsUrl(
            "../assets/img/tabbar/tab_order_active.png"
          ),
          imgInactiveUrl: getAssetsUrl("../assets/img/tabbar/tab_order.png"),
        },
        {
          routeName: "message",
          name: "消息",
          imgActiveUrl: getAssetsUrl("../assets/img/tabbar/tab_message.png"),
          imgInactiveUrl: getAssetsUrl("../assets/img/tabbar/tab_message.png"),
        },
      ],
    });

    /**
     * 用于Tabbar的点击跳转
     * @param routeName：对应的路由配置中的组件名称
     */
    const jump = function (routeName) {
      state.value.clickFlag = routeName;
      router.push(routeName);
    };
    return {
      jump,
      state,
    };
  },
});
</script>

<style lang="less" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  overflow: hidden;
  border-top: 1px solid #f45756;
  box-shadow: 0 -1px 2px -1px #f45756;

  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 36px;
    }

    span {
      font-size: 14px;
    }

    .defaultColor {
      color: #999;
    }

    .fontColor {
      color: #f45756;
    }
  }
}
</style>
