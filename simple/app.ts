import axios from 'axios'

// axios({
//   method: 'get',
//   url: '/simple/get',
//   params: {
//     a: 1,
//     b: 2
//   }
// })

// axios.get('/simple/get', {
//   params: {
//     a: 2,
//     b: 2
//   }
// })

axios.post('/simple/post', {
  params: {
    a: 3,
    b: 3
  }
}, {
  params: {
    a: 2,
    b: 1
  }
})

// 如果data是一个URLSearchParams对象
// axios.post('/simple/post', new URLSearchParams('q=URLUtils.searchParams&topic=api'))
