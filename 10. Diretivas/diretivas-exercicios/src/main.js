import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque', {
	bind(el, binding) {
		//el.style.backgroundColor = 'lightgreen'

		let atraso = binding.modifiers['atrasar'] ? 3000 : 0;

		setTimeout(() => {
			if (binding.arg === 'fundo') {
				el.style.backgroundColor = binding.value
			} else {
				el.style.color = binding.value
			}
		}, atraso);
	}
})

new Vue({
	render: h => h(App),
}).$mount('#app')
