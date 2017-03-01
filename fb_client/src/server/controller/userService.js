/**
 * Created by yuan on 2/28/2017.
 * http user service
 * 处理返回值，默认导出
 */
import FbResponse from '../common/FbResponse'
import * as user from '../service/user'

// 加载用户列表
function userList (callback) {
  FbResponse(user.getUserList(), callback)
}

// 获取用户对象
function userObj ({id = 0}, callback) {
  FbResponse(user.getUserById(id), callback)
}

export default {
  userList,
  userObj
}
