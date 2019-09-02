<template>
  <!--导航 -->
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a href="#" class="py-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="d-block mx-auto"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
          <line x1="9.69" y1="8" x2="21.17" y2="8" />
          <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
          <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
          <line x1="14.31" y1="16" x2="2.83" y2="16" />
          <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
        </svg>
      </a>
      <a class="navbar-brand" href="/">Pizza点餐系统</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="mobile-nav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">主页</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/menu">菜单</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin">管理</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/personname">关于我们</router-link>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto">
          <li v-if="!isLogin" class="nav-item">
            <router-link class="nav-link" to="/login">登录</router-link>
          </li>
          <li v-if="isLogin && user != null" class="nav-link">{{user.email}}</li>
          <li v-if="isLogin && user != null">
            <a class="nav-link" @click.prevent="logout">[退出]</a>
          </li>

          <li v-if="!isLogin" class="nav-item">
            <router-link class="nav-link" to="/register">注册</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Header",
  computed: mapGetters(["isLogin", "user"]),
  methods: {
    logout() {
      localStorage.removeItem("user");
      // vuex状态初始化
      this.$store.dispatch("setIsLoginAsync", false);
      this.$store.dispatch("setProfileAsync", null);
      this.$store.dispatch("setUserAsync", null);
      // 页面跳转
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
</style>
