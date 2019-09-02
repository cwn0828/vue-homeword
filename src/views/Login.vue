<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-md-12 col-lg-12">
        <div class="card">
          <div class="card-body">
            <img src="../assets/logo.png" alt class="mx-auto d-block" />
            <form @submit.prevent="handleSubmit" autocomplete="off" method="post">
              <div class="form-group">
                <label for="email">邮箱</label>
                <input type="email" class="form-control" v-model="users.email" />
              </div>
              <div class="form-group">
                <label for="password">密码</label>
                <input type="password" class="form-control" v-model="users.password" />
              </div>
              <input type="submit" class="btn btn-block btn-success" value="登录" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      users: {
        email: "",
        password: ""
      }
    };
  },
  // 组件内的守卫
  beforeRouteEnter: (to, from, next) => {
    // this.$store.dispatch("setUser",null)
    next(vm => {
      vm.$store.dispatch("setUserAsync", null);
      vm.$store.dispatch("setIsLoginAsync", false);
    });
  },
  methods: {
    handleSubmit() {
      console.log(this.users);
      this.$axios
        .get(
          "https://wd4782151544jfcwop.wilddogio.com/cwnusers.json",
          this.users
        )
        .then(res => {
          // console.log(typeof res.data);
          var loginUsers = [];
          for (let i in res.data) {
            loginUsers.push(res.data[i]);
          }
          console.log(loginUsers);
          if (
            loginUsers.filter(
              item =>
                item.email === this.users.email &&
                item.password === this.users.password
            ) == ""
          ) {
            alert("账号或密码错误");
          } else {
            console.log("成功");
            localStorage.setItem("user", this.users.email);
            this.$store.dispatch("setUserAsync", this.users);

            // 存储isLogin的值到vuex
            this.$store.dispatch("setIsLoginAsync", true);

            this.errors = {};

            // 页面跳转
            this.$router.push("/");
          }
        });
    }
  }
};
</script>
<style scoped>
</style>
