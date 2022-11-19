import Vue from 'vue'
import Axios from 'axios'

// Axios.defaults.baseURL = 'https://curso-vue-3e445-default-rtdb.firebaseio.com/'
// Axios.defaults.headers.common['Authorization'] = 'abc123';
// Axios.defaults.headers.get['Accepts'] = 'application/json';

Vue.use({
    install(Vue) {
        //Vue.prototype.$http = Axios
        Vue.prototype.$http = Axios.create({
            baseURL: 'https://curso-vue-3e445-default-rtdb.firebaseio.com/',
            headers: {
                "Authorization": "abc123"
            }
        })

        Vue.prototype.$http.interceptors.request.use(config => {
            console.log(config.method);
            return config;
        }, error => Promise.reject(error))

        Vue.prototype.$http.interceptors.response.use(resp => {
            // const array = [];
            // for (let chave in resp.data) {
            //     array.push({
            //         id: chave,
            //         ...resp.data[chave]
            //     })
            // }
            // resp.data = array;
            return resp;
        }, error => Promise.reject(error))
    }
})