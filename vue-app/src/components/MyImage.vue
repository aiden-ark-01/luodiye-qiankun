<template>
  <img :src="url" alt="" v-if="url" />
</template>

<script>
export default {
  name: "VueAppMyimage",
  props: {
    src: {
      type: String,
      default: "",
    },
  },
  data() {
    let url = "";
    if (this.src) {
      url = require(this.src);
    }
    return {
      url,
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>