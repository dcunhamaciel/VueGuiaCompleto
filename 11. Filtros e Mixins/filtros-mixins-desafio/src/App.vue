<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>		
		<p>{{ frase }}</p>

		<p>{{ frase | trocarEspaco }}</p>		
		<p>{{ frase | contarPalavras }}</p>

		<p>{{ trocarEspacoComputed }}</p>
		<p>{{ contarPalavrasComputed }}</p>

		<p>{{ trocarEspacoMixin() }}</p>
		<p>{{ contarPalavrasMixin() }}</p>
	</div>
</template>

<script>
import frasesMixin from './frasesMixin.js';

export default {
	mixins: [frasesMixin],
	data() {
		return {
			frase: 'Essa é a frase que será usada nos desafios.'
		}
	},	
	filters: {
		trocarEspaco(valor) {			
			return valor.split(' ').join(',');
		}
	},
	computed: {
		trocarEspacoComputed() {
			return this.frase.split(' ').join(',');
		},
		contarPalavrasComputed() {
			return this.frase.split(' ').map(palavra => palavra + ' (' + palavra.length + ') ').join('');
		}
	}	
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
