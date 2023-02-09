<template>
  <Navigate />
  <!-- 路由匹配的组件渲染到这里 -->
  <div class="container">
    <router-view></router-view>
  </div>
  <Tip />
</template>
<script>
import Navigate from "./components/Navigate.vue";
import Tip from "./components/Tip.vue";
export default {
  name: "App",
  components: {
    Navigate,
    Tip,
  },
};
</script>
<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}
</style>
