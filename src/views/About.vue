<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ firstName }}</h1>
    <h1>{{ lastName }}</h1>
    <h1>{{ fullName }}</h1>
    <h1></h1>
    <button @click="modifyFullName">修改fullName</button>
    <hr />
    <!-- v-bind  将所有的属性都传输 -->
    <user
      v-for="user in userList"
      :key="user.id"
      v-bind="user"
      @on-remove="removeUser"
      @change-age="changeUserAge"
    >
    </user>
    <hr />
    <!-- <div v-for="user in userList" :key="user.id" v-bind="user">
      {{ user.name }}--{{ user.SEX[user.sex] }}--{{ user.age }}
    </div> -->
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from "vue-property-decorator";
import User from "../components/User.vue";
// 装饰器
// vue-property-decorator
// @Component
// @Watch
// @Prop
// @Model v-model
// @Emit 在自定义组件中，向父组件传递回调函数

// 1,
// @Component({
//   name: 'xuegao about',
//   components:{
//   }
// })
// 2,
// export default{
//   name:"About",
//   data(){
//     return{
//       firstName: "xuegao1"
//     }
//   },
//   computed:{
//      fullName: {
//        get () {
//          return this.firstName + " === " + this.lastName;
//        },
//        set () {
//
//        }
//     }
//   }
// }
@Component({
  components: {
    User,
  },
})
export default class About extends Vue {
  firstName = "xuegao1";
  lastName = "xuegao2";
  userList: Array<IUser> = [
    {
      id: "1",
      name: "张三1",
      age: "10",
      sex: 1,
    },
    {
      id: "2",
      name: "张三2",
      age: "20",
      sex: 2,
    },
    {
      id: "3",
      name: "张三3",
      age: "30",
      sex: 0,
    },
  ];
  get fullName() {
    return this.firstName + " === " + this.lastName;
  }
  set fullName(value) {
    const arr = value.split(" ");
    this.firstName = arr[0];
    this.lastName = arr[1];
  }
  modifyFullName() {
    this.fullName = "xuegaomo xuegaomo";
  }

  @Watch("firstName")
  onFirstNameChange(newVal: any, oldVal: any) {
    console.log(newVal);
    console.log(oldVal);
  }

  // 钩子函数
  created() {
    console.log("this is created");
  }
  mounted() {
    console.log("this is mounted");
  }

  removeUser(id: string) {
    console.log(id);
    console.log(this.userList.findIndex((user) => user.id === id));
    const index: number = this.userList.findIndex((user) => user.id === id);
    this.userList.splice(index, 1);
  }

  changeUserAge(id: string) {
    console.log(id);
    console.log(this.userList.findIndex((user) => user.id === id));
    console.log(this.userList.find((user) => user.id === id));
    const user: IUser =  this.userList.find((user) => user.id === id);
  }
}
interface IUser {
  id: string;
  name: string;
  age: string;
  sex?: number;
}
</script>
