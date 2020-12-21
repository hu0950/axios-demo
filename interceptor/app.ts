import axios from 'axios'

axios.interceptors.request.use(function (config) {
  // ...处理config相关逻辑...
  config.params.a++ 
  console.log('请求拦截器------')
  return config;
}, function (error) {
  // 处理请求错误
  return Promise.reject(error);
});

axios.interceptors.request.use(function (config) {
  // ...处理config相关逻辑...
  config.params.b++ 
  return config;
}, function (error) {
  // 处理请求错误
  return Promise.reject(error);
});
axios.interceptors.response.use(function (res) {
  // ...处理config相关逻辑...
  console.log('响应拦截器------')
  return res;
}, function (error) {
  // 处理请求错误
  return Promise.reject(error);
});
axios({
  method: 'get',
  url: '/simple/get',
  params: {
    a: 1,
    b: 2
  }
})