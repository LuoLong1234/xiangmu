import Vue from 'vue'
import VueRouter from 'vue-router'
// import views from '../views/jihua.vue'

Vue.use(VueRouter)

  const routes = [
	{
		path:'/jrtj',
		component:()=>import('@/views/jrtj')
	},{
		path:'/jihua',
		component:()=>import('@/views/jihua')
	},{
		path:'/denglu',
		component:()=>import('@/views/denglu')
	},{
		path:'/socang',
		component:()=>import('@/views/socang')
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
