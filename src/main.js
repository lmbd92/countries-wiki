import Vue from "vue";
import App from "./App.vue";
import router from "./router";

/* importing the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* importing font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* importing font awesome specific icons */
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faEarthAmericas, faBars);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
