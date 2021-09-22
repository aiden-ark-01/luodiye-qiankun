import Vue from 'vue'
// import formCreate from './plugins/form-create/element-ui/dist/form-create'

import formCreate from '@form-create/element-ui'
import ElementUI from 'element-ui';
// import { registerMicroApps } from 'qiankun';
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
// registerMicroApps([
//   {
//     name: 'vueApp', // app name registered
//     entry: '//localhost:10000',
//     container: '#vue',
//     props:{
//       store
//     }
//   }
// ]);

// start();
Vue.use(ElementUI);
Vue.use(formCreate);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
