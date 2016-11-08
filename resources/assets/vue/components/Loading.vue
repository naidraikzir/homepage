<template lang="pug">
.loading
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
