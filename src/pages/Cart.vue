<template>
  <h1>你的购物车共有{{ userStore.cartamount }}件商品</h1>
  <div class="b">
    <div
      class="productList"
      v-for="(cart, index) in userStore.cart"
      :key="index"
    >
      <div class="product">
        <img class="img" :src="cart.img" />
        <div class="product_right">
          <div>产品:{{ cart.name }}</div>
          <div>价格:{{ cart.price }}</div>
          <div>购买于:{{ userStore.formatTimestamp(cart.addTime) }}</div>
          <el-popconfirm
            confirm-button-text="是"
            cancel-button-text="否"
            :icon="InfoFilled"
            icon-color="#626AEF"
            title="确认删除吗?"
            @confirm="cancel(cart)"
            @cancel="cancelEvent"
          >
            <template #reference>
              <el-button>取消</el-button>
            </template>
          </el-popconfirm>
        </div>
      </div>
    </div>
  </div>
  <div class="footerBox">
    <div class="footer">
      <div class="total">商品总计:{{ userStore.totalPrice }}</div>
      <button v-if="userStore.cart.length == 0" class="not" disabled>
        暂无商品
      </button>
      <button
        v-else-if="userStore.money >= userStore.totalPrice"
        @click="pay"
        class="pay"
      >
        支付
      </button>
      <button v-else class="not" disabled>余额不足</button>
    </div>
  </div>
</template>

<script>
import { useUserStore } from "../stores/user";
import { ElMessage } from "element-plus";
export default {
  data() {
    const userStore = useUserStore();
    return {
      userStore,
    };
  },
  methods: {
    cancel(cart) {
      this.userStore.cart = this.userStore.cart.filter((item) => {
        return item != cart;
      });
    },
    pay() {
      this.userStore.payment();
      ElMessage({
        message: "支付成功",
        type: "success",
      });
      this.userStore.addToCart(products);
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
.img {
  width: 180px;
  border-radius: 10px;
}

.productList {
  display: flex;
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
  list-style: none;
}

.b .productList:last-child {
  margin-bottom: 80px;
}

.footerBox {
  width: 800px;
  position: fixed;
  bottom: 0;
}
.footer {
  width: 100%;
  height: 70px;
  background: rgb(237, 243, 243);
  display: flex;
  justify-content: space-between;
  font-size: 17px;
}
.footer .pay {
  width: 150px;
  border: none;
  cursor: pointer;
  background: rgb(84, 187, 127);
  font-size: 20px;
}

.not {
  width: 150px;
  font-size: 20px;
  list-style: none;
  border: none;
  cursor: no-drop;
  background: rgb(224, 138, 138);
}

.footer .total {
  line-height: 70px;
  margin-left: 20px;
}
</style>
