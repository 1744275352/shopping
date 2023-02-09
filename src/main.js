import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import pinia from "./pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App);

// 安装element
app.use(ElementPlus);
// 挂载路由
app.use(router);
// 挂载状态共享
app.use(pinia);
app.mount("#app");
