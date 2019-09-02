<template>
  <div>
    <div class="container">
      <div class="row">
        <div id="home" class="col-sm-12 text-center">
          <div class="background">
            <h1>欢迎大家品尝pizza!</h1>
            <h2>这里有你非常喜欢的pizza!</h2>
            <button class="btn btn-success" @click="ToMenu">Let's order!</button>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <div class="card text-dark bg-light mb-3">
            <div class="card-header">点餐文档</div>
            <div class="card-body">
              <h4 class="card-title">点餐文档</h4>
              <p class="card-text">27732357@qq.com</p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-4">
          <div class="card text-dark bg-light mb-3">
            <div class="card-header">快递信息</div>
            <div class="card-body">
              <h4 class="card-title">快递信息</h4>
              <p class="card-text">27732357@qq.com</p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-4">
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
  name: "landing",
  methods: {
    ToMenu() {
      this.$router.push("/Menu");
    }
  }
};
</script>
<style scoped>
#home {
  background: url(../assets/pizza.jpg);
  height: 85vh;
  padding: 10%;
}
h1,
h2 {
  margin: 6%;
}
.background {
  background: #eee;
  opacity: 0.8;
  max-width: 70vw;
  margin: 0 auto;
  padding: 20px 0;
}
</style>
