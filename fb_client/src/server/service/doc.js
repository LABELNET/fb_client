/**
 * Created by yuan on 3/1/2017.
 * doc api
 */
import http from '../common/FbHttp'

// 创建草稿
function createDraftDoc (data) {
  return http.post('/mdocs/', data)
}

function getDraftDocList() {
  return
}

export {
  createDraftDoc
}
