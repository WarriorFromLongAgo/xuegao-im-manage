<template>
  <div>
    姓名：{{ userName }} 性别：{{ sex }}--{{ SEX[sex] }} 年龄：{{ age }}
    <button @click="remove(id)">删除</button>
    <button @click="changeAge(id)">修改年龄+1</button>
    <div>
      firstName：
      <input type="text" :value="firstName" @input="onChangeFirstName" />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Emit, Model, Vue } from "vue-property-decorator";
// import { AboutStore } from "@/store/module/about";

enum Sex {
  "未知" = 0,
  "男" = 1,
  "女" = 2,
}

@Component({
  name: "User",
})
export default class User extends Vue {
  SEX: any = Sex;

  @Prop(String)
  id!: string;

  @Prop([String, Number])
  name!: string;

  @Prop(String)
  age!: string;

  @Prop({ type: Number, default: 1 })
  sex!: number;

  get userName(): string {
    return this.name;
  }

  // 向父组件，传递事件
  @Emit("on-remove")
  remove(id: string): string {
    // 会将 111 作为参数，传递
    return id;
  }

  @Emit()
  changeAge(id: string) {
    // 不写事件名称，会改成中划线的形式
    // change-age
    // 可以不写id返回
    return id;
  }

  // v-model传过去之后可能会改变，需要写一个emit事件，
  // 括号里面就是emit事件的方法
  @Model("changeFirstName", { type: String })
  firstName!: string;

  @Emit("changeFirstName")
  onChangeFirstName(e: any) {
    return e.target.value;
  }

  // get 计算属性
  // get count(): number {
  //   return AboutStore.count;
  // }

  // get filterList(): Array<number> {
  //   return AboutStore.filterList;
  // }
}
</script>
