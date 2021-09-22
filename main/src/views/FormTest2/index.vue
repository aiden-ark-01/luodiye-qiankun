<template>
  <div>
    <!-- <div class="header">
      <component
        :is="componentsOptions.components.header"
        v-if="!this.componentsOptions.isLoading&&componentsOptions.components.header"
        :values="values"
      />
    </div> -->
    <form-create
      :rule="rule"
      v-model="fApi"
      :option="options"
    />
  </div>
</template>

<script>
import { ComponentsOptions } from "@/utils";
import values from "./values.json";
import form from "./form.json";
import { copyAndFilterObjectAndStrToFunc } from "../../utils";
export default {
  name: "MainFormtest2",
  computed: {
    // isLoading() {
    //   const isLoading = this.componentsOptions.isLoading;
    //   return isLoading || false;
    // },
  },
  components: {},

  directives: {},

  data() {
    const options = ComponentsOptions.getComponentOptions(values);
    const rule = copyAndFilterObjectAndStrToFunc(form);
    return {
      values: Object.assign(values, {}),
      componentsOptions: new ComponentsOptions(options),
      fApi: {},
      rule,
      options: {
        onSubmit: (formData) => {
          alert(JSON.stringify(formData));
        },
        global: {
          "*": {
            col: {
              span: 12,
            },
          },
        },
      },
    };
  },
  watch: {
    values: {
      handler(val) {
        const options = ComponentsOptions.getComponentOptions(val);
        if (ComponentsOptions.diff(this.componentsOptions.options, options)) {
          console.log(`options`, options)
          this.componentsOptions.setOptions(options);
        }
        console.log(` this.componentsOptions`, this.componentsOptions);
      },
    },
  },
  mounted() {
    console.log(`this.values`, this.values)
    this.fApi.setValue(this.values)
    console.log(`this.fApi.bind()`, this.fApi.bind())
    const str =
      "12312312去哇撒旦是3(   ) =>            ()=>){qwseqweqwe".search(
        /(function[\s]*\()|(\([\s]*\)[\s]*=>)/
      );
    console.log(`str`, str);
  },

  methods: {
    onchange() {
      // if (key === "cate_id") {
      //   this.componentsOptions = new ComponentsOptions({
      //     header: val,
      //   });
      // }
      // console.log(`key`, key);
      // console.log(`val`, val);
    },
    // values(val){
    //   console.log(`val`, val)
    // }
  },
};
</script>

<style lang="less" scoped>
</style>