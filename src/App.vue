<template>
  <div id="app">
    <div class="container">
      <pp-header> </pp-header>
      <pp-home></pp-home>
      <pp-footer></pp-footer>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

export default {
  components: {
    ppHeader: Header,
    ppFooter: Footer,
    ppHome: Home
  }
};
</script>

<style>
</style>
