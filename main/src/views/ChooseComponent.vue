<template>
  <div flex3 class="chooseComponentView">
    <div id="model"></div>
    <div flex2 class="edit">
      <!-- <h1>{{chooseComponentData.test}}</h1> -->
      <div v-for="(ele, index) in componentsList" :key="index.toString()">
        <div v-if="ele.rule">
          <MyForm :data="ele" />
        </div>
      </div>
      <button @click="btn1" v-if="chooseComponentData.header">切换头部</button>

      <button @click="btn2">提交</button>
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
    ...mapState("chooseComponent", ["chooseComponentData"]),
    componentsList() {
      if (typeof this.chooseComponentData === "object") {
        const keys = Object.keys(this.chooseComponentData);
        const arr = []
        keys.forEach((e) => {
          if (e!=='path') {
          arr.push( this.chooseComponentData[e]);
          }
        });
        console.log(`arr`, arr);
        return arr;
      }
      return [];
    },
  },
  async created() {
    try {
      const {
        data: { options, modelName },
      } = await request.POST("/api/getModelData", {
        modelId: 1,
      });
      this.setChooseComponentData(options);
      if (!this.MicroApp) {
        //接入子组件
        this.MicroApp = loadMicroApp({
          name: "vue-app",
          entry: "http://182.61.14.207:10000",
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
      if (error.message) {
        console.log(`error.message`, error.message);
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
    ...mapActions("chooseComponent", ["setChooseComponentData"]),
    btn1() {
      const {
        header: { modelName },
      } = this.chooseComponentData;
      const name = modelName === "header1" ? "header2" : "header1";
      const data = this.chooseComponentData;
      data.header.modelName = name;
      this.setChooseComponentData(data);

    },
    btn2() {
      request.POST('/api/saveData',{
        modelId:1,
        data:this.chooseComponentData
      })
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