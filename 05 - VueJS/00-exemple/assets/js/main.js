const { createApp } = Vue;

const appExemple = {
    data() {
        return  {
            nombre: 0,
        }
    },
    methods: {
        clickBouton() {
            this.nombre++; 
        }
    }
}

createApp(appExemple).mount('#app');


// EQUIVALENT EN PUR JS
const bouton = document.getElementById("bouton");
const resultat = document.getElementById('resultat');

bouton.addEventListener('click', () => {
    resultat.innerHTML = parseInt(resultat.innerHTML) + 1;
});

