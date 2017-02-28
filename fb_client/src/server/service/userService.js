/**
 * Created by yuan on 2/28/2017.
 * http user service
 */
function getUserList (http) {
  return http.get('/users')
}

function getUserById (http, id) {
  return http.get('/users/' + id)
}

export default {
  getUserById,
  getUserList
}
