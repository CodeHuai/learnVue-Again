export const routes = [
  {
    path: "/",
    component: () => import("@/layout/layout.vue"),
    redirect: "home",
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("../views/home/home.vue"),
        meta: {
          title: "首页",
        },
      },
      {
        path: "favor",
        name: "Favor",
        component: () => import("@/views/favor/favor.vue"),
        meta: {
          title: "收藏",
        },
      },
      {
        path: "message",
        name: "Message",
        component: () => import("@/views/message/message.vue"),
        meta: {
          title: "消息",
        },
      },
      {
        path: "order",
        name: "Order",
        component: () => import("@/views/order/order.vue"),
        meta: {
          title: "订单",
        },
      },
    ],
  },
];
