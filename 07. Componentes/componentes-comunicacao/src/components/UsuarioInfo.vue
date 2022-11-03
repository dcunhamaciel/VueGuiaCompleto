<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{ inverterNome() }}</strong></p>
        <p>Idade do Usuário: <strong>{{ idade }}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarNomeFn()">Reiniciar Nome (Callback)</button>
    </div>
</template>

<script>
export default {
    props: {
        nome: {
            type: String,
            //required: true,
            default: 'Anônimo'
            //default: function() {
                //return Array(10).fill(0).join(',');
            //}
        },
        idade: Number,
        reiniciarNomeFn: Function
    },
    methods: {
        inverterNome() {
            return this.nome.split('').reverse().join('');
        },
        reiniciarNome() {
            const nomeAntigo = this.nome;
            this.nome = "Diego";
            this.$emit('nomeMudou', { 
                nomeNovo: this.nome, 
                nomeAntigo
            });
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
