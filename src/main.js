import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'view-design'
import 'view-design/dist/styles/iview.css'
import VueClipboard from 'vue-clipboard2'

VueClipboard.config.autoSetContainer = true // add this line
Vue.use(VueClipboard)

Vue.config.productionTip = false
Vue.use(iView)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
