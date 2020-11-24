import Vue from "vue";
import Vuex from "vuex";
import DataAction from "@/router/dataAction"

Vue.use(Vuex)

export default new Vuex.Store({
    // 全局的变量
    state: {
        isShow: false,
        dataAction: new DataAction()
    },
    mutations: {

    },
    actions: {

    },
    modules: {

    }
});
