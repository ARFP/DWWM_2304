//IMPORTATIONS

import { MaDate } from "./MaDate.js";
import { Signe } from "./Signe.js";

// CONSTANTES

/** @var {HTMLElement} inputDateNaissance champ de saisie de la date de naissance*/
const inputDateNaissance = document.getElementById("dateNaissance");
const buttonCalculer = document.getElementById("calculer");
const divResultatDate = document.getElementById("resultatDate");
const divResultatIntervalle = document.getElementById("resultatIntervalle")
const divResultatSigne = document.getElementById('resultatSigne');
// EVENEMENTS

buttonCalculer.addEventListener("click",() => {

    let dateNaissance = new Date(inputDateNaissance.value);
    let maDate = new MaDate(dateNaissance)
    let signe = new Signe(dateNaissance); 

    if(maDate.estDansLePasse()) {
        divResultatDate.innerHTML  = "Vous êtes né le ";
        divResultatDate.innerHTML += dateNaissance.toLocaleDateString("fr");
        divResultatDate.innerHTML += " à ";
        divResultatDate.innerHTML += dateNaissance.toLocaleTimeString("fr");

        divResultatIntervalle.innerHTML = "Il s'est écoulé "
                                        + maDate.intervalleDates()
                                        + " années depuis votre naissance.";
        divResultatSigne.innerHTML = "Votre signe astrologique : " + signe.calculerSigne();
        
    } else {
        divResultatDate.innerHTML = "Veuillez saisir une date dans le passé.";
    }
});
