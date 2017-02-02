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
		border-width: 0 1px 0 0;
		transform: skewY(25deg) scaleX(1.25);
		transition: 0.75s ease-in;
		content: '';

		.mounted & {
			transition: 0.75s ease-out;
		}

		@include breakpoint('md') {
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
	color: white;
	font-size: 1.2em;
	padding: 0 1em;

	&:hover {
		color: $green;

		&::after {
			background: $green;
			top: -0.3em;
			height: 1px;

			@include breakpoint('md') {
				top: -0.5em;
			}
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

.bottom {
	bottom: 1em;
	left: 1em;
	position: absolute;
	transform: translateX(-300%);
	transform-origin: left;
	transition: 0.75s ease-in;
	z-index: 2;

	> a {
		position: relative;
	}

	.mounted & {
		transform: translateX(0);
	}

	@include breakpoint('md') {
		left: 1.7em;
	}
}

.projects {
	bottom: 67%;
	position: absolute;
	right: -4.5em;
	transform: rotate(-90deg) translateX(-50%) translateY(400%);
	transform-origin: left;
	transition: 0.75s ease-in;
	z-index: 2;

	.mounted & {
		transform: rotate(-90deg) translateX(-50%);
		transition: 0.75s ease-out;
	}

	@include breakpoint('md') {
		right: -3.8em;
	}
}

.greet {
	position: absolute;
	left: 10%;
	right: 10%;
	top: 1.5em;
	bottom: 1.5em;
	padding: 1.5em 0;
	z-index: -1;
	transform: translateY(-200%);
	transition: 0.75s ease-in;
	z-index: 1;

	.mounted & {
		transform: translateY(0);
		transition: 0.75s ease-out;
	}

	@include breakpoint('md') {
		padding-left: -3.8em;
	}
}
</style>

<template lang="pug">
.wrapper(:class="{ 'mounted': mounted }")
	.bottom
		a(@click="go('thoughts')") Thoughts
		a(@click="") Resume
	a.projects(@click="go('projects')", ref="projects") Projects

	.greet(ref="greet")
		h1
			| Hey H
			small 👽
		.h3
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
