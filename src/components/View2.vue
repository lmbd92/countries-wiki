<template>
    <div id="view2-component">
        <h1>View 2</h1>
        <p>Hola! Esta es la vista 2</p>
    </div>
</template>

<script>
export default {
  name: 'View2Component'
}
</script>

<style>
#view2-component{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  font-family: "Roboto", sans-serif;
}
</style>