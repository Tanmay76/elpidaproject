import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// All the external required pakage importing
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Snotify from 'vue-snotify'
import 'vue-snotify/styles/material.css'
import Toasted from 'vue-toasted'
import VueGeolocation from 'vue-browser-geolocation'
//import Loading from 'vue-loading-overlay'
//import 'vue-loading-overlay/dist/vue-loading.css'
import VModal from 'vue-js-modal'
import ProgressBar from 'vuejs-progress-bar'
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import VueTour from 'vue-tour'

require('vue-tour/dist/vue-tour.css')




// Use all the plugin
Vue.use(VueTour);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Snotify);
Vue.use(VueGeolocation);
Vue.use(VModal);
Vue.use(ProgressBar);
Vue.use(VueFormWizard);
Vue.use(Toasted);
//Vue.use(Loading);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
