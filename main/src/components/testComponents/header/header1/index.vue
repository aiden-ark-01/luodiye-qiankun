<template>
  <div>
    <p>{{ values.header1[0].title || values.header1[0].title }}</p>
    <p>{{ values.header1[0].subtitle || values.header1[0].title }}</p>
  </div>
</template>

<script>
export default {
  name: "header1",
  props: {
    values: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {},

  directives: {},

  data() {
    return {
      defaultValues: {
        header1: [
          {
            title: "奥术大师多",
            subtitle: "阿萨德按时",
          },
        ],
      },
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
</style>