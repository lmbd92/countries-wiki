import Vue from "vue";
import HomeComponent from "./components/Home.vue";
import View1Component from "./components/View1.vue";
import View2Component from "./components/View2.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: HomeComponent },
  { path: "/view1", component: View1Component },
  { path: "/view2", component: View2Component },
];

const router = new VueRouter({
  routes,
});

export default router;
