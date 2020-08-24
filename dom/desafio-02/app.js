new Vue({
    el: '#desafio',
    data: {
        valor1: '',
        valor2: ''
    },
    methods: {
        exibirAlerta() {
            alert('Olha o alerta!')
        },
        mudarValor(e) {
            this.valor1 = e.target.value
        },
        mudarValor2(e) {
            this.valor2 = e.target.value
        }
    }
})