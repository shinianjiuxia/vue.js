import Vue from 'vue'
import Router from 'vue-router'


import Home from '../components/home.vue'
import Sort from '../components/sort.vue'
import Car from '../components/car.vue'
import MyInfo from '../components/myInfo.vue'
import MyOrder from '../components/myOrder.vue'
import Pro_search from '../components/pro_search.vue'
import Pro_list from '../components/pro_list.vue'
import Confirm_order from '../components/Confirm_order.vue'
import Pay from '../components/pay.vue'
import Login from '../components/login.vue'
import Pro_details from '../components/pro_details.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
   },
   {
    path: '/sort',
    name: 'Sort',
    component: Sort
 },
 {
  path: '/car',
  name: 'Car',
  component: Car
},
{
  path: '/myInfo',
  name: 'MyInfo',
  component:MyInfo
},
{
  path: '/myOrder',
  name: 'MyOrder',
  component:MyOrder
},{
  path: '/pro_search',
  name: 'Pro_search',
  component:Pro_search
},{
  path: '/pro_list',
  name: 'Pro_list',
  component:Pro_list
},{
  path: '/confirm_order',
  name: 'Confirm_order',
  component:Confirm_order
},{
  path: '/pay',
  name: 'Pay',
  component:Pay
},{
  path: '/login',
  name: 'Login',
  component:Login
},{
  path: '/pro_details',
  name: 'Pro_details',
  component:Pro_details
}


  ]
})
