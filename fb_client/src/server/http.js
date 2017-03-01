/**
 * Created by yuan on 2/27/2017.
 * http 总入口/出口
 * 导出每个请求模块
 * (1) export default service
 */

// user
import * as user from './controller/userService'
// doc
import * as doc from './controller/docService'

export default {
  user,
  doc
}
