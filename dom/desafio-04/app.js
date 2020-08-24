new Vue({
	el: '#desafio',
	data: {
		aplicar: true,
		classeCSS: 'c1',
		aplicarGirar: false,
		cor: 'cyan'
	},
	methods: {
		iniciarEfeito() {
			
		},
		iniciarProgresso() {

		}
	},
	computed: {
		efeito() {
			return {
				destaque: this.aplicar,
				encolher: !this.aplicar
			}
		},
		meuEstilo() {
			return {
				backgroundColor: this.cor
			}
		}
	}
})
