import Vue from 'vue'
import Hammer from 'hammerjs'

Vue.directive('touch', (el, binding, vnode) => {
	let mc = new Hammer(el)
	mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL })
	mc.on(binding.arg, evt => {
		binding.value()
	})
})
