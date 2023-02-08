export const routes = [
  {
    path: "/",
    component: () => import("@/layout/layout.vue"),
    redirect: "home",
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("../views/home/home.vue"),
        meta: {
          title: "首页",
        },
      },
      {
        path: "favor",
        name: "favor",
        component: () => import("@/views/favor/favor.vue"),
        meta: {
          title: "收藏",
        },
      },
      {
        path: "message",
        name: "message",
        component: () => import("@/views/message/message.vue"),
        meta: {
          title: "消息",
        },
      },
      {
        path: "order",
        name: "order",
        component: () => import("@/views/order/order.vue"),
        meta: {
          title: "订单",
        },
      },
    ],
  },
];
