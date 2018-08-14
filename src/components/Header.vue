<template>
    <header class="row">
        <nav class="navbar navbar-toggleable-md navbar-light">
            <a href="/" class="navbar-brand">Pizza Planet</a>
            <ul class="navbar-nav flex-row">
                <router-link :to="{name: 'homeLink'}" class="nav-item" tag="li">
                    <a class="nav-link">Home</a>
                </router-link>
                <router-link :to="{name: 'menuLink'}" class="nav-item" tag="li">
                    <a class="nav-link">Menu</a>
                </router-link>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
  data() {
    return {
      homeLink: "/",
      menuLink: "/menu"
    };
  }
};
</script>

<style scoped>
header {
  margin-bottom: 20px;
}
.navbar {
  width: 100%;
  padding: 0;
}
.navbar-brand {
  font-size: 1.5em;
  flex-grow: 1;
}
.nav-item {
  margin: auto 20px;
}
.nav-item:last-of-type {
  margin-right: 0;
}
</style>
