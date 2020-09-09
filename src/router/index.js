import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'


Vue.use(VueRouter)

const routes = [{
	path: '/',
	name: 'index',
	component: index
},
{
	path: '/index',
	name: 'index',
	component: index
},
{
	path: '/index2',
	component: () => import('@/views/index2'),
	children: [{
		path: '/index2',
		redirect: '/index2/index13'
	}, {
		path: 'inde3',
		component: () => import('@/views/inde3')
	}, {
		path: 'index4',
		component: () => import('@/views/index4')
	}, {
		path: 'index5',
		component: () => import('@/views/index5')
	}, {
		path: 'index6',
		component: () => import('@/views/index6')
	}, {
		path: 'index7',
		component: () => import('@/views/index7')
	}, {
		path: 'index8',
		component: () => import('@/views/index8')
	}, {
		path: 'index9',
		component: () => import('@/views/index9')
	}, {
		path: 'index10',
		component: () => import('@/views/index10')
	}, {
		path: 'index11',
		component: () => import('@/views/index11')
	}, {
		path: 'index12',
		component: () => import('@/views/index12')
	}, {
		path: 'index13',
		component: () => import('@/views/index13')
	}, {
		path: 'index14',
		component: () => import('@/views/index14')
	}, {
		path: 'index15',
		component: () => import('@/views/index15')
	}, {
		path: 'index16',
		component: () => import('@/views/index16')
	}, {
		path: 'index17',
		component: () => import('@/views/index17')
	}, {
		path: 'index18',
		component: () => import('@/views/index18')
	}, {
		path: 'index19',
		component: () => import('@/views/index19')
	}, {
		path: 'indx20',
		component: () => import('@/views/indx20')
	}, {
		path: 'index21',
		component: () => import('@/views/index21')
	}, {
		path: 'index22',
		component: () => import('@/views/index22')
	}, {
		path: 'index23',
		component: () => import('@/views/index23')
	}, {
		path: 'index24',
		component: () => import('@/views/index24')
	}, {
		path: 'syuan',
		component: () => import('@/views/syuan')
	}, {
		path: 'zxgc',
		component: () => import('@/views/zxgc')
	}, {
		path: 'zj',
		name:'zj',
		component: () => import('@/views/zj')
	}]
}]


const router = new VueRouter({
	mode: 'hash',
	// base: process.env.BASE_URL,
	routes
})

router.beforeEach(function(to, from, next) {
 // console.log('--' + localStorage.getItem('userToken') + to.path)
  if (!localStorage.getItem('userToken')) {
    if (to.path !== '/index') {
      return next('/index')
    }
  }
  next()
})

export default router
