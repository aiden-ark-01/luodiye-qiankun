<template>
  <div>
    micro-app-vue
    <p>
      {{ myToken }}
    </p>
  </div>
</template>

<script>
//基于基本redux的主子应用通讯.,已弃用
import SharedModule from "@/shared";
export default {
  name: "VueAppTest",
  data() {
    return {
      token: "",
    };
  },
  computed: {
    myToken() {
      const shared = SharedModule.getShared();
      return shared.getToken();
    },
  },
  mounted() {
    const shared = SharedModule.getShared();
    const token = shared.getToken();
    this.token = token;
    this.getUserInfo(token);
  },

  methods: {
    async getUserInfo(token) {
      // ApiGetUserInfo 是用于获取用户信息的函数
      this.token = token;
      console.log(`token`, token);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>