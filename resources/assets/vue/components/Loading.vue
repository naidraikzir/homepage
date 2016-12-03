<template lang="pug">
span.loading
	span
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
