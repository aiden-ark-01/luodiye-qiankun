export default [
  {
    //获取主应用传入的路由名称,并接入vuerouter
    path: '/',
    name: 'model1',
    //动态懒加载组件
    component: () => import(/* webpackChunkName: "about" */ `../views/models/model1`)
  },
]