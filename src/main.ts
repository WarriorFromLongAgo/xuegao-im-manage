import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import WrappedResponse from '@/domain/dto/WrappedResponse'
import RequestV1VO from '@/domain/vo/RequestV1VO'

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

