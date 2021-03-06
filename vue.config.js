const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('styles', resolve('src/assets/styles'))
      .set('common', resolve('src/common'))

    config
      .plugin('html')
      .tap(args => {
        args[0].title = '去哪儿'
        return args
      })
  },
  publicPath: './',
  devServer: {
    // host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        // changeOrigin: true,
        // ws: true,
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    }
  }
}
