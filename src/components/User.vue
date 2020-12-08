<template>
  <div>
    姓名：{{ userName }} 性别：{{ sex }}--{{ SEX[sex] }} 年龄：{{ age }}
    <button @click="remove(id)">删除</button>
    <button @click="changeAge(id)">修改年龄+1</button>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";

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
}
</script>
