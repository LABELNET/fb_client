/**
 * Created by yuan on 3/1/2017.
 * doc api
 */
import http from '../common/FbHttp'

// 创建草稿
function createMakeDoc (data) {
  return http.post('/mdocs/', data)
}

function getMakeDocList () {
  return http.get('/mdocs/')
}

export {
  createMakeDoc,
  getMakeDocList
}
