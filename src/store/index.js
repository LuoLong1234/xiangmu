import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		username: ""
	},
	mutations: {
		 set_user(state, user) {
		    state.username = user
		    },
		    del_userr(state) {
		    state.username = ''
		    },
	},
	actions: {
		
	},
	modules: {}
})
