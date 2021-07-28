const { name } = require('./package');
module.exports = {
  devServer: {
    port: 10000,
    headers: {
      'Access-Control-Allow-Origin': "*"
    },
    proxy:{
      '/api': {
        target: 'http://localhost:3031',
        pathRewrite: {'^/api' : ''}
      }
    }
  },
  //将组件路径写入this.$options.__file
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.exposeFilename = true
        return options
      })
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
  }
}