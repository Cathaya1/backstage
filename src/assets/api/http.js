/***
 * 封装axios
 */
import axios from 'axios'

const httSever = {}
httSever.install = (Vue) => {
    axios.defaults.headers['Content-type'] = 'application/json';
    axios.defaults.baseURL = 'http://119.23.71.230:11111'
    
    axios.interceptors.request.use(function (config) {
        console.log(config);
        //const AUTH_TOKEN = localStorage.getItem('token')
        //config.headers['Authorization'] = AUTH_TOKEN;
        // 在发送请求之前做些什么
        return config;
      }, function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
      });
    
    // 添加响应拦截器
    axios.interceptors.response.use(function (response) {
        // 对响应数据做点什么
        return response;
      }, function (error) {
        // 对响应错误做点什么
        return Promise.reject(error);
      });
    



    Vue.prototype.$http = axios
}




export default httSever