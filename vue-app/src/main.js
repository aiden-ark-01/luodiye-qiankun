import Vue from 'vue'
import './public-path';
import VueRouter from 'vue-router'
import App from './App.vue'
// import routes from './router'
import config from './config'
import actions from './shared/actions'
import SharedModule from './shared'
import Vuex from 'vuex'
Vue.use(Vuex);
// import store from './store'

Vue.use(VueRouter)
Vue.config.productionTip = false
let router = null;
let instance = null;
function render(props = {}) {
  //主应用会传入需要引入的路由名称和参数 ,获取并给予默认值
  const { container, path = '', pathName: name = '', params = {}, query = {},store } = props;
  //给予redux的初步封装方式.已弃用,子组件无法获取状态改变
  const { shared = SharedModule.getShared() } = props;
  SharedModule.overloadShared(shared)
  //乾坤自带的应用通讯方式
  if (props.onGlobalStateChange && props.setGlobalState) {
    // 注入 actions 实例
    actions.setActions(props);
  }
  //接入主应用对路径的重写
  const activeRule = props.activeRule ? props.activeRule : '/ChooseComponent'
  const base = window.__POWERED_BY_QIANKUN__ ? activeRule : '/'
  //载入路由
  router = new VueRouter({
    base,
    mode: 'history',
    //保证只接入一个路由
    routes: window.__POWERED_BY_QIANKUN__ ? [
      {
        //获取主应用传入的路由名称,并接入vuerouter
        path: '/',
        name: name,
        //动态懒加载组件
        component: () => import(/* webpackChunkName: "about" */ `./views/models/${name}`)
      },
    ] : config
  });
  //刷新浏览器保证主应用参数正常传入
  let firstLoading = true;
  router.beforeEach((to, from, next) => {
    //刷新浏览器传入主应用参数
    if (firstLoading && (name || path)) {
      firstLoading = false
      name ? next({ name, params }) : next({ path, query })
      //若跳转的路由为主应用传入的,则直接下一步,防止死循环
    } else if (to.path === path || to.name === name) {
      next()
    } else {
      next()
    }

  })
  Vue.observable(store)
  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}
//默认独立运行
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}
export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}
