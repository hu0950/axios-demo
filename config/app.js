import axios from 'axios'

axios.get('/config/get', {
  // transformRequest: [
  //   (function(data) {
  //     // data.params.a = data.params.a + 1
  //     // return data
  //     // return new FormData()
  //     return JSON.stringify(data)
  //   }),
  //   ...axios.defaults.transformRequest
  // ],
  // params: {
  //   a: 2,
  //   b: 2
  // },
  // data: {
  //   a: 1,
  //   b: 1
  // }
})

// get只能传get，post 可以接受params和data
// axios.post('/config/post', {
//   params: {
//     a: 3,
//     b: 3
//   }
// }, {
//   params: {
//     a: 2,
//     b: 2
//   }
// })