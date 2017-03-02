/**
 * Created by yuan on 3/1/2017.
 * doc api
 */
import http from '../common/FbHttp'

// 创建 doc
function createMakeDoc (data) {
  return http.post('/mdocs/', data)
}

// 获取 doc list
function getMakeDocList (page, pagesize) {
  return http.get(`/mdocs?page=${page}&pagesize=${pagesize}`)
}

// 获取 doc obj
function getMakeDocById (id) {
  return http.get(`/mdocs/${id}`)
}

// 更新 doc obj
function updateMakeDoc (id, data) {
  return http.post(`/mdocs/${id}`, data)
}

export {
  createMakeDoc,
  getMakeDocList,
  getMakeDocById,
  updateMakeDoc
}
