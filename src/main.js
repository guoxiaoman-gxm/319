import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import axiosInit from './api/axiosInit'
import store from './store'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'


Vue.use(router)
Vue.use(ViewUI)
Vue.config.productionTip = false
Vue.prototype.axios=axios
window.axios=axiosInit;

axios.defaults.baseURL="https://easy-mock.bookset.io/mock/5e7ec974a98e2502f92e9f13";
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
