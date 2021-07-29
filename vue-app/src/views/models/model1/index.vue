<template>
  <div flex2 class="about">
    <div flex1 id="header">
      <component
        :is="chooseComponentData.header.modelName"
        :defaultData="chooseComponentData.header"
        @getOptions="getOptions"
      />
    </div>
    <component
      :is="chooseComponentData.banner.modelName"
      flex1
      :defaultData="chooseComponentData.banner"
      @getOptions="getOptions"
    />
    <div flex1 id="Components1" class="Components">组件1</div>
    <div flex1 id="foot">我是脚部</div>
    <div>
      <!-- {{ chooseComponentData.header.modelName }} -->
    </div>
  </div>
</template>
<script>
//单个模板的测试
//该文件为基本模板 用于选择相应组件
// import Vue from "vue";
import { mapActions } from "vuex";
import header1 from "@/components/header/header1.vue";
import header2 from "@/components/header/header2.vue";
import banner1 from "@/components/banner/banner1.vue";
import defualtValues from "./values.json";
// import { request } from "@/utils";
export default {
  name: "model1",
  components: {
    header1,
    header2,
    banner1,
  },
  data() {
    return {
      token: "",
      defualtValues,
      isRender: false,
      runLoading: null,
    };
  },
  computed: {
    chooseComponentData() {
      try {
        if (window.__POWERED_BY_QIANKUN__) {
          if (!this.$store.state.chooseComponent.chooseComponentData.header) {
            return this.defualtValues.data;
          }
          const data = this.$store.state.chooseComponent.chooseComponentData;
          // this.run(data)
          console.log(`chooseComponentData=>`, data);
          return data;
        }
        console.log(`chooseComponentData/defualtValues=>`, this.defualtValues);
        return this.defualtValues.data;
      } catch (error) {
        console.log(`model1/index/55`, error);
        return {};
      }
    },
  },
  watch: {
    // chooseComponentData: {
    //   handler() {
    //     // const ele = document.getElementById("header");
    //     // ele.style.dispaly = "none";
    //     // console.log(`val2`, val);
    //     // this.run(val);
    //   },
    //   deep: true,
    // },
  },
  mounted() {
    // window.__POWERED_BY_QIANKUN__
    //   ? this.run(this.chooseComponentData, 1)
    //   : this.run();
    //请求node服务 获取本地values内容 测试代码 并非必要功能
    // request("/api/getFile", {
    //   model: "model1",
    //   //获取文件完整路径
    //   path:'F:/myTest/qiankunDemo1/vue-app/'+this.$options.__file.toString().replace('index.vue','values.json')
    // }).then((res) => {
    //   console.log(`res`, res);
    // });
    // 注册观察者函数
    // onGlobalStateChange 第二个参数为 true，表示立即执行一次观察者函数
    // actions.onGlobalStateChange(async (state) => {
    //   console.log(`state`, state);
    ////动态注册组件 核心代码
    //   this.header = await this.registerComponent("header", state.header);
    /////测试代码
    //   const { token } = state;
    //   this.token = token;
    //   // 未登录 - 返回主页
    //   // if (!token) {
    //   //   this.$message.error("未检测到登录信息！");
    //   //   return this.$router.push("/");
    //   // }
    //   // 获取用户信息
    //   // this.getUserInfo(token);
    // }, true);
    if (window.__POWERED_BY_QIANKUN__) {
      if (!this.$options.__file) return;
      if (!this.$store.state.chooseComponent.chooseComponentData.header) {
        this.setChooseComponentData(this.defualtValues.data);
      }
      console.log(`地址前缀`, this.$options.__file);
      this.setFilePath(
        this.$options.__file.replace("index.vue", "values.json")
      );
    }
  },
  methods: {
    ...mapActions("chooseComponent", ["setChooseComponentData", "setFilePath"]),
    // importComponent(key, name) {
    //   return import(`@/components/${key}/${name}.vue`)
    //     .then((component) => {
    //       console.log(`component`, component);
    //       Vue.component(name, component.default);
    //       return Promise.resolve(component);
    //     })
    //     .catch((err) => {
    //       return Promise.reject(err);
    //     });
    // },
    //子应用单独运行
    //动态注册组件 核心代码2
    // run(defaultData = this.defualtValues, mun) {
    // const ele = document.getElementById("header");
    // ele.style.dispaly = "none";
    // this.runLoading && clearTimeout(this.runLoading);
    // this.runLoading = setTimeout(() => {
    // const keys = Object.keys(defaultData);
    // const arr = [];
    // keys.forEach((e) => {
    //   try {
    //     const key = e,
    //       value = defaultData[e];

    //     // arr.push(this.importComponent(key, value.modelName));
    //   } catch (error) {
    //     console.log(`error`, error);
    //   }
    // });
    // try {
    //   Promise.all(arr).then((c) => {

    //   });
    // } catch (error) {
    //   console.log(`error`, error);
    // }
    // this.runLoading = null;
    // }, 2000);
    // this.values.header = await this.registerComponent("header", state.header);
    // },
    //动态注册组件 核心代码1
    // async registerComponent(path, templateName) {
    //   return import(`@/components/${path}/${templateName}.vue`).then(
    //     (component) => {
    //       Vue.component(templateName, component.default);
    //       return templateName;
    //     }
    //   );
    // },
    getOptions(options) {
      if (!window.__POWERED_BY_QIANKUN__) return;
      const data = this.chooseComponentData;
      data[options.key] = options;
      if (window.__POWERED_BY_QIANKUN__) {
        this.setChooseComponentData(data);
      }
    },
  },
};
</script>
<style lang="less" scoped>
*[flex1] {
  display: flex;
  align-items: center;
  justify-content: center;
}
*[flex2] {
  display: flex;
  align-items: center;
  flex-direction: column;
}
* {
  max-width: 375px;
}
.about {
  width: 100%;
  #header {
    width: 100%;
  }
  #banner {
    width: 100%;
    height: 200px;
    background-color: #99f;
  }
  .Components {
    width: 100%;
    height: 200px;
    background-color: #770;
  }
  #foot {
    width: 100%;
    height: 50px;
    background-color: #8e0;
  }
}
</style>