<template>
    <div class="country-list">
        <div v-for="country in countries" :key="country.code" class="country-item">
            <img :src="country.image" :alt="country.name" class="country-image" />
            <div class="country-details">
                <h2>{{ country.name }}</h2>
                <p>{{ country.continent }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import countriesQuery from '@/api/countries.graphql';

export default {
    name: 'CountryList',
    data() {
        return {
            countries: [],
        };
    },
    apollo: {
        countries: {
            query: countriesQuery,
            update: (data) => data.countries,
        },
    },
};
</script>

<style scoped>
@import '../CountryList/CountryListStyles.css';
</style>