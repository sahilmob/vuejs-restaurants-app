<template>
    <footer class="row">
        <nav class="navbar navbar-toggleable-md navbar-light">
            <ul class="navbar-nav flex-row">
                <router-link to="/" class="nav-item" tag="li">
                    <a class="nav-link">Home</a>
                </router-link>
                <router-link to="/about" class="nav-item" tag="li">
                    <a class="nav-link">About</a>
                </router-link>
                <router-link to="/admin" class="nav-item" tag="li">
                    <a class="nav-link">Admin</a>
                </router-link>
            </ul>
        </nav>
    </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  margin: auto;
}
.navbar-nav {
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
