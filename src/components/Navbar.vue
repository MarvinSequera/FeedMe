<template>
    <b-navbar toggleable="sm" type="dark" variant="info">
        <router-link to="/">
            <img src="../../public/img/Picnic_Basket.png" alt="picnic" />
        </router-link>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-item as router-link to="/">Inicio</b-nav-item>
            <b-nav-item as router-link to="/food">Alimentos</b-nav-item>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>
<script>
export default {
    name: 'Navbar'
}
</script>

<style scope>
  img{
    height: 40px;
  }
</style>
