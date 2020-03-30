import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'view-design'
import 'view-design/dist/styles/iview.css'
import VueClipboard from 'vue-clipboard2'
import axios from 'axios'

VueClipboard.config.autoSetContainer = true // add this line
Vue.use(VueClipboard)

Vue.use(router)
Vue.config.productionTip = false
Vue.use(iView)
Vue.prototype.axios=axios

axios.defaults.baseURL="https://easy-mock.bookset.io/mock/5e7ec974a98e2502f92e9f13";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
