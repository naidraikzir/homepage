<template lang="pug">
span.loading
	span(:class="type")
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'Loading',

	props: {
		type: {
			type: String,
			default: 'slide'
		}
	},

	computed: {
		...mapGetters(['loading'])
	}
}
</script>
