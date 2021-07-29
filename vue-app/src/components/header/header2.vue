<template>
  <div flex1 class="header">
    {{ data.values.col24_2 }}
  </div>
</template>

<script>
export default {
  name: "header2",
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
        modelName: "header2",
        values: {
          col24_2: "我是默认头部组件2",
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
            field: "col24_2",
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
  background-color: rgb(2, 76, 99);
}
</style>