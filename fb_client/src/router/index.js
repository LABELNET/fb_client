import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'
import AddDoc from '../components/doc/AddDoc.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }, {
      path: '/doc/adddoc',
      name: 'adddoc',
      component: AddDoc
    }
  ]
})
