const villesSource = [
    { "city_id": 2, "city_name": "Paris",       "country_code": "BE" },
    { "city_id": 1, "city_name": "Lyon",        "country_code": "FR" }, 
    { "city_id": 3, "city_name": "Toulouse",    "country_code": "FR" },
    { "city_id": 4, "city_name": "Marseille",   "country_code": "FR" },
    { "city_id": 5, "city_name": "Mulhouse",    "country_code": "FR" }
];

const app = {
    data() {
        return {
            villes: [], // collection de villes
            asc: true // détermine le sens du tri
        }
    },
    mounted() {
        this.villes = villesSource;
    },
    methods: {
        trier(event) {
            //event.target = élément cible de l'évènement
            console.log(event.target.id);
            // event.target.id = attribut "id" de l'élément cible de l'évènement
            let attribut = event.target.id;

            // fonction de tri
            let fonctiontri = (a,b) => {
                if(a[attribut] > b[attribut]) {
                    return 1;
                }
                else if(a[attribut] < b[attribut]) {
                    return -1;
                } else {
                    return 0;
                }
            } 

            // tri des données
            this.villes.sort(fonctiontri);

            // si la valeur de "asc" est "false", on inverse le tri
            if(this.asc === false) {
                this.villes.reverse();
            }

            // inversion du sens du tri pour le prochain clic
            this.asc = !this.asc;
        }
    }
}

Vue.createApp(app).mount("#app");