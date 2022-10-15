new Vue({
	el: '#desafio',
	data: {
		jogo: {
			iniciado: false,
			finalizado: false,
			jogador: {
				identificador: 'J',
				vida: 100,
				vencedor: false
			},
			monstro: {
				identificador: 'M',
				vida: 100,
				vencedor: false
			},
			jogadas: []
		}
	},
	methods: {
		iniciarJogo() {
			this.jogo.iniciado = true;
			this.jogo.finalizado = false;
			this.jogo.jogador.vida = 100;
			this.jogo.monstro.vida = 100;
			this.jogo.jogador.vencedor = false;
			this.jogo.monstro.vencedor = false;						
			this.jogo.jogadas = [];
		},
		ataque() {
			let ataqueJogador = this.gerarNumero(5, 10);
			let ataqueMonstro = this.gerarNumero(6, 12);

			this.atacarMonstro(ataqueJogador);
			this.atacarJogador(ataqueMonstro);
			this.verificarResultado();
		},
		ataqueEspecial() {
			let ataqueJogador = this.gerarNumero(6, 15);
			let ataqueMonstro = this.gerarNumero(6, 12);

			this.atacarMonstro(ataqueJogador);
			this.atacarJogador(ataqueMonstro);
			this.verificarResultado();
		},
		curar() {
			let vidaJogador = this.gerarNumero(5, 10);
			let ataqueMonstro = this.gerarNumero(2, 6);

			this.curarJogador(vidaJogador);
			this.atacarJogador(ataqueMonstro);
			this.verificarResultado();
		},
		desistir() {
			this.jogo.iniciado = false;
			this.jogo.finalizado = false;
		},

		atacarMonstro(valorAtaque) {
			this.jogo.monstro.vida = this.calcularVida(this.jogo.monstro.vida, valorAtaque);
			this.adicionarJogada(this.jogo.jogador.identificador, `JOGADOR ATINGIU MONSTRO COM ${valorAtaque}`);
		},
		atacarJogador(valorAtaque) {
			this.jogo.jogador.vida = this.calcularVida(this.jogo.jogador.vida, valorAtaque);
			this.adicionarJogada(this.jogo.monstro.identificador, `MONSTRO ATINGIU JOGADOR COM ${valorAtaque}`);
		},
		curarJogador(vidaJogador) {
			this.jogo.jogador.vida = this.calcularVida(this.jogo.jogador.vida, vidaJogador * -1);
			this.adicionarJogada(this.jogo.jogador.identificador, `JOGADOR GANHOU FORÇA DE ${vidaJogador}`);
		},
		verificarResultado() {
			if (this.jogo.jogador.vida == 0 || this.jogo.monstro.vida == 0) {
				this.jogo.iniciado = false;
				this.jogo.finalizado = true;
				this.jogo.jogador.vencedor = this.jogo.jogador.vida > 0;
				this.jogo.monstro.vencedor = this.jogo.monstro.vida > 0;
			}
		},	

		calcularVida(valorVida, valorAtaque) {
			valorVida -= valorAtaque;
			if (valorVida < 0)
				valorVida = 0
			else if (valorVida > 100) 
				valorVida = 100;
			return valorVida;
		},
		adicionarJogada(identificador, mensagem) {
			let jogada = {
				identificador,
				mensagem
			}
			this.jogo.jogadas.push(jogada);			
		},
		gerarNumero(inicial, final) {
			return Math.floor(Math.random() * (final - inicial + 1)) + inicial;
		}		
	},
	computed: {
		vidaJogador() {
			return `width: ${this.jogo.jogador.vida}%`;
		},
		vidaMonstro() {
			return `width: ${this.jogo.monstro.vida}%`;
		},
		vidaJogadorCor() {
			return this.jogo.jogador.vida < 20 ? 'bg-danger' : 'bg-success';
		},
		vidaMonstroCor() {
			return this.jogo.monstro.vida < 20 ? 'bg-danger' : 'bg-success';
		}
	}
})
