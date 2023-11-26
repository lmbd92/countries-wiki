/* import { defineComponent } from "vue";
import { useQuery } from "@vue/apollo";
import { countriesQuery } from "@/api/countries";

export default defineComponent({
  data() {
    return {
      countries: [],
    };
  },
  mounted() {
    this.fetchCountries();
  },
  methods: {
    fetchCountries() {
      this.$apollo.query("countries").then((data) => {
        this.countries = data.data.countries;
        this.countries.forEach((country) => {
          country.image = getImage(country);
        });
      });
    },
  },
});

function getImage(country) {
  return `https://pixabay.com/api/?key=YOUR_API_KEY&q=${country.name}&image_type=photo`;
}
 */