const Happypack = require('happypack');//引入它构建多线程打包

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: []
    }
  },
  configureWebpack: config => {  //提升打包速度
    // 多线程优化构建速度
    config.plugins.push(
      new Happypack({
        loaders: ['babel-loader', 'vue-loader', 'url-loader'],
        cache: true,
        threads: 3 // 线程数取决于你电脑性能的好坏，好的电脑建议开更多线程
      })
    );
  }

}
