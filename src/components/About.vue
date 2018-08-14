<template>
    <div>
        <nav class="navbar navbar-toggleable-md navbar-light">
            <ul class="navbar-nav flex-row">
                <router-link :to="{name: 'historyLink'}" class="nav-item" tag="li">
                    <a class="nav-link">Our history</a>
                </router-link>
                <router-link :to="{name: 'contactLink'}" class="nav-item" tag="li">
                    <a class="nav-link">Contact us</a>
                </router-link>
                <router-link :to="{name: 'orderingGuideLink'}" class="nav-item" tag="li">
                    <a class="nav-link">Ordering guide</a>
                </router-link>
                <router-link :to="{name: 'deliveryLink'}" class="nav-item" tag="li">
                    <a class="nav-link">Delivery</a>
                </router-link>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {};
</script>

<style>
.nav-item {
  margin: auto 20px;
}
.nav-item:last-of-type {
  margin-right: 0;
}
</style>
