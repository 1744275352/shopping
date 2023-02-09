import * as VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import Cart from "../pages/Cart.vue";
import Work from "../pages/Work.vue";
import Order from "../pages/Order.vue";
const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
  },
  {
    name: "cart",
    path: "/Cart",
    component: Cart,
  },
  {
    name: "work",
    path: "/Work",
    component: Work,
  },
  {
    name: "order",
    path: "/Order",
    component: Order,
  },
];

const router = VueRouter.createRouter({
  // 使用 HTML5 模式
  history: VueRouter.createWebHistory(),
  routes,
});

export default router;
