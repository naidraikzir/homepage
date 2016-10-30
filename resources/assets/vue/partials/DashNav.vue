<template lang="pug">
.dash-nav(:class="{ 'pulled-up': menu }", v-touch:swipeup="pullUp")
	a.h3.md-hide.lg-hide(@click.prevent.stop="toggleMenu(!menu)") &#8673;
	transition(name="fade", mode="out-in")
		span.h3 {{ $route.meta.text }}
	a.h3(@click.prevent="logout") &#8618;
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'DashNav',

	computed: {
		...mapGetters(['menu'])
	},

	methods: {
		logout () {
			this.$http.post('/logout').then(res => {
				this.setAuthState(false)
				this.$router.push({ path: res.data })
			}, err => console.log(err))
		},
		pullUp () {
			this.toggleMenu(true)
		},
		...mapActions(['toggleMenu', 'setAuthState'])
	}
}
</script>
