'use strict'

import Vue from 'vue'
import router from 'js/router'
import App from 'vue/App'

// ajax
Vue.use(require('vue-resource'))
Vue.http.headers.common['X-CSRF-TOKEN'] = document.getElementsByName('csrf_token')[0].getAttribute('content')
Vue.http.interceptors.push((request, next) => {
	next(res => { if (res.status == 401) location.reload() })
})

// styles
require('sass/app')

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
