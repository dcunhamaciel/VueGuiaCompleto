<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input type="text" size="lg" v-model="usuario.nome" placeholder="Informe o Nome"></b-form-input>				
			</b-form-group>
			<b-form-group label="E-mail:">		
				<b-form-input type="text" size="lg" v-model="usuario.email" placeholder="Informe o E-mail"></b-form-input>
			</b-form-group>						
		</b-card>
		<hr>
		<b-button @click="salvarUsuario" size="lg" variant="primary">Salvar</b-button>
		<b-button @click="obterUsuarios" size="lg" variant="success" class="ml-2">Obter Usuários</b-button>
		<hr>
		<b-list-group>
			<b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
				<strong>ID: </strong>{{ id }}
				<br>
				<strong>Nome: </strong>{{ usuario.nome }}
				<br>
				<strong>E-mail: </strong>{{ usuario.email }}
				<br>
				<b-button @click="carregarUsuario(id)" size="lg" variant="warning">Carregar</b-button>
				<b-button @click="excluirUsuario(id)" size="lg" variant="danger" class="ml-2">Excluir</b-button>
			</b-list-group-item>
		</b-list-group>
	</div>	
</template>

<script>
// import Axios from 'axios';

export default {
	data() {
		return {
			usuarios: [],
			id: null,
			usuario: {
				nome: '',
				email: ''
			}
		}
	},
	methods: {
		limpar() {
			this.usuario.nome = '';
			this.usuario.email = '';
			this.id = null;
		},
		salvarUsuario() {			
			const metodo = this.id ? 'patch' : 'post';
			const finalUrl = this.id ? `/${this.id}.json` : '.json';

			this.$http[metodo](`/usuarios${finalUrl}`, this.usuario)
				.then(() => this.limpar());
		},
		obterUsuarios() {
			this.$http('usuarios.json')
				.then(resp => {
					this.usuarios = resp.data;
				});

			// Axios('https://curso-vue-3e445-default-rtdb.firebaseio.com/usuarios.json')
			// 	.then(resp => {
			// 		this.usuarios = resp.data;
			// 	});				
		},
		carregarUsuario(id) {
			this.id = id;
			this.usuario = { ...this.usuarios[id] };
		},
		excluirUsuario(id) {
			this.$http.delete(`/usuarios/${id}.json`)
				.then(() => this.limpar());
		}
	}
	// created() {
	// 	this.$http.post('usuarios.json', {
	// 		nome: 'Maria',
	// 		email: 'maria_maria@gmail.com'
	// 	}).then(res => console.log(res));
	// }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
