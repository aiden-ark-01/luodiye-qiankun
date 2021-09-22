<template>
  <form-create
    :rule="data.rule"
    v-model="fApi"
    :option="options"
    :value.sync="data.values"
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
      fApi: {},
      options: {
        resetBtn: false,
        onSubmit: () => {
          this.$emit("submit");
        },
        global: {
          "*": {
            col: {
              span: 18,
            },
          },
          upload: {
            props: {
              action: "/api/uploadImages",
              // maxLength: 1,
              limit: 1,
              multiple: true,
              type: "select",
              uploadType: "image",
              accept: "image/*",
              format: ["jpg", "jpeg", "png", "gif"],
              name: "pic",
              onSuccess: function (response, file) {
                file.url =
                  process.env.VUE_APP_SERVER_PATH +
                  "public/uploads/" +
                  response.data.path;
              },
              onError: function (r) {
                console.log(`r`, r);
                alert("上传失败");
              },
            },
            validate: [
              {
                required: true,
              },
            ],
          },
        },
      },
    };
  },
  watch: {
    data: {
      handler(val) {
        console.log(`val`, val);
      },
      deep: true,
    },
  },
  mounted() {
    console.log(`rule`, this.data);
  },
  methods: {
    change(e, v) {
      // const data=v[1]
      const data = {
        key: e,
        value: v,
      };
      this.$emit("changeForm", data);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>