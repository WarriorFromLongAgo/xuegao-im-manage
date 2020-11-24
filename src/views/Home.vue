<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld
      msg="Welcome to Your Vue.js + TypeScript App"
      v-if="$store.state.isShow"
    /> -->
    <!-- <div v-for="item in memoArr" :key="item.id"> -->
    <!-- {{ item.title }} -->
    <!-- </div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
// import DataItem from "@/domain/bo/DataItem";

// 装饰器写法
@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  // memoArr: Array<DataItem> = this.$store.state.dataAction.memoList;
}
</script>
