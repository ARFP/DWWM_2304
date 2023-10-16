const LA_MAJORITE = 18;

const verifierMajorite = (_age) => {
    return new Promise((resoudre, rejeter) => {
        if(typeof(_age) != "number") {
            rejeter("L'âge entré n'est pas valide")
        }
        else if(_age >= LA_MAJORITE) {
            resoudre("Vous êtes majeur")
        } else {
            rejeter("Vous êtes mineur")
        }
    });
}

const nombreAnneesAvantRetraite = (_age) => {
    return new Promise((resoudre, rejeter) => {
        if(_age < 64) {
            resoudre("Il vous reste X Années avant la retraite");
        } else if(_age > 64) {
            resoudre("Vous êtes à la retraite depuis X années");
        } else {
            rejeter("Vous êtes à la retraite cette année !");
        }
        
    })
}

verifierMajorite(18)
.then((reponse) => {
    console.log("OK : " + reponse)
    return reponse;
})
.catch((reponse) => {
    console.error("ERREUR : " + reponse)
});


console.log("Bonjour ! ");