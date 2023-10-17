const appExemple = {
    data() {
        return  {
            nombre: 0,
            prenom: 'Mike'
        }
    },
    computed: {
        nombreDouble() {
            return this.nombre * 2;
        },
        nombreQuadruple() {
            return this.nombreDouble * 2;
        },
        prenomMajuscule() {
            return this.prenom.toUpperCase()
        }
    },
    methods: {
        clickBouton() {
            this.nombre++;
        }
    }
}

Vue.createApp(appExemple).mount('#app');


// VERSION PUR JS

const bouton = document.getElementById("bouton");
const resultat = document.querySelector("#resultat");

bouton.addEventListener('click', () => {
    let nombre = parseInt(resultat.innerText);

    resultat.innerHTML = nombre + 1;  
});

