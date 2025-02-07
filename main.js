import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import { $http } from '@escook/request-miniprogram'
//发送请求和获取请求的配置信息
uni.$http = $http

// 配置请求根路径
$http.baseUrl = 'https://result.eolink.com/uBp3VVR9462e54ac2f4fce3c1148df4d511adfcdf761474?uri='

// 请求开始之前做一些事情
$http.beforeRequest = function (options) {
  uni.showLoading({
    title: '数据加载中...',
  })
}

// 请求完成之后做一些事情
$http.afterRequest = function () {
  uni.hideLoading()
}

// 封装的展示消息提示的方法
uni.$showMsg = function (title = '数据加载失败！', duration = 1500) {
  uni.showToast({
    title,
    duration,
    icon: 'none',
  })
}
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif