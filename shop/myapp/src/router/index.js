import  Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home'
import Couser from '@/components/couser'
import MyCouser from '@/components/myCouser'
import Info from '@/components/info'

var router = new VueRouter({
	routes:[{
		path:'/home',
		component:Home
	},{
		path:'/couser',
		component:Couser
	},{
		path:'/myCouser',
		component:MyCouser
	},{
		path:'/info',
		component:Info
	},
	{
		path:'*',
		redirect:'/home'
	}
	]
})

export default router;


