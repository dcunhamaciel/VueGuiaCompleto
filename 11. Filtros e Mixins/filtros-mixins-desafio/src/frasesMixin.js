export default {
    methods: {
        trocarEspacoMixin() {
            return this.frase.split(' ').join(',');
        },
        contarPalavrasMixin() {
            return this.frase.split(' ').map(palavra => palavra + ' (' + palavra.length + ') ').join('');
        }
    }
}