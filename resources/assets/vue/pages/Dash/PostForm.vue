<template lang="pug">
.post-form
	.fixed.right-0
		router-link(:to="{ name: 'dash posts' }", tag="button") Cancel
		button(@click="save") Save
	article
		fieldset
			label Category
			select(v-model="temp.category_id", placeholder="Category")
				option(value="1") Uncategorized
				option(v-for="category in categories", :value="category.id") {{ category.name }}
		fieldset
			label Content
			input(type="text", v-model="temp.title", placeholder="Title")
			textarea(
				v-model="temp.content",
				placeholder="Content (Write in Markdown)",
				ref="content",
				v-auto-resize="")
	article.preview
		fieldset
			label Preview
			.h2 {{ temp.title }}
			mark-view(:content="temp.content")
</template>

<script>
import MarkView from 'vue/components/MarkView'

export default {
	name: 'PostForm',
	components: { MarkView },

	props: {
		edit: {
			type: Boolean,
			default: false
		}
	},

	data () {
		return {
			categories: [],
			temp: {
				id: null,
				category_id: 1,
				title: '',
				content: ''
			}
		}
	},

	mounted () {
		this.fetchCategories()
			.then(() => {
				if (this.edit) this.fetch()
			})
	},

	methods: {
		fetchCategories () {
			return new Promise(resolve => {
				this.$http.get('/categories').then(response => {
					this.categories = response.data
					resolve()
				}, error => console.log(error.data))
			})
		},
		fetch () {
			return new Promise(resolve => {
				this.$http.get(`/posts/${this.$route.params.id}/edit`).then(response => {
					this.temp = response.data
					setTimeout(() => {
						let el = this.$refs['content']
						el.style.height = `${el.scrollHeight}px`
					}, 10)
					resolve()
				}, error => console.log(error.data))
			})
		},
		save () {
			this.$emit('save', this.temp)
		},
	}
}
</script>
