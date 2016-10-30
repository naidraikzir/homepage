export default {
	SET_AUTH_STATE (state, value) {
		state.isAuthenticated = value
	},
	TOGGLE_MENU (state, value) {
		state.menu = value
	},
	TOGGLE_LOADING (state, value) {
		state.loading = value
	},
}
