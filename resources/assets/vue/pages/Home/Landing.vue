<style lang="sass" scoped>
@import
	'../../../sass/variables',
	'../../../sass/mixins';

.wrapper {
	height: 100vh;
	overflow: hidden;
	position: relative;

	&.mounted::before {
		transform: skewY(25deg) scaleX(1);
	}

	&::before {
		position: absolute;
		left: 1.5em;
		right: 1.5em;
		top: 1em;
		bottom: 1em;
		border: solid white;
		border-width: 0 1px;
		transform: skewY(25deg) scaleX(1.25);
		transition: 0.75s ease-in;
		content: '';

		.mounted & {
			transition: 0.75s ease-out;
		}

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
	transition: 0.75s ease-in;

	.mounted & {
		transition: 0.75s ease-out;
	}

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
	transform: rotate(90deg) translateX(-50%) translateY(400%);
	transform-origin: left;

	.mounted & {
		transform: rotate(90deg) translateX(-50%) translateY(0);
	}

	@include breakpoint('sm') {
		left: 1.7em;
	}
}

.projects {
	bottom: 67%;
	right: -4.5em;
	transform: rotate(-90deg) translateX(-50%) translateY(400%);
	transform-origin: left;

	.mounted & {
		transform: rotate(-90deg) translateX(-50%) translateY(50%);
	}

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
	transform: translateY(-200%);
	transition: 0.75s ease-in;
	z-index: 1;

	.mounted & {
		transform: translateY(0);
		transition: 0.75s ease-out;
	}
}
</style>

<template lang="pug">
.wrapper(:class="{ 'mounted': mounted }")
	a.posts(@click="go('posts')", ref="posts") Posts
	a.projects(@click="go('projects')", ref="projects") Projects

	.greet(ref="greet")
		h1 Hell Oh 👽
		h3
			| My name is Rizki Ardian
			br
			| I am a web developer
</template>

<script>
export default {
	name: 'Landing',

	data () {
		return {
			mounted: false
		}
	},

	mounted () {
		setTimeout(() => {
			this.mounted = true
		}, 1000)
	},

	methods: {
		go (to) {
			this.mounted = false
			setTimeout(() => {
				this.$router.push({ name: to })
			}, 1500)
		}
	}
}
</script>
