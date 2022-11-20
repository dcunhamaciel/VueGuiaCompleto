<template>
    <div class="usuario">
        <h2>Usuários</h2>
        <hr>
        <button @click="irParaInicio" sucesso>Voltar</button>
    </div>
</template>

<script>
export default {
    methods: {
        irParaInicio() {
            this.$router.push('/');
            //this.$router.push( { path: '/' } );
        }
    }
}
</script>