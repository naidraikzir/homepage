<template lang="pug">
section.p2
	router-link(:to="{ name: 'write post' }", tag="button") Write Post
	article
		.h2 Posts
</template>

<script>
export default {

}
</script>
