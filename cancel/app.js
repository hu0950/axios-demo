import axios from 'axios'

// 方法1
// const CancelToken1 = axios.CancelToken;
// let cancel;

// axios.get('/cancel/get', {
//   cancelToken: new CancelToken1(function executor(c) {
//     cancel = c;
//   })
// }).catch(function(e) {
//     // e = Cancel {message: "Cancel Request message"}
//     // axios.isCancel(e) 会判断 在 ehr 中throw的error是不是Cancel的实例，如果是，则是取消请求，请求abort后抛出的异常，以此用来鉴别和普通的抛错
//     // 此处的e是Cancel的实例化对象
//     if (axios.isCancel(e)) {
//       console.log('Request canceled:', e.message)
//     }
//   })

// // 取消请求
// setTimeout(() => {
//   cancel('Cancel Request message')
// }, 200)

// 方法2
const CancelToken2 = axios.CancelToken
const source = CancelToken2.source()

axios.get('/cancel/get', {
  cancelToken: source.token
}).catch(function(e) {
  // e = Cancel {message: "Cancel Request message"}
  // axios.isCancel(e) 会判断 在 ehr 中throw的error是不是Cancel的实例，如果是，则是取消请求，请求abort后抛出的异常，以此用来鉴别和普通的抛错
  // 此处的e是Cancel的实例化对象
  if (axios.isCancel(e)) {
    console.log('Request canceled:', e.message)
  }
})
// 取消请求 (请求原因是可选的)
setTimeout(() => {
  source.cancel('Cancel Request message')
}, 200)
