import Vue from 'vue'
import store from './store'
import Router from 'vue-router'
import makeTitle from './makeTitle'

Vue.use(Router)

import Home from 'vue/pages/Home'
import Posts from 'vue/pages/Posts'
import Projects from 'vue/pages/Projects'
import Login from 'vue/pages/Login'
import Dashboard from 'vue/pages/Dash/Dashboard'
import DashMain from 'vue/pages/Dash/Main'
import DashPosts from 'vue/pages/Dash/Posts'
import DashPostList from 'vue/pages/Dash/PostList'
import DashPostWrite from 'vue/pages/Dash/PostWrite'
import DashPostEdit from 'vue/pages/Dash/PostEdit'
import DashProjects from 'vue/pages/Dash/Projects'
import DashCategories from 'vue/pages/Dash/Categories'
import DashTags from 'vue/pages/Dash/Tags'
import NotFound from 'vue/pages/NotFound'

const router = new Router({
	linkActiveClass: '-active',
	mode: 'history',
	routes: [
		{ path: '/', name: 'home', component: Home },
		{ path: '/posts', name: 'posts', component: Posts },
		{ path: '/projects', name: 'projects', component: Projects },
		{ path: '/login', name: 'login', component: Login },
		{
			path: '/dashboard',
			name: 'dashboard',
			component: Dashboard,
			meta: { requiresAuth: true },
			redirect: { name: 'dash main' },
			children: [
				{ path: 'main', name: 'dash main', component: DashMain, meta: { text: 'Dashboard' } },
				{
					path: 'posts',
					name: 'dash posts',
					component: DashPosts,
					redirect: { name: 'post list' },
					children: [
						{ path: '', name: 'post list', component: DashPostList, meta: { text: 'Posts' } },
						{ path: 'write', name: 'write post', component: DashPostWrite, meta: { text: 'Write' } },
						{ path: 'edit', name: 'edit post', component: DashPostEdit }
					]
				},
				{ path: 'projects', name: 'dash projects', component: DashProjects, meta: { text: 'Projects' } },
				{ path: 'categories', name: 'dash categories', component: DashCategories, meta: { text: 'Categories' } },
				{ path: 'tags', name: 'dash tags', component: DashTags, meta: { text: 'Tags' } },
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

router.afterEach(to => {
	if (to.matched.some(route => route.name === 'dashboard')) store.dispatch('toggleDashMenu', false)
	makeTitle(to.name, 'Rizki Ardian')
})

export default router
