import axios from 'axios'

axios.interceptors.request.use(function (config) {
  // ...处理config相关逻辑...
  
  return config;
}, function (error) {
  // 处理请求错误
  return Promise.reject(error);
});

axios.interceptors.request.use(function (config) {
  // ...处理config相关逻辑...
  return config;
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