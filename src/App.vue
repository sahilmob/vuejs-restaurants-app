<template>
  <div id="app">
    <div class="container">
      <pp-header> </pp-header>
      <router-view></router-view>
      <pp-footer></pp-footer>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  components: {
    ppHeader: Header,
    ppFooter: Footer
  }
};
</script>

<style>
</style>
