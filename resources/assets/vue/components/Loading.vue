<template lang="pug">
span.loading
	span(:class="type")
</template>

<script>
export default {
	name: 'Loading',

	props: {
		type: {
			type: String,
			default: 'slide'
		}
	}
}
</script>
