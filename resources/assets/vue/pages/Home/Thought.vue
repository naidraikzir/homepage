<template lang="pug">
div
	home-header(:show="header")
	transition(name="fade")
		article.vh100.flex.items-center(v-if="loading")
			loading
	transition(
		@before-enter="titleBefore",
		@enter="enter",
		@leave="titleLeave")
		article(v-if="post")
			h2.center {{ post.title }}
			.center: em {{ format(post.created_at, 'MMMM, Do YYYY') }}
	transition(
		@before-enter="contentBefore",
		@enter="enter",
		@leave="contentLeave")
		article(v-if="post")
			mark-view(:content="post.content")
</template>

<script>
import anime from 'animejs'
import format from 'date-fns/format'
import loading from 'js/mixins/loading'
import Logo from 'vue/components/Logo'
import MarkView from 'vue/components/MarkView'
import HomeHeader from 'vue/partials/HomeHeader'

export default {
	name: 'Thought',
	mixins: [ loading ],
	components: { Logo, MarkView, HomeHeader },

	data () {
		return {
			header: false,
			post: null
		}
	},

	mounted () {
		this.header = true
		this.loading = true
		
		setTimeout(() => {
			this.fetch()
				.then(() => {
					this.loading = false
				})
		}, 1500)
	},

	beforeRouteLeave (to, from, next) {
		this.header = false
		this.post = null

		setTimeout(() => {
			next()
		}, 1000)
	},

	methods: {
		fetch () {
			return new Promise(resolve => {
				this.$http.get(`/posts/${this.$route.params.id}`).then(response => {
					this.post = response.data
					resolve()
				}, error => {
					console.log(error.data)
					resolve()
				})
			})
		},
		titleBefore (el) {
			el.style.opacity = 0
			el.style.transform = 'translateY(-20em)'
		},
		contentBefore (el) {
			el.style.opacity = 0
			el.style.transform = 'translateY(20em)'
		},
		enter (el, done) {
			anime({
				targets: el,
				opacity: 1,
				translateY: 0,
				duration: 2000,
				delay: 500,
				complete: done
			}).play()
		},
		titleLeave (el, done) {
			anime({
				targets: el,
				opacity: 0,
				translateY: '-10em',
				duration: 2000,
				complete: done
			}).play()
		},
		contentLeave (el, done) {
			anime({
				targets: el,
				opacity: 0,
				translateY: '10em',
				duration: 2000,
				complete: done
			}).play()
		},
		format
	}
}
</script>
