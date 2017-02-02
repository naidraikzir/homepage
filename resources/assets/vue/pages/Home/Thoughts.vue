<template lang="pug">
div
	home-header(:show="posts.length > 0")
	transition(name="fade")
		article.vh100.flex.items-center(v-if="loading")
			loading
	transition-group(
		name="stagger",
		tag="article",
		@before-enter="postsBefore",
		@enter="postsEnter",
		@leave="postsLeave")
		div(
			v-for="(post, index) in posts",
			:key="post",
			:data-index="index")
			.my2(v-if="index > 0") ———
			router-link(:to="{ name: 'thought', params: { id: post.id } }")
				h3.m0 {{ post.title }}
			em {{ format(post.created_at, 'MMMM, Do YYYY') }}
	article
		pagination(:pagination="pagination")
</template>

<script>
import { mapGetters } from 'vuex'
import anime from 'animejs'
import format from 'date-fns/format'
import loading from 'js/mixins/loading'
import Pagination from 'vue/components/Pagination'
import HomeHeader from 'vue/partials/HomeHeader'

export default {
	name: 'Thoughts',
	mixins: [ loading ],
	components: { HomeHeader, Pagination },

	data () {
		return {
			posts: [],
			pagination: {
				current_page: 6,
				last_page: 9
			}
		}
	},

	mounted () {
		this.loading = true
		this.fetch()
			.then(() => {
				this.loading = false
			})
	},

	beforeRouteLeave (to, from, next) {
		this.posts = []

		setTimeout(() => {
			next()
		}, 1000)
	},

	methods: {
		fetch () {
			return new Promise(resolve => {
				this.$http.get('/posts').then(response => {
					for (let i = 0; i < 10; i++) this.posts.push(response.data[0])
					resolve()
				}, error => console.log(error.data))
			})
		},
		postsBefore (el) {
			el.style.opacity = 0
			el.style.transform = 'translateX(-20em)'
		},
		postsEnter (el, done) {
			anime({
				targets: el,
				opacity: 1,
				translateX: 0,
				duration: 1000,
				delay: (el.dataset.index + 1) * 10,
				complete: done
			}).play()
		},
		postsLeave (el, done) {
			anime({
				targets: el,
				opacity: 0,
				translateX: '1em',
				duration: 1000,
				delay: (el.dataset.index + 1) * 10,
				complete: done
			}).play()
		},
		format
	}
}
</script>
