import Vue from 'vue';
import App from './App.vue';
import router from './router/index';

//作适配，引入之后记得去掉index.html里的视口meta标签，并安装postcss-pxtorem和配置postcss.config.js(自己创建)，如果需要固定用px就大写为PX。
//安装postcss-pxtorem记得同时安装postcss和postcss-loader，之后即可愉快地书写px了
import  'lib-flexible';

Vue.config.productionTip = false;

new Vue({
  router,//避坑指南：vue路由只认这个属性名，改名会报错Cannot read property 'matched' of undefined"
  render: h => h(App),
}).$mount('#app');
