<template lang="pug">
.p2
	button(@click="manager = true") Add

	table
		thead
			tr
				th
				th Media
				th Mime
				th Description
				th Date
		tbody(v-if="medias.length")
			tr(v-for="media in medias")
				td
				td: img(:src="media.filename")
				td {{ media.mime }}
				td {{ media.description }}
				td {{ format(media.updated_at, 'MMMM, Do YYYY') }}
		tbody(v-else)
			tr
				td.center(colspan="5") No media uploaded

	transition(
		@before-enter="mediaBefore",
		@enter="mediaEnter",
		@leave="mediaLeave")
		media-manage(
			v-if="manager",
			@cancel="manager = false")
</template>

<script>
import anime from 'animejs'
import format from 'date-fns/format'
import MediaManage from 'vue/components/MediaManage'
import Pagination from 'vue/components/Pagination'

export default {
	name: 'Media',
	components: { MediaManage, Pagination },

	data () {
		return {
			medias: [],
			manager: false
		}
	},

	mounted () {
		console.log(anime.easings)
		this.fetch()
	},

	methods: {
		fetch () {
			return new Promise(resolve => {
				this.$http.get('/medias').then(response => {
					this.medias = response.data
					resolve()
				})
			})
		},
		mediaBefore (el) {
			el.style.opacity = 0
			el.style.transform = 'translateY(-30em)'
		},
		mediaEnter (el, done) {
			anime({
				targets: el,
				duration: 1000,
				translateY: 0,
				opacity: 1,
				delay: 500,
				easing: 'easeOutExpo',
				complete: done
			}).play()
		},
		mediaLeave (el, done) {
			anime({
				targets: el,
				duration: 500,
				translateY: '-30em',
				opacity: 0,
				easing: 'easeInExpo',
				complete: done
			}).play()
		},
		format
	}
}
</script>
