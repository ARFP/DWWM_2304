/*
DOC v-model: https://vuejs.org/guide/essentials/forms.html
*/


const app = {
    data() {
        return {
            nom: 'Doe',
            message: '',
            categorie: '',
            categories: [],
            destinataires: [],
            ouinon: '',
            don: '',
            couleur: '',
            date: ''
        }
    },
    mounted() {
       
    },
    methods: {
        afficherConsole() {
            console.log(this.nom);
            console.log(this.message);
            console.log(this.ouinon);
        }
    }
}

Vue.createApp(app).mount("#app");