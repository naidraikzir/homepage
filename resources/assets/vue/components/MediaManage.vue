<template lang="pug">
.wrap
	.content
		.pt2.center.black(v-if="!medias.length") No media uploaded
			.mt2: button Upload now
		input(type="file", multiple)
	.actions
		button(@click="$emit('cancel')") Cancel
		button Insert
</template>

<script>
export default {
	name: 'MediaManage',

	data () {
		return {
			medias: []
		}
	},

	mounted () {
		this.fetch()
	},

	methods: {
		fetch () {
			return new Promise(resolve => {
				this.$http.get('/medias').then(response => {
					this.medias = response.data
					resolve()
				}, error => console.log(error.data))
			})
		}
	}
}
</script>

<style lang="sass" scoped>
@import
	'../../sass/variables';

button:hover {
	transform: initial
}

.wrap {
	background-color: white;
	border-radius: 4px;
	bottom: 2em;
	box-shadow: 0 10px 20px 0 rgba($pink, 0.5);
	display: flex;
	flex-direction: column;
	left: 2em;
	min-height: 30em;
	overflow: hidden;
	position: fixed;
	right: 2em;
	top: 4em;
	z-index: 2;
}

.content {
	box-shadow: 0 5px 15px 0 rgba(black, 0.1);
	flex: 1 1;
	padding: 1em;
	position: relative;
	z-index: 1;
}

[type=file] {
	cursor: pointer;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	top: 0;
	opacity: 0;
	padding: 0;
	z-index: 2;
}

.actions {
	display: flex;
	flex: 0 0 3em;
	justify-content: flex-end;
}
</style>
