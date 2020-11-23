import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import DataItem from "./domain/bo/DataItem";

import dataAction from "@/router/dataAction";

Vue.config.productionTip = false;

const newDataItem = new DataItem(1, 1, "content 1");
new dataAction().addData(newDataItem);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
