<template>
    <header class="row">
        <nav class="navbar navbar-toggleable-md navbar-light">
            <a href="/" class="navbar-brand">Pizza Planet</a>
            <ul class="navbar-nav flex-row">
                <li class="nav-item">
                    <router-link to="/" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/menu" class="nav-link">Menu</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {};
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
