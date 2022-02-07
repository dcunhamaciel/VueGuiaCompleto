new Vue({
    el: '#desafio',
    data: {
        nome: 'Diego Maciel',
        idade: 37,
        imagem: 'http://files.cod3r.com.br/curso-vue/vue.jpg'
    },
    methods: {
        gerarNumero: function() {
            return Math.random();
        }
    }
})