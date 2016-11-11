<template lang="pug">
.loading
	div
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'Loading',

	computed: {
		...mapGetters(['loading'])
	}
}
</script>
