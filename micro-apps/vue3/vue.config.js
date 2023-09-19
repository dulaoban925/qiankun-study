const { defineConfig } = require('@vue/cli-service')
const { resolve } = require('path')
const name = require('./package.json').name

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    hot: true,
    port: 8081,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  // 自定义webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      // webpack 5 以前版本需要把 chunkLoadingGlobal 替换成 jsonpFunction
      chunkLoadingGlobal: `webpackJsonp_${name}`,
    },
  },
})
