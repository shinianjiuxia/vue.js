import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home'
import Catalogue from '@/components/catalogue'
import Car from '@/components/car'
import MyInfo from '@/components/MyInfo'

Vue.use(Router)

export default new Router({
  routes: [
     {
      path: '/home',
      name: 'Home',
      component: Home
   },
   {
    path: '/catalogue',
    name: 'Catalogue',
    component: Catalogue
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
}

  ]
})
