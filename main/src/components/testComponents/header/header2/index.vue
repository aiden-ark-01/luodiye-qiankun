<template>
  <div>{{ values.title || defaultValues.title }}</div>
</template>

<script>
export default {
  name: "header2",
  props: {
    values: {
      type: Object,
      default: () => ({
        title: "header2",
      }),
    },
  },
  components: {},
  directives: {},
  data() {
    return {
      defaultValues: {
        title: "header2",
      },
    };
  },

  mounted() {
    console.log(`this.values`, this.values);
  },

  methods: {},
};
</script>

<style lang="less" scoped>
</style>