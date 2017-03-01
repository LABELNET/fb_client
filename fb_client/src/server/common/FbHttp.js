/**
 * Created by yuan on 3/1/2017.
 * (1) parse data
 * (2) http : network error : status -1
 */
import http from 'axios'

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
      return callback(['-1', error.message])
    }
  })
}

export {
  http,
  FbResponse
}
