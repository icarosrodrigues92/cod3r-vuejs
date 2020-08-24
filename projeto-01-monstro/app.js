new Vue({
    el: '#app',
    data: {
        running: false,
        playerLife: 100,
        playerMana: 100,
        monsterLife: 100
    },
    computed: {
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0
        },
        getResult() {
            this.running = false
            if (this.playerLife == 0) {
                return "Você perdeu X__X"
            } else if (this.monsterLife == 0) {
                return "Você ganhou ^__^"
            }
        }
    }, 
    methods: {
        startGame() {
            this.running = true
            this.playerLife = 100
            this.playerMana = 100
            this.monsterLife = 100
            this.minDmg = 1,
            this.maxD12 = 12,
            this.maxD20 = 20,
            this.manaCost = 23
        },
        endGame() {
            this.running = false
        },
        attack(isMagic) {
            this.setWound(this.minDmg, this.maxD12, isMagic)
            console.log("HeeyyaaaaAAAa!!!")
            this.getAttacked();
        },
        setWound(min, max, isMagic) {
            const extraDmg = isMagic ? this.useMagic(min, this.maxD20) : 0
            const wound = this.getRandom(min + extraDmg, max + extraDmg)
            this.monsterLife = Math.max(this.monsterLife - wound,  0)
        },
        getAttacked() {
            this.playerLife = Math.max(this.playerLife - this.getRandom(this.minDmg, this.maxD20),  0)
        },
        useMagic(min, max) {
            var magicDmg = 0
            if (this.playerMana >= this.manaCost) {
                this.playerMana = Math.max(this.playerMana - this.manaCost,  0)
                magicDmg = this.getRandom(min, max)
                console.log("Fireball!")
            }
            return magicDmg
        },
        getRandom(min, max) {
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },
        heal() {

        }
    },
    watch: {

    }
})