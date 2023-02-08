<template>
  <van-tabbar v-model="state.clickFlag" route>
    <van-tabbar-item
      v-for="item in state.tabbarList"
      :key="item.routeUrl"
      :name="item.routeUrl"
      :to="item.routeUrl"
      icon="home-o"
      replace
    >
      <template #icon>
        <img
          :alt="item.name"
          :src="
            state.clickFlag === item.routeUrl
              ? item.imgActiveUrl
              : item.imgInactiveUrl
          "
          class="tab-bar-active-icon"
        />
      </template>
      <span
        :class="
          state.clickFlag === item.routeUrl ? 'tarball-text' : 'tarball-default'
        "
        >{{ item.name }}</span
      >
    </van-tabbar-item>
  </van-tabbar>
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
          routeUrl: "home",
          name: "首页",
          imgActiveUrl: getAssetsUrl("tabbar/tab_home_active.png"),
          imgInactiveUrl: getAssetsUrl("tabbar/tab_home.png"),
        },
        {
          routeUrl: "favor",
          name: "收藏",
          imgActiveUrl: getAssetsUrl("tabbar/tab_favor_active.png"),
          imgInactiveUrl: getAssetsUrl("tabbar/tab_favor.png"),
        },
        {
          routeUrl: "order",
          name: "订单",
          imgActiveUrl: getAssetsUrl("tabbar/tab_order_active.png"),
          imgInactiveUrl: getAssetsUrl("tabbar/tab_order.png"),
        },
        {
          routeUrl: "message",
          name: "消息",
          imgActiveUrl: getAssetsUrl("tabbar/tab_message.png"),
          imgInactiveUrl: getAssetsUrl("tabbar/tab_message.png"),
        },
      ],
    });

    /**
     * 用于Tabbar的点击跳转
     * @param routeUrl：对应的路由配置中的组件名称
     */
    const jump = function (routeUrl) {
      state.value.clickFlag = routeUrl;
      router.push(routeUrl);
    };
    return {
      jump,
      state,
    };
  },
});
</script>

<style lang="less" scoped>
.tarball-text {
  color: #f69743;
}

.tarball-default {
  color: #999;
}
</style>
