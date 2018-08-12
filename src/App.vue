<template>
  <div id="app">
    <div class="container">
      <pp-header> </pp-header>
      <pp-menu></pp-menu>
      <pp-footer></pp-footer>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";

export default {
  components: {
    ppHeader: Header,
    ppFooter: Footer,
    ppHome: Home,
    ppMenu: Menu
  }
};
</script>

<style>
</style>
