<template>
  <div id="app">
    <SideMenu></SideMenu>
  </div>
</template>

<script>
import SideMenu from './components/SideMenu.vue';

export default {
  name: 'App',
  components: {
    SideMenu
}
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
