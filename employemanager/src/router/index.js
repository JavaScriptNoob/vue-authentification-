import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import NewEmployee from '@/components/newEmployee'
import EditEmployee from '@/components/EditEmployee'
import Viewemployee from '@/components/ViewEmployee'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component:Dashboard
    },
    {
      path: '/new',
      name: 'newEmployee',
      component:NewEmployee
    },
    {
      path: '/edit/:employee_id',
      name: 'EditEmployee',
      component:EditEmployee
    },
    {
      path: '/:employee_id',
      name: 'ViewEmployee',
      component:Viewemployee
    }
  ]
})
