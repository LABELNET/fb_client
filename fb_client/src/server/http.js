/**
 * Created by yuan on 2/27/2017.
 */
import axios from 'axios'
import user from './service/userService'

// config http
axios.defaults.baseURL = 'http://localhost:8000/fb'
axios.defaults.timeout = 2500
axios.defaults.headers.post['Content-Type'] = 'application/json'

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

function userList (callback) {
  FbResponse(user.getUserList(axios), callback)
}

export default {
  userList
}
