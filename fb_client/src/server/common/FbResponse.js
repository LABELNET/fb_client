/**
 * Created by yuan on 3/1/2017.
 */

// 通用返回值处理
export default function FbResponse (promiss, callback) {
  console.log('----------------- http already response : [code,data] => {} --------------------')
  promiss.then(response => {
    return callback([response.status, response.data])
  }).catch(error => {
    if (error.response) {
      return callback([error.response.status, error.response.data])
    } else {
      return callback(['-1', error.message])
    }
  })
}
