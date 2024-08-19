// VARIABLES ==============================================
const btnValider = document.getElementById("valider");
const inputAge = document.getElementById("age");
const inputPrenom = document.querySelector("#prenom");
const divResultat = document.querySelector("#resultat");
const ageRetraite = 67;

// FONCTIONS===============================================
function agePrenomValide() {
    let prenom = inputPrenom.value.trim();
    let age = inputAge.value;
    return(prenom.length > 0 && age > 0);
}

function estMajeur(){
    return(inputAge.value >= 18)
}

function etatRetraite(){
    let reste;
    if(inputAge.value < ageRetraite){
        reste = ageRetraite - inputAge.value;
        return "Il vous reste <span>" + reste + "</span> année(s) avant la retraite."
    }
    else if(inputAge.value > ageRetraite){
        return "Vous êtes à la retraite depuis <span>" + (inputAge.value - ageRetraite) + "</span> année(s)."
    }
    else{
        return "Vous prenez votre retraite cette année."
    }
}
// EVENEMENTS====================================================

btnValider.addEventListener("click", ()=>{
    if(agePrenomValide()){
        divResultat.innerHTML = `Bonjour <span>${inputPrenom.value}</span>, votre âge est : <span>${inputAge.value}</span>.`;

        if(estMajeur()){
            divResultat.innerHTML += "<p>Vous êtes <span>majeur</span>.</p>"
        }
        else{
            divResultat.innerHTML += "<p>Vous êtes <span>mineur</span>.</p>"
        }

        divResultat.innerHTML += etatRetraite();
    }
    else{
        divResultat.innerHTML = "Compléter ou corriger le formulaire!";
    }
})