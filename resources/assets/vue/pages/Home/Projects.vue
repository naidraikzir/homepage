<template lang="pug">
div
	.flex.justify-between.p2
		router-link.border-none(:to="{ name: 'landing' }"): logo
		menus
</template>

<script>
import Logo from 'vue/components/Logo'
import Menus from 'vue/partials/Menu'

export default {
	name: 'Projects',
	components: { Logo, Menus }
}
</script>
