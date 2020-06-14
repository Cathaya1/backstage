import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import httpSever from '@/assets/api/http.js'

//导入axios插件
Vue.use(httpSever);


//导入element ui
import ElementUI from 'element-ui';
Vue.use(ElementUI);

//导入css文件
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/reset.css'

//导入格式化时间插件
import moment from 'moment'
//定义全局过滤器
Vue.filter('dateFormat',function(dataStr,pattern = 'YYYY-MM-DD hh:mm:ss') {
  return moment(dataStr).format(pattern)
})




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
