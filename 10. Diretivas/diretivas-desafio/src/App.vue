<template>
	<div id="app">
		<h1>Diretivas (Desafio)</h1>
		<hr>
		<button v-quando-1="executar">Executar - Versão 1</button>
		<br>
		<button v-quando-2:click="executar">Executar - Versão 2</button>
		<br>
		<p v-quando-2:mouseenter="mouseEnter" v-quando-2:mouseleave="mouseLeave">Teste mouse event!</p>
	</div>
</template>

<script>
export default {
	directives: {
		'quando-1': {
			bind(el, binding) {
				el.onclick = function() {
					binding.value();
				}	
			}
		},
		'quando-2': {
			bind(el, binding) {
				const tipo = binding.arg;
				const fn = binding.value;

				el.addEventListener(tipo, fn);
			}
		}
	},
	methods: {
		executar() {
			alert('executado!');
		},
		mouseEnter() {
			console.log('Mouse Enter!');
		},
		mouseLeave() {
			console.log('Mouse Leave!');
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

button {
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}
</style>
