/**
 * Created by yuan on 2/27/2017.
 */
import http from 'axios'
import user from './service/userService'

// config http
http.defaults.baseURL = 'http://localhost:8000/fb'
http.defaults.timeout = 2500
http.defaults.headers.post['Content-Type'] = 'application/json'

// 通用返回值处理
function FbResponse (promiss, callback) {
  promiss.then(response => {
    console.log(response)
    return callback([response.status, response.data])
  }).catch(error => {
    console.log(error)
    if (error.response) {
      return callback([error.response.status, error.response.data])
    } else {
      return callback([error.response.status, error.message])
    }
  })
}

// 加载用户列表
function userList (callback) {
  FbResponse(user.getUserList(http), callback)
}

export default {
  userList
}
