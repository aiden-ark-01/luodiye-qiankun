<template>
  <div class="asdasd">
    <div class="header">
      <component :is="componentsOptions.components.header" v-if="!isLoading" />
    </div>
  </div>
</template>

<script>
import { ComponentsOptions } from "@/utils";
export default {
  name: "VueAppIndex",
  components: {},

  directives: {},

  data() {
    return {
      componentsOptions: new ComponentsOptions({
        header: "header1",
      }),
    };
  },

  computed: {
    isLoading() {
      const isLoading = this.componentsOptions.isLoading;
      return isLoading;
    },
  },
  mounted() {
    this.componentsOptions.setOptions();
  },

  methods: {},
};
</script>

<style lang="less" scoped>
</style>