const appExemple = {
    data() {
        return  {
            product: 'Cafetière',
            tax: 19.6,
            price: 0
        }
    },
    computed: {
        fullPrice() {
            return this.price * (1 + this.tax / 100)
            //return this.price + (this.price * this.tax / 100);
        },
        roundPrice() {
            return this.fullPrice.toFixed(2);
        }
    },
    methods: {
    }
}

Vue.createApp(appExemple).mount('#app');
