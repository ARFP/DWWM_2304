/* App 10000 mètres */

import { Database } from "./Database.js"
import { Participant } from "./Participant.js";

const jsonUrl = './data/resultats.json';

const app = {
    data() {
        return {
            dataSource: [],
            participants: [],
            countries: [],
            selectedCountries: [],
        }
    },
    async mounted() {
        let data = await Database.fetchFile(jsonUrl);

        for(let aParticipant of data) {
            let newParticipant = new Participant(aParticipant);
            this.participants.push(newParticipant);
            this.dataSource.push(newParticipant);
            this.countries.push(newParticipant.country);
            // ou this.countries.push(aParticipant.pays);
        }


        this.countries.sort();
        this.participants.sort((a, b) => a.time - b.time);
        this.dataSource.sort((a, b) => a.time - b.time);
        console.log(this.countries);
        console.log(this.participants);
    },
    computed: {
        numberOfParticipants() {
            return this.dataSource.length;
        },
        winner() {
            return this.dataSource[0];
        }
    },
    methods: {
        filterCountries() {
            if(this.selectedCountries.length > 0) {
                this.participants = this.dataSource.filter(p => this.selectedCountries.includes(p.country));
            } else {
                this.participants = [...this.dataSource]; // spread operator
            }
            
            this.participants.sort((a, b) => a.time - b.time);
        }
    }
}

Vue.createApp(app).mount('#app');