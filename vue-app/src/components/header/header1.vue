<template>
  <div flex1 class="header">
    {{ data.values.col24_1 }}
  </div>
</template>

<script>
export default {
  name: "VueAppHeader1",
  props: {
    defaultData: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      data: window.__POWERED_BY_QIANKUN__?this.defaultData:{
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
            title: "col24",
            field: "col24_1",
          },
        ],
      },
    };
  },

  mounted() {
    if (window.__POWERED_BY_QIANKUN__) {
      this.$emit("getOptions", this.data);
    }else{
      this.data=this.defaultData
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