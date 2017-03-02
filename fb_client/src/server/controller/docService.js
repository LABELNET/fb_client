/**
 * Created by yuan on 3/1/2017.
 * 处理 doc 文档
 */

import FbResponse from '../common/FbResponse'
import * as doc from '../service/doc'

function createMakeDoc (data, callback) {
  FbResponse(doc.createMakeDoc(data), callback)
}

function getMakeDocsList ({page = 1, pagesize = 10}, callback) {
  FbResponse(doc.getMakeDocList(page, pagesize), callback)
}

function getMakeDocObj ({id = 0}, callback) {
  FbResponse(doc.getMakeDocById(id), callback)
}

function updMakeDocObj ({data = null}, callback) {
  if (data === null) {
    return
  }
  FbResponse(doc.updateMakeDoc(data.id, data), callback)
}

export {
  createMakeDoc,
  getMakeDocsList,
  getMakeDocObj,
  updMakeDocObj
}
