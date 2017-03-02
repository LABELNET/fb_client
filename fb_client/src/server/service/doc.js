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

// filter doc : week,name,year
function filterMakeDoc ([page, week, name, year]) {
  let url = `/mdocs/filter/?page=${page}`
  if (week !== 0) {
    url += `&week=${week}`
  }
  if (name !== 'not') {
    url += `&name=${name}`
  }
  if (year !== 0) {
    url += `&year=${year}`
  }
  return http.get(url)
}

export {
  createMakeDoc,
  getMakeDocList,
  getMakeDocById,
  updateMakeDoc,
  filterMakeDoc
}
