/**
 * Created by yuan on 3/1/2017.
 * user service
 * 使用  ·· 引号 ，非 ''
 */
import http from '../common/FbHttp'

// user list and created
function getUserList () {
  return http.get(`/users/`)
}

function getUserById (id) {
  return http.get(`/users/${id}`)
}

function createUser (data) {
  return http.post(`/users/`, data)
}

export {
  getUserById,
  getUserList,
  createUser
}
