import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'
import Vuei18n from 'vue-i18n'

Vue.use(Vuei18n);


Vue.config.productionTip = false

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')