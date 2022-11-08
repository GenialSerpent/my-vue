import { createApp, VueElement } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";

import "./firebase-config";

Vue.config.productionTip = false;

import "./assets/main.css";

new Vue({
  render: (h) => h(App),
}).$mount("#app");

createApp(App).use(router).use(store).mount("#app");
