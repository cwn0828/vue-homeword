<template>
  <div id="app">
    <Header />
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "app",
  components: {
    Header
  }
};
</script>
<style>
</style>
