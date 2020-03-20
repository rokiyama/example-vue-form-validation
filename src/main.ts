import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueCompositionApi from "@vue/composition-api";

Vue.use(VueCompositionApi);

Vue.config.productionTip = process.env.NODE_ENV === "development";

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
