<template>
  <div flex1 class="header">
    {{ data.values.col24_1 }}
  </div>
</template>

<script>
export default {
  name: "header1",
  props: {
    defaultData: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      data: {
        key: "header",
        modelName: "header1",
        values: {
          col24_1: "我是默认组件",
        },
        // options: {
        //   onSubmit: (formData) => {
        //     alert(JSON.stringify(formData));
        //   },
        // },
        rule: [
          {
            type: "input",
            title: "标题",
            field: "col24_1",
            value: "",
          },
        ],
      },
    };
  },

  mounted() {
    if (window.__POWERED_BY_QIANKUN__) {
      if (this.$options.name === this.defaultData.modelName) {
        this.data = {
          ...this.data,
          ...this.defaultData,
        };
      }
      this.$emit("getOptions", this.data);
    } else {
      this.data = this.defaultData;
    }
  },

  methods: {},
};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 85px;
  background-color: #f99;
}
</style>