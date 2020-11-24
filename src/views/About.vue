<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
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

//   }
// }
@Component
export default class About extends Vue {
  firstName = "xuegao1";
  lastName = "xuegao2";
}
</script>