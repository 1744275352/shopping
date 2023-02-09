<template>
  <div class="navigate">
    <div class="left">
      <router-link :to="{ name: 'home' }">首页</router-link>
    </div>
    <div class="right">
      <div>
        <router-link :to="{ name: 'cart' }">购物车</router-link>
      </div>
      <div>
        <router-link :to="{ name: 'order' }">订单</router-link>
      </div>
      <div>
        <router-link :to="{ name: 'work' }">打工</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navigate {
  display: flex;
  justify-content: space-between;
  max-width: 900px;
  margin: 0 auto;
  align-items: center;
}

.navigate .left {
  padding: 20px;
  font-size: 22px;
  font-weight: bold;
  transition: all 0.5s;
}

.navigate .right {
  display: flex;
  gap: 20px;
  padding: 20px;
}

a {
  text-decoration: none;
  color: black;
}
</style>
