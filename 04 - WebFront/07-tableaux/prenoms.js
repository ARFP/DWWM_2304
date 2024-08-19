var prenoms = ['Pierre', 'Paul', 'Jacques', 'Béatrice', 'Beatrice', 'Julia', 'Julia'];

// Créer un nouveau tableau avec les prénoms en minuscules.
var prenomsEnMinuscule = prenoms.map(p => p.toLowerCase())

// équivalent algorithmique
var toto = [];
for(let p of prenoms) {
    toto.push(p.toLowerCase());
}

// affichage du résultat
console.log(prenomsEnMinuscule, prenoms);


console.log(prenoms);

prenoms.sort(); // tri du tableau par ordre alphabétique
console.log(prenoms);
var prenomsSansDoublons = new Set(prenoms); // création d'une collection à partir du tableau prenoms. Les doublons sont supprimés.
console.log(prenomsSansDoublons);
