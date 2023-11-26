<template>
  <div id="app">
    <SideMenu />
    <router-view />
  </div>
</template>

<script>
import SideMenu from './components/SideMenu/SideMenu.vue';
export default {
  name: 'App',
  components: {
    SideMenu
}
}
</script>

<style>
#app{
  display: flex;
  flex-direction: row;
  height: 100vh;
}
body{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
