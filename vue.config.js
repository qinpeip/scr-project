const isProd = process.env.NODE_ENV === 'production';
const CompressionPlugin = require('compression-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
module.exports = {
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: !isProd,
  devServer: {
    open: true,
    port: 1010,
  },
  configureWebpack: config => {
    const plugins = [];
    if (isProd) {
      plugins.push(
        new CompressionPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          // test: /\.js$|\.html$|\.json$|\.css/,
          test: /\.js$|\.json$|\.css/,
          threshold: 0, // 只有大小大于该值的资源会被处理
          minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
          deleteOriginalAssets: true // 删除原文件
        })
      );
      plugins.push(
        new MomentLocalesPlugin()
      )
    }
    return {plugins}
  },
  chainWebpack: config => {
      config.plugins.delete('prefetch');
      config.plugins.delete('preload');
  }
}