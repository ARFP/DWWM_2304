const AGE_RETRAITE = 64;

async function estRetraite(age) {
    if(age < AGE_RETRAITE) {
        return 'Pas à la retraite'
    }
    else if(age > AGE_RETRAITE) {
        return 'déjà à la retraite'
    }
    else {
        // erreur
        throw new Error('A la retraite, qu\'est ce que tu fais là ?');
    }
}

async function afficherResultat() 
{
    let resultat = await estRetraite(42);

    console.log(resultat)
    console.log('du texte !!!');
}


afficherResultat();