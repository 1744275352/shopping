<template>
  <h1>欢乐购</h1>
  <p>你有{{ userStore.money }}元,赶紧购物吧~</p>
  <div class="productsList">
    <div v-for="(p, index) of products" :key="index">
      <img :src="p.img" />
      <div class="name">{{ p.name }}</div>
      <div class="bottom">
        <div>价格:{{ p.price }}</div>
        <button :plain="true" v-if="userStore.money >= p.price" @click="buy(p)">
          加入购物车
        </button>
        <div class="out" v-else>余额不足</div>
      </div>
    </div>
  </div>
</template>
<script>
import { products } from "../data/products";
import { useUserStore } from "../stores/user";
import { ElMessage } from "element-plus";

export default {
  data() {
    const userStore = useUserStore();
    return {
      products,
      userStore,
    };
  },
  methods: {
    buy(products) {
      ElMessage({
        message: "加入购物车成功",
        type: "success",
      });
      this.userStore.addToCart(products);
    },
  },
};
</script>

<style scoped>
.productsList {
  width: 700px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.productsList .name {
  text-align: center;
  background: #eeecec;
  font-weight: bold;
  padding: 2px;
}

.productsList img {
  width: 200px;
}

.productsList .bottom {
  display: flex;
  justify-content: space-between;
}

.productsList .bottom div {
  width: 50%;
  height: 40px;
  line-height: 40px;
  background: #eeecec;
}

.productsList .bottom div:first-child {
  text-align: center;
}

.productsList .bottom button {
  width: 50%;
  border: none;
  background: teal;
  color: #fff;
  outline: none;
  cursor: pointer;
}
.out {
  width: 50%;
  text-align: center;
  background-color: rgb(134, 133, 133) !important;
  color: #fff;
  cursor: not-allowed;
  font-weight: bold;
}
</style>
