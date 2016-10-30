export default {
	setAuthState: make('SET_AUTH_STATE'),
	toggleMenu: make('TOGGLE_MENU'),
	toggleLoading: make('TOGGLE_LOADING'),
}

function make (type) {
	return ({ commit }, ...args) => commit(type, ...args)
}