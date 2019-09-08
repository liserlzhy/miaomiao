import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'

import axios from 'axios'

import Scroller from './components/Scroller'
Vue.component('Scroller',Scroller)

import Loading from './components/Loading'
Vue.component('Loading',Loading)

Vue.prototype.axios = axios;

Vue.config.productionTip = false

Vue.filter('starFilter',(data)=>{
  return data.map(item => item.name).join(" ")
})
Vue.filter('timeFilter',(data,arg)=>{
  let d = new Date(data*1000)
  let year = d.getFullYear()
  let month = d.getMonth() + 1
  let date = d.getDate()
  let day = d.getDay()
  let weekday = ['周日','周一','周二','周三','周四','周五','周六']
  if(arg == 3){ 
    return `${weekday[day]} ${month}月${date}日`
  }else if(arg == 2){
    return year + '年' + month +'月' + ' 待定'
  }
})

Vue.filter('imageFilter',(data,arg)=>{
  return data.replace(/w\.h/,arg)
})
// runtime模式
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
