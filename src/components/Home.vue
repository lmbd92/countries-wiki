<template>
    <div id="home">
        <h1>Home</h1>
        <p>Esta es la vista Home</p>
        <CountryList/>
    </div>
</template>

<script>
import CountryList from '@/components/CountryList/CountryList.vue';
export default {
  name: 'HomeComponent',
  components: {
    CountryList
  }
}
</script>