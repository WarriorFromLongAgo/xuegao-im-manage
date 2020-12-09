import Vue from "vue";
import Vuex from "vuex";
import DataAction from "@/router/dataAction"
import { IAboutState } from "@/store/module/about"
// import { IUserState } from "@/store/module/about"

Vue.use(Vuex)

export default new Vuex.Store<IRootState>({
    // 全局的变量
    // state: {
        // isShow: false,
        // dataAction: new DataAction()
    // },
    // mutations: {
    // },
    // actions: {
    // },
    // modules: {
    // }
    
});

interface IRootState {
    about: IAboutState;
    // user: IUserState;
}