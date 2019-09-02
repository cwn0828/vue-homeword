<template>
  <div class="container">
    <div>
      <div class="row mb-5">
        <div class="col-4">
          <div class="list-group mb-5">
            <li class="nav-link router-link-exact-active router-link-active">
              <router-link to="/history" class="list-group-item list-group-item-action">历史订单</router-link>
            </li>
            <li class="nav-link">
              <router-link to="/personname" class="list-group-item list-group-item-action">联系我们</router-link>
            </li>
            <li class="nav-link">
              <router-link to="/orderingGuide" class="list-group-item list-group-item-action">点餐文档</router-link>
            </li>
            <li class="nav-link">
              <router-link to="/delivery" class="list-group-item list-group-item-action">快递信息</router-link>
            </li>
          </div>
        </div>
        <div class="col-8">
          <div class="card text-dark bg-light mb-3">
            <div class="card-header">历史订单</div>
            <div class="card-body">
              <h4 class="card-title">历史订单</h4>
              <p class="card-text">27732357@qq.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "history"
};
</script>
<style scoped>
h1,
h2 {
  margin: 6%;
}
</style>
