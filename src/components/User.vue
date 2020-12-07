<template>
  <div>
    姓名：{{ userName }} 性别：{{ sex }}--{{ SEX[sex] }} 年龄：{{ age }}
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

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

  get userName() {
    return this.name;
  }
}
</script>
