import Vue from 'vue'
import App from './App.vue'
import Menu from './components/Menu.vue'
import Toolbar from './components/Toolbar.vue'
import Carousel from './components/Carousel.vue'
import Footer from './components/Footer.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.component('app-menu', Menu)
Vue.component('app-toolbar', Toolbar)
Vue.component('app-carousel', Carousel)
Vue.component('app-footer', Footer)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
