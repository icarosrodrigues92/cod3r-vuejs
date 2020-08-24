new Vue({
    el: '#desafio',
    data: {
        SEU_NOME: 'ÍCARO RODRIGUES',
        IDADE: 28
    },
    methods: {
        idadeMultiplier(multiplier) {
            return this.IDADE * multiplier
        },
        getRandom() {
            return Math.random()
        }
    }
})