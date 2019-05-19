import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import Register from '@/components/Register'
import Home from '@/pages/home/Home'


Vue.use(Router)
//fastclick.attach(document.body)

export default new Router({
  routes: [
		{
			path:'/register',
			name:'Register',
			component:Register
		},
		{
			path:'/',
			name:'Home',
			component:Home
		}
  ]
})
