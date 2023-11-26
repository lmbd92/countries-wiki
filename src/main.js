import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";

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

const apolloClient = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
});
Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

new Vue({
  render: (h) => h(App),
  router,
  apolloProvider,
}).$mount("#app");
