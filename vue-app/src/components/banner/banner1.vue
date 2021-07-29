<template>
  <div>
    <img :src="data.values.banner" alt="" />
  </div>
</template>

<script>
// import MyImage from "@/components/MyImage.vue";
export default {
  name: "banner1",
  props: {
    defaultData: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    mydata() {
      console.log(`this.defaultData`, this.defaultData);
      return this.defaultData;
    },
  },
  watch: {
    values: {
      handler(val) {
        console.log(`banner1`, val);
      },
      deep: true,
    },
  },
  data() {
    return {
      data: {
        key: "banner",
        modelName: "banner1",
        values: {
          banner: "@/assets/logo.png",
        },
        rule: [
          {
            type: "upload",
            field: "banner",
            title: "banner",
            value: "",
            props: {
              data: {
                name: "banner",
              },
            },
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

  methods: {
    check() {
      console.log(`this.data`, this.data);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>