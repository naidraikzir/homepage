<template lang="pug">
.post-form
	article
		select(v-model="category", placeholder="Category")
	article
	article
		input(type="text", v-model="title", placeholder="Title")
		textarea(v-model="content", placeholder="Content", auto-resize)
	article.preview
		.h2 {{ title }}
		mark-view(:content="content")
</template>

<script>
import MarkView from 'vue/components/MarkView'

export default {
	name: 'FormPost',
	components: { MarkView },

	props: {
		edit: {
			type: Boolean,
			default: false
		}
	},

	data () {
		return {
			category: null,
			title: '',
			content: ''
		}
	},

	methods: {

	}
}
</script>
