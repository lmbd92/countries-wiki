<template>
    <div id="SideMenu">
        <!-- Side Menu -->
        <div class="sidebar">
          <div class="logo">
            <font-awesome-icon icon="fa-solid fa-earth-americas" />
          </div>
          <router-link to="/">Home</router-link>
          <router-link to="/view1">Vista 1</router-link>
          <router-link to="/view2">Vista 2</router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SideMenu'
}
</script>

<style>
#SideMenu {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 200px;
  background-color: #333;
  color: white;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.logo {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.logo .fa-earth-americas{
  width: 100px;
  margin-bottom: 20px;
  height: auto;
}
.sidebar a {
  display: block;
  padding: 10px;
  color: white;
  text-decoration: none;
  transition: background-color 0.3s;
}

.sidebar a:hover {
  background-color: #555;
}

.main-content {
  flex: 1;
  padding: 20px;
}
</style>