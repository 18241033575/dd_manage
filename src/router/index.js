import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Salary from '@/components/Salary/Salary'
import SalaryDet from '@/components/SalaryDet/SalaryDet'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/salary',
      name: 'Salary',
      component: Salary,
      // children:[{
      //   path: '/salary/det',
      //   name: 'SalaryDet',
      //   component: SalaryDet
      // }]
    },
    {
      path: '/salaryDet',
      name: 'SalaryDet',
      component: SalaryDet
    }
  ]
})
