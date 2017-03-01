import Vue from 'vue'
import Router from 'vue-router'
// index
// import Index from '../components/Index'
import FbIndex from '../components/fb/FbIndex'
// doc
import AddDoc from '../components/doc/AddDoc.vue'
import DocManager from '../components/doc/DocManager.vue'
import DocDetail from '../components/doc/DocDetail.vue'

// user
import UserCenter from '../components/user/UserCenter.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: FbIndex
    }, {
      path: '/doc/adddoc',
      name: 'doc_add',
      component: AddDoc
    }, {
      path: '/doc',
      name: 'doc_manager',
      component: DocManager
    }, {
      path: '/user/:id',
      name: 'user',
      component: UserCenter
    }, {
      path: '/doc/:id',
      name: 'doc_detail',
      component: DocDetail
    }
  ]
})
