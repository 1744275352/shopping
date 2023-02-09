import { defineStore } from "pinia";
// import { nextTick } from "vue";
export const useUserStore = defineStore("user", {
  state() {
    return {
      money: 0,
      cart: [],
      order: [],
    };
  },
  getters: {
    // 返回商品总数
    cartamount() {
      return this.cart.length;
    },
    // 订单总数
    ordermount() {
      return this.orders.length;
    },
    // 返回商品总价
    totalPrice() {
      let total = 0;
      this.cart.forEach((item) => {
        total += item.price;
      });
      return total;
    },
  },
  actions: {
    // 打工赚钱
    payoff() {
      this.money += 100;
    },
    // 加入购物车
    addToCart(products) {
      this.cart.push({
        ...products,
        addTime: Date.now(), // 添加购物车的时间
      });
    },
    // 过滤时间前面是否加0
    fillZero(n) {
      if (n < 10) {
        return `0${n}`;
      }
      return n;
    },

    // 格式化时间戳
    formatTimestamp(timestamp) {
      const time = new Date(timestamp);
      // 年
      const year = time.getFullYear();
      // 月
      const month = this.fillZero(time.getMonth() + 1);
      // 日
      const date = this.fillZero(time.getDate());
      // 时
      const hour = this.fillZero(time.getHours());
      // 分
      const minute = this.fillZero(time.getMinutes());
      return `${year}-${month}-${date}-${hour}:${minute}`;
    },
    // 购买
    payment() {
      for (const item of this.cart) {
        const product = {
          name: item.name,
          img: item.img,
          price: item.price,
          paymentTime: Date.now(),
        };
        this.order.unshift({ ...product });
      }
      // 减去价钱
      this.money -= this.totalPrice;
      // 购买后清空购物车;
      this.cart = [];
    },
    // 删除订单
    orderdelete(order) {
      this.order = this.order.filter((item) => {
        return item != order;
      });
    },
  },
  //   开启持久化
  persist: true,
});
