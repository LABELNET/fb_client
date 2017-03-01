/**
 * Created by yuan on 3/1/2017.
 * user api
 * 使用  ·· 引号 ，非 ''
 */

// user list and created

function getUserList (http) {
  return http.get(`/users/`)
}

function getUserById (http, id) {
  return http.get(`/users/${id}`)
}

export {
  getUserById,
  getUserList
}
