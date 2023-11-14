import { JsonDb } from "./JsonDb.js";
import { Cereal } from "./Cereal.js";

const jsonUrl = './cereals.json';

const app = {
    data() {
        return {
            cerealsSource: [],
            cereals: [],
            asc: true, // sens du tri des colonnes
            search : ""
        }
    },
    async mounted() {
        this.cereals = await JsonDb.fetchJson(jsonUrl);
        this.cereals = this.cereals.data;
        this.cereals = this.cereals.map(cereal => new Cereal(cereal));
        console.log(this.cereals);
        this.cerealsSource = [...this.cereals];
        // this.cerealsSource = Array.from(this.cereals); // equivalent de la ligne précédente
    },
    methods: {
        trier(event) {

            // console.log(event.target);
            let attributCereal = event.target.id;
            // console.log(attributCereal);
            this.cereals.sort((a,b) => {
                if(a[attributCereal] > b[attributCereal]){
                    return 1;
                }
                else if(a[attributCereal] < b[attributCereal]){
                    return -1;
                }
                else{
                    return 0;
                }
              })
              if(this.asc == false){
                this.cereals.reverse();
              }
              this.asc = !this.asc;
        },
        filterCereals(){
            console.log("ok");
            this.cereals = this.cerealsSource.filter(cereal => cereal.name.toLowerCase().includes(this.search.toLowerCase().trim()))
        }
    }
}

Vue.createApp(app).mount("#app");
