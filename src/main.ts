import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import DataItem from "./domain/bo/DataItem";

import dataAction from "@/router/dataAction";

Vue.config.productionTip = false;

// 直接在所有的地方，直接运行，只要打开任何网页就直接运行
const newDataItem = new DataItem(1, 1, "content 1");
new dataAction().addData(newDataItem);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
