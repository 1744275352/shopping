<template>
  <router-link class="tip" :to="{ name: 'cart' }"
    >购物车里有{{ userStore.cartamount }}件商品</router-link
  >
</template>

<script>
import { useUserStore } from "../stores/user";
export default {
  data() {
    const userStore = useUserStore();
    return {
      userStore,
    };
  },
};
</script>

<style scoped>
.tip {
  padding: 15px 80px;
  position: fixed;
  bottom: 100px;
  right: 20px;
  text-decoration: none;
  background: rgb(121, 27, 129);
  border-radius: 20px;
  color: #fff;
  font-weight: bold;
}
</style>
