import Vue from 'vue'
import store from './store'
import Router from 'vue-router'

Vue.use(Router)

import Home from 'vue/pages/Home'
import Login from 'vue/pages/Login'
import Dashboard from 'vue/pages/Dashboard'
import DashMain from 'vue/pages/DashMain'
import DashPosts from 'vue/pages/DashPosts'
import DashProjects from 'vue/pages/DashProjects'
import DashCategories from 'vue/pages/DashCategories'
import NotFound from 'vue/pages/NotFound'

const router = new Router({
	linkActiveClass: '-active',
	mode: 'history',
	routes: [
		{ path: '/', name: 'home', component: Home },
		{ path: '/login', name: 'login', component: Login },
		{
			path: '/dashboard',
			name: 'dashboard',
			component: Dashboard,
			meta: {
				requiresAuth: true
			},
			children: [
				{ path: '', name: 'dash-main', component: DashMain, meta: { text: 'Dashboard' } },
				{ path: 'posts', name: 'dash-posts', component: DashPosts, meta: { text: 'Posts' } },
				{ path: 'projects', name: 'dash-projects', component: DashProjects, meta: { text: 'Projects' } },
				{ path: 'categories', name: 'dash-categories', component: DashCategories, meta: { text: 'Categories' } },
			]
		},
		{ path: '/404', name: '404', component: NotFound },
		{ path: '*', redirect: '/404' }
	]
})

router.beforeEach((to, from, next) => {
	if (to.matched.some(route => route.meta.requiresAuth) && !store.getters.isAuthenticated) 
		next({ name: 'home' })
	else
		next()
})

router.afterEach((to, from) => {
	if (to.matched.some(route => route.name == 'dashboard')) store.dispatch('toggleMenu', false)
})

export default router
