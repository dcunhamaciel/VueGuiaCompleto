import Vue from 'vue'
import App from './main/App.vue'
import Menu from './components/template/Menu.vue'
import Toolbar from './components/template/Toolbar.vue'
import Footer from './components/template/Footer.vue'
import Carousel from './components/widgets/Carousel.vue'
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
