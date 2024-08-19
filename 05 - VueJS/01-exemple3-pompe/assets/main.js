const app = {
    data() {
        return {
            prixLitre: 1.50,
            inputReadonly: false,
            labelbouton: "Lancer",
            distribution: false,
            quantiteDistribuee: 0,
            intervalle: null
        }
    },
    computed: {
       prixAPayer() {
        return (this.prixLitre * this.quantiteDistribuee).toFixed(2)
       },
       quantiteDistribueeArrondie() {
        return this.quantiteDistribuee.toFixed(2)
       }
    },
    methods: {
        distribuer() {
            if(this.distribution) {
                this.labelbouton = "Lancer"
                clearInterval(this.intervalle);
            } else {
                this.quantiteDistribuee = 0;
                this.labelbouton = "Arrêter"
                this.intervalle = setInterval(() => {
                    this.quantiteDistribuee += 0.09;
                }, 100);
            }

            this.inputReadonly = !this.inputReadonly
            this.distribution = !this.distribution
        }
    }
}

Vue.createApp(app).mount('#app');