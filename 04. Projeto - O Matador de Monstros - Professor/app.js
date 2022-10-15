new Vue({
	el: '#app',
	data: {
        running: false,
        playerLife: 100,
        monsterLife: 100
    },
    computed: {
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0;
        }
    },
	methods: {
        startGame() {
            this.running = false;
            this.playerLife = 100;
            this.monsterLife = 100;
        },
        attack(especial) {
            this.hurt('monsterLife', 5, 10, especial);
            this.hurt('playerLife', 7, 12, false);
        },
        hurt(atr, min, max, especial) {
            const plus = especial ? 5 : 0;
            const hurt = this.getRandom(min + plus, max + plus);
            this[atr] = Math.max(this[atr] - hurt, 0);
        },
        geRandom(min, max) {
            const value = Math.random() * (max - min) + min;
            return Math.round(value);
        }
    },
    watch: {
        hasResult(value) {
            if (value)
                this.running = false;
        }
    }
});
