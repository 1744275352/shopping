<template>
  <div class="work">
    <h1>打工房</h1>
    <p>你现在有{{ userStore.money }}元</p>
    <button @click="addMoney">打工</button>
  </div>
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
  methods: {
    addMoney() {
      this.userStore.payoff();
    },
  },
};
</script>

<style scoped>
.work {
  text-align: center;
}
</style>
