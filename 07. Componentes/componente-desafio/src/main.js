import Vue from 'vue'
import App from './App.vue'
import Bar from './components/Bar.vue'
import Navigation from './components/Navigation.vue'
import Carousel from './components/Carousel.vue'
import Footer from './components/Footer.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.component('app-bar', Bar)
Vue.component('app-navigation', Navigation)
Vue.component('app-carousel', Carousel)
Vue.component('app-footer', Footer)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
