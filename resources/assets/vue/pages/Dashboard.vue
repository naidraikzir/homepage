<template lang="pug">
.dashboard
	dash-nav
	.dash-main(@click="toggleMenu(false)")
		dash-menu
		.pad
			loading
		transition(name="to-right", mode="out-in")
			router-view
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import DashMenu from 'vue/partials/DashMenu'
import DashNav from 'vue/partials/DashNav'
import Loading from 'vue/components/Loading'

export default {
	name: 'Dashboard',
	components: { DashMenu, DashNav, Loading },

	computed: {
		...mapGetters(['menu'])
	},

	methods: {
		...mapActions(['toggleMenu'])
	}
}	
</script>
