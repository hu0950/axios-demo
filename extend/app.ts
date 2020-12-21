import axios from 'axios'

axios({
  url: '/extend/post',
  method: 'post',
  data: {
    msg: 'hi'
  }
})

axios.request({
  url: '/extend/post',
  method: 'post',
  data: {
    msg: 'hello'
  }
})

axios.get('/extend/get')

axios.options('/extend/options')

axios.delete('/extend/delete')

axios.head('/extend/head')

axios.post('/extend/post', { msg: 'post' })

axios.put('/extend/put', { msg: 'put' })

axios.patch('/extend/patch', { msg: 'patch' })

// axios直接可接收两个参数（url，data, config）
axios('/extend/post', {
  method: 'post',
  data: {
    msg: 'axios直接可接收两个参数（url，config）'
  }
})


// 定义响应数据data的数据结构
interface ResponseData<T = any> {
  code: number
  result: T
  message: string
}
