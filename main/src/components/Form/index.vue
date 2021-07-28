<template>
  <form-create
    :rule="data.rule"
    v-model="data.fApi"
    :option="defaultOptions"
    @change="change"
  />
</template>

<script>
export default {
  name: "MainIndex",
  props: {
    data: {
      default: () => ({}),
    },
  },
  data() {
    return {
      defaultOptions: {
        submitBtn: false,
        resetBtn: false,
      },
    };
  },
  watch: {
    data:{
      handler(val){
        console.log(`val`, val)
      },
      deep:true
    }
  },
  mounted() {
    console.log(`rule`, this.data);
  },

  methods: {
    change(e, v) {
      console.log(`e`, e);
      console.log(`v`, v);
      console.log(`this.data`, this.data);
      const data = this.data;
      data.values[e] = v;
      this.$emit("onchange", data);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>