module.exports = {
  devServer: {
    port: 8080,
    proxy:{
      '/api': {
        target: "http://192.168.200.128:3031/",
        pathRewrite: {'^/api' : ''}
      }
    }
  }
}