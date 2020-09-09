import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VCharts from 'v-charts'
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from 'axios'


Vue.config.productionTip = false
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.prototype.$axios = axios
Vue.use(ElementUI);
Vue.use(Vant);
Vue.use(VCharts)
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
