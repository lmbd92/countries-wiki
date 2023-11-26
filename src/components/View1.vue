<template>
    <div id="view1-component">
        <h1>View 1</h1>
        <p>Hola! Esta es la vista 1</p>
    </div>
</template>

<script>
export default {
  name: 'View1Component'
}
</script>

<style>
#view1-component {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  font-family: "Roboto", sans-serif;
}
</style>