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
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  v-model="newUser.email"
                  :error="errors.email"
                />
              </div>
              <div class="form-group">
                <label for="password">密码</label>
                <input
                  type="password"
                  class="form-control"
                  name="password"
                  v-model="newUser.password"
                  :error="errors.password"
                />
              </div>
              <div class="form-group">
                <label for="confirm-password">确认密码</label>
                <input
                  type="password"
                  class="form-control"
                  name="password2"
                  v-model="newUser.password2"
                  :error="errors.password2"
                />
              </div>
              <input type="submit" class="btn btn-block btn-success" value="注册" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      newUser: {
        email: "",
        password: "",
        password2: ""
      },
      errors: {}
    };
  },
  methods: {
    handleSubmit() {
      // console.log(this.newUser);
      if (this.newUser.password2 != this.newUser.password) {
        alert("两次密码不一致");
      } else {
        this.$axios
          .post(
            "https://wd4782151544jfcwop.wilddogio.com/cwnusers.json",
            this.newUser
          )
          .then(res => {
            this.$store.dispatch("setUserAsync", this.newUser);
            this.errors = {};
            this.$router.push("/login");
          })
          .catch(err => {
            if (err.response.data) {
              this.errors = err.response.data;
              console.log(this.errors);
            }
          });
      }
    }
  }
};
</script>
<style scoped>
</style>
