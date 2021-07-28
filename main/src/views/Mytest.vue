<template>
  <div>
    <div id="model"></div>
    <p>MyTest</p>
    <p>
      {{token}}
    </p>
    <button @click="btn">按钮</button>
  </div>
</template>

<script>
//测试redux状态管理
import shared from "../shared";
import { loadMicroApp, start } from "qiankun";
export default {
  name: "Qiankundemo1Vue",

  data() {
    return {
      token:''
    };
  },

  mounted() {
    loadMicroApp({
      name: "vue-app",
      entry: "//localhost:10000",
      container: "#model",
      activeRule: "/mytest",
      props: {
        pathName: "Test",
        shared,
        activeRule: "/mytest",
      },
    });
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      start();
    }
    this.test();
  },

  methods: {
    test() {
      shared.setToken("123123");
    },
    btn(){
      shared.setToken("asdasd");
      this.token=shared.getToken()
    }
  },
};
</script>

<style lang="scss" scoped>
</style>