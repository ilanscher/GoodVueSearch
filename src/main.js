import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
// import 'expose?$!expose?jQuery!jquery'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
//import css files
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
