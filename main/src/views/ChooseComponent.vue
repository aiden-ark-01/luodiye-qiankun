<template>
  <div flex3 class="chooseComponentView">
    <div id="model"></div>
    <div flex2 class="edit">
      <button @click="btn1" v-if="chooseComponentData.header">切换头部</button>
      <MyForm :data="componentsList" @changeForm="changeForm" @submit="btn2" />
    </div>
  </div>
</template>

<script>
//测试对model1模板进行组件选择
import { loadMicroApp, start } from "qiankun";
import store from "../store";
import { request } from "../utils";
import MyForm from "../components/Form";
import { mapState, mapActions } from "vuex";
export default {
  name: "Qiankundemo1Choosecomponent",
  components: {
    MyForm,
  },
  data() {
    return {
      state: {},
      MicroApp: null,
      modelName: "",
    };
  },
  computed: {
    ...mapState("chooseComponent", [
      "chooseComponentData",
      "filePath",
      "modelData",
    ]),
    componentsList() {
      if (typeof this.chooseComponentData === "object") {
        let rule = [];
        let values = {};
        const data = this.chooseComponentData;
        const keys = Object.keys(this.chooseComponentData);
        keys.forEach((e) => {
          rule = rule.concat(data[e].rule);
          values = Object.assign({}, values, data[e].values);
        });
        return { values, rule };
      }
      return [];
    },
  },
  async created() {
    try {
      if (!this.$route.query.id) {
        this.setModelData({});
        this.$router.replace({
          path: "/",
        });
        return 
      }
      const modelId = +this.$route.query.id;
      const modelName = this.$route.query.modelName;
      const {
        code,
        data: { options },
      } = await request.POST("/api/getModelData", {
        modelId,
      });
      if (code > 0) {
        this.setChooseComponentData(options);
      }
      this.setModelData({
        modelId,
        modelName,
      });
      if (!this.MicroApp) {
        //接入子组件
        this.MicroApp = loadMicroApp({
          name: "vue-app",
          entry: process.env.VUE_APP_CLINT_PATH,
          container: "#model",
          //写入当前路由的路径 子应用会+接至该路径之后
          activeRule: "/ChooseComponent",
          props: {
            store,
            //模板名称
            pathName: modelName,
            //带入的参数
          },
        });
      }
      // const res= await request.POST('/api/getData',{})
      // console.log(`res`, res)
    } catch (error) {
      if (error.msg) {
        console.log(`error.msg`, error.msg);
        return;
      }
      console.log(`error`, error);
    }
  },
  async mounted() {
    //qiankun自带的状态管理
    // actions.onGlobalStateChange((state, prevState) => {
    //   // state: 变更后的状态; prevState: 变更前的状态
    //   console.log(`state`, state);
    //   console.log(`prevState`, prevState);
    // });
    //设置状态方法
    // actions.setGlobalState({ token: 1234 });
    //执行qiankun
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      start({
        sandbox: true,
      });
    }
  },

  methods: {
    ...mapActions("chooseComponent", [
      "setChooseComponentData",
      "setModelData",
    ]),
    btn1() {
      const {
        header: { modelName },
      } = this.chooseComponentData;
      const name = modelName === "header1" ? "header2" : "header1";
      const data = this.chooseComponentData;
      data.header = { modelName: name };
      this.setChooseComponentData(data);
    },
    btn2() {
      request
        .POST("/api/saveData", {
          modelId: this.modelData.modelId,
          data: {
            ...this.modelData,
            data: this.chooseComponentData,
          },
          filePath: process.env.VUE_APP_FILE_PATH + this.filePath,
        })
        .then((res) => {
          if (res.code>0) {
            alert(res.msg)            
          }
        });
    },
    changeForm({ key: dataKey, value: dataValue }) {
      const data = this.chooseComponentData;
      const keys1 = Object.keys(data);
      keys1.forEach((e) => {
        if (data[e].values[dataKey] != null) {
          data[e].values[dataKey] = dataValue;
          // data[e].values[v.key]=v.v
        }
      });
      this.setChooseComponentData(data);
    },
  },
};
</script>

<style lang="less" scoped>
*[flex1] {
  display: flex;
  justify-content: center;
  align-items: center;
}
*[flex2] {
  display: flex;
  align-items: center;
  flex-direction: column;
}
*[flex3] {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.chooseComponentView {
  width: 100%;
}
#model {
  flex: 2;
}
.edit {
  flex: 1;
}
</style>