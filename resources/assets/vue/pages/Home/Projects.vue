<template lang="pug">
div
	home-header(:show="show")
</template>

<script>
import Logo from 'vue/components/Logo'
import HomeHeader from 'vue/partials/HomeHeader'

export default {
	name: 'Projects',
	components: { Logo, HomeHeader },

	data () {
		return {
			show: false
		}
	},

	mounted () {
		setTimeout(() => {
			this.show = true
		}, 1000)
	},

	beforeRouteLeave (to, from, next) {
		this.show = false

		setTimeout(() => {
			next()
		}, 1000)
	},
}
</script>
