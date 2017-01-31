<style lang="sass" scoped>
.item {
	border: 0;
	& + & {
		margin-left: 1em;
	}
}
</style>

<template lang="pug">
.menu
	router-link.item(
		v-for="menu in menus",
		:to="{ name: menu.name }") {{ menu.text }}
</template>

<script>
export default {
	name: 'HomeMenu',

	data () {
		return {
			menus: [
				{ name: 'posts', text: 'Posts' },
				{ name: 'projects', text: 'Projects' },
			]
		}
	}
}
</script>
