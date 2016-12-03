<template lang="pug">
.landing
	main-menu
	router-view
</template>

<script>
import MainMenu from 'vue/partials/Menu'

export default {
	name: 'Home',
	components: { MainMenu }
}
</script>
