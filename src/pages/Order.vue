<template>
  <h1>我的订单共有{{ userStore.order.length }}件商品</h1>
  <div
    class="productList"
    v-for="(order, index) of userStore.order"
    :key="index"
  >
    <div class="product">
      <img class="img" :src="order.img" alt="" />
      <div class="product_right">
        <div>产品:{{ order.name }}</div>
        <div>价格:{{ order.price }}</div>
        <div>购买于:{{ userStore.formatTimestamp(order.paymentTime) }}</div>
        <el-popconfirm
          confirm-button-text="是"
          cancel-button-text="否"
          :icon="InfoFilled"
          icon-color="#626AEF"
          title="确认删除吗?"
          @confirm="orderDelete(order)"
          @cancel="cancelEvent"
        >
          <template #reference>
            <el-button>删除</el-button>
          </template>
        </el-popconfirm>
      </div>
    </div>
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
    orderDelete(order) {
      this.userStore.orderdelete(order);
    },
  },
};
</script>

<style scoped>
.img {
  width: 180px;
  border-radius: 10px;
}

.productList {
  display: flex;
  flex-wrap: wrap;
}

.product {
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.product_right {
  text-align: right;
  font-size: 17px;
  line-height: 25px;
}

.product_right button {
  border: none;
  width: 80px;
  height: 30px;
  background: rgb(240, 153, 153);
  cursor: pointer;
}
</style>
