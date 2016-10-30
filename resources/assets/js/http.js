import Vue from 'vue'

Vue.use(require('vue-resource'))
Vue.http.headers.common['X-CSRF-TOKEN'] = document.getElementsByName('csrf_token')[0].getAttribute('content')
Vue.http.interceptors.push((request, next) => {
	next(res => { if (res.status == 401) location.reload() })
})
