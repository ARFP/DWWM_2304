import { Db } from './Db.js';
import { Card } from './Card.js';


const apiUrl = "https://arfp.github.io/tp/web/html-css-js/02-cardgame/cardgame.json";

const { createApp } = Vue;

const cardgameApp = {
    data() {
        return  {
            cards: []
        }
    },
    async mounted() {
        let json = await Db.fetchJson(apiUrl);
        
        for(let item of json) {
            let c = new Card(item);
            this.cards.push(c);
        }
        
        console.log(this.cards);

    },
    methods: {
        
    }
}

createApp(cardgameApp).mount('#app');
