<style lang="sass" scoped>
@import
	'../../../sass/variables',
	'../../../sass/mixins';

.wrapper {
	height: 100vh;
	overflow: hidden;
	position: relative;

	&::before {
		position: absolute;
		left: 1.5em;
		right: 1.5em;
		top: 1em;
		bottom: 1em;
		border: solid white;
		border-width: 0 1px;
		transform: skewY(25deg);
		content: '';

		@include breakpoint('sm') {
			left: 2em;
			right: 2em;
			top: 2em;
			bottom: 2em;
		}
	}
}

a {
	background: black;
	border: 0;
	font-size: 1.2em;
	padding: 0 1em;
	position: absolute;
	transition: 0.3s;

	&:hover::after {
		background: white;
		top: -0.3em;
		height: 1px;

		@include breakpoint('sm') {
			top: -0.5em;
		}
	}

	&::after {
		position: absolute;
		top: 300%;
		left: 0;
		height: 1000%;
		width: 100%;
		background: black;
		content: '';
		transition:
			0.5s top,
			0.5s 0.25s background,
			0.5s height;
	}
}

.posts {
	top: 65%;
	left: 1.3em;
	transform: rotate(90deg) translateX(-50%);
	transform-origin: left;

	@include breakpoint('sm') {
		left: 1.7em;
	}
}

.projects {
	bottom: 67%;
	right: -4.5em;
	transform: rotate(-90deg) translateX(-50%);
	transform-origin: left;

	@include breakpoint('sm') {
		right: -4.2em;
	}
}

.greet {
	position: absolute;
	left: 10%;
	right: 10%;
	top: 1.5em;
	bottom: 1.5em;
	padding: 1.5em 2em;
	z-index: -1;
	font-family: $mono;
	z-index: 1;
}
</style>

<template lang="pug">
.wrapper
	router-link.posts(:to="{ name: 'posts' }") Posts
	router-link.projects(:to="{ name: 'projects' }") Projects

	.greet
		h1 Hell Oh 👽
		h3
			| My name is Rizki Ardian
			br
			| I am a web developer
</template>

<script>
export default {
	name: 'Landing'
}
</script>
