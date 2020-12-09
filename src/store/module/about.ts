import { Module, VuexModule, Mutation, Action, getModule } from "vuex-module-decorators";
import store from "@/store/index"


const getList = () => {
    return new Promise<Array<number>>(resolve => {
        setTimeout(() => {
            resolve([1, 2, 3, 4, 5, 6])
        }, 500)
    })
}

@Module({
    name: "about",
    // 动态的模块
    dynamic: true,
    store
})
export default class About extends VuexModule implements IAboutState {
    count = 1;
    // list: Array<number> = [1, 2, 3, 4];
    list: Array<number> = [];

    get filterList(): Array<number> {
        // return this.list;
        // 获取偶数
        return this.list.filter(item => item % 2 === 0);
    }

    @Mutation
    updateCount(payLoad: number): void {
        this.count += payLoad;
    }

    @Mutation
    updateList(payLoad: Array<number>): void {
        this.list = payLoad;
    }

    @Action
    async getList(): Promise<boolean> {
        // 调用一个方法
        // const res = await xxx();
        const res: Array<number> = await getList();
        this.updateList(res);
        return Promise.resolve(true);
    }
}

export interface IAboutState {
    count: number;
    list: Array<number>;
}

// {
//     state: {
//         count: 1,
//             list: [1, 2, 3, 4]
//     }
// }

export const AboutStore = getModule(About)