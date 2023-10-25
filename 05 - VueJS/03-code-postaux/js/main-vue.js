import { Db } from './Db.js'; 

const apiURL = 'https://arfp.github.io/tp/web/html-css-js/03-zipcodes/zipcodes.json';

const myApp = {
    data() {
        return {
            zipCodes: [],
            result: [],
            zipCode: ''
        }
    },
    async mounted() {
        this.zipCodes = await Db.fetchJson(apiURL);
        console.log(this.zipCodes);
    },
    methods: {
        validerClic() {
            this.result = this.zipCodes.filter(city => city.codePostal == this.zipCode)
        }
    }
}

Vue.createApp(myApp).mount('#toto');