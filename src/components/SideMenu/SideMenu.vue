<template>
  <div id="SideMenu">
    <div class="mobile-menu-button" @click="toggleMobileMenu">
      <font-awesome-icon icon="fa-solid fa-bars" />
    </div>

    <div class="sidebar" :class="{ 'mobile-open': isMobileMenuOpen }">
      <div class="logo">
        <font-awesome-icon icon="fa-solid fa-earth-americas" />
      </div>
      <router-link to="/" @click="closeMobileMenu">Home</router-link>
      <router-link to="/view1" @click="closeMobileMenu">Vista 1</router-link>
      <router-link to="/view2" @click="closeMobileMenu">Vista 2</router-link>
    </div>
  </div>
</template>

<script>
import SideMenuLogic from '../SideMenu/SideMenuLogic.js';

export default {
  name: 'SideMenu',
  mixins: [SideMenuLogic],
};
</script>

<style scoped>
@import '../SideMenu/SideMenuStyles.css';
</style>