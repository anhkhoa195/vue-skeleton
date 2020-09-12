import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "@fortawesome/fontawesome-free/css/all.css";

// Plugins
import { i18n } from "./plugins/vuei18n";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//style
import "@/styles/index.scss";

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
