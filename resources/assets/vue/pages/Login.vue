<template lang="pug">
article
	form(@submit.prevent="login")
		fieldset
			input(type="email", v-model="email")
		fieldset
			input(type="password", v-model="password")
		fieldset
			button(type="submit") Login
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'Login',

	data () {
		return {
			email: null,
			password: null,
		}
	},

	computed: {
		...mapGetters(['isAuthenticated'])
	},

	beforeRouteEnter (to, from, next) {
		next(vm => vm.isAuthenticated ? { name: 'dash-main' } : true)
	},

	methods: {
		login () {
			this.$http.post('/login', this.$data).then(res => {
				this.setAuthState(true)
				this.$router.push({ path: res.data })
			}, err => console.log(err))
		},
		...mapActions(['setAuthState'])
	}
}	
</script>
