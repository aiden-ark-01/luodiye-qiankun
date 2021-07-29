<template>
  <div class="home">
    <div class="itemView" @click="goChooseComponent">模板1</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {
    goChooseComponent() {
      this.$router.push({
        path: "/ChooseComponent/",
        query: {
          id: 1,
          modelName: "model1",
        },
      });
    },
    // submitUpload() {
    //   this.$refs.form.submit();
    // },
  },
};
</script>
<style lang="less" scoped>
.itemView {
  width: 200px;
  height: 300px;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
