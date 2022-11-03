import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		"tabbarIndex": 0,
	},
	mutations: {
		changeTabIndex(state, value) {
			state.tabbarIndex = value
		}
	}
})

export default store
