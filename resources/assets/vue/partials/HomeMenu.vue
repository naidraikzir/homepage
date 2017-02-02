<style lang="sass" scoped>
@import '../../sass/variables';

.item {
	border: 0;
	color: white;
	transition: 0.5s;
	
	&.-active,
	&:hover {
		color: $green;
	}

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
				{ name: 'thoughts', text: 'Thoughts' },
				{ name: 'projects', text: 'Projects' },
			]
		}
	}
}
</script>
