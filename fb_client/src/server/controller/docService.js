/**
 * Created by yuan on 3/1/2017.
 * 处理 doc 文档
 */

import FbResponse from '../common/FbResponse'
import * as doc from '../service/doc'

function createMakeDoc (data, callback) {
  FbResponse(doc.createMakeDoc(data), callback)
}

function getMakeDocsList (callback) {
  FbResponse(doc.getMakeDocList(), callback)
}

export {
  createMakeDoc,
  getMakeDocsList
}
