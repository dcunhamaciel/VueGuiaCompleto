import Vue from 'vue'
import Axios from 'axios'

//Axios.defaults.baseURL = 'https://curso-vue-3e445-default-rtdb.firebaseio.com/'

Vue.use({
    install(Vue) {
        //Vue.prototype.$http = Axios
        Vue.prototype.$http = Axios.create({
            baseURL: 'https://curso-vue-3e445-default-rtdb.firebaseio.com/'
        })
    }
})