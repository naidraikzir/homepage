<template lang="pug">
article
	h1 Ooops
	h2 Page Not Found	
	router-link(:to="{ name: 'home' }") Back
</template>

<script>
export default {
	name: 'NotFound'
}	
</script>
