let results;

var villes = [
    { "city_id": 2, "city_name": "Bruxelles",   "country_code": "BE" },
    { "city_id": 1, "city_name": "Namur",       "country_code": "BE" }, 
    { "city_id": 3, "city_name": "Toulouse",    "country_code": "FR" },
    { "city_id": 4, "city_name": "Marseille",   "country_code": "FR" },
    { "city_id": 5, "city_name": "Mulhouse",    "country_code": "FR" }
];

// Trouver la ville dont l'identifiant est égal à 3
fonctionRechercheIdentifiant = (ville) => ville.city_id === 3;

results = villes.find(fonctionRechercheIdentifiant);

/*
for(let ville of villes) {
    if(ville.city_id === 3) {
        return ville;
    }
}*/

console.log(results);


// Trouver La ou Les villes dont le pays est "FR"
fonctionRecherchePays = (ville) => ville.country_code === "FR";

results = villes.filter(fonctionRecherchePays);

console.log(results);



// Supprimer la ville dont le nom est "Marseille"
fonctionSupprimerMarseille = (ville) => ville.city_name !== "Marseille";

results = villes.filter(fonctionSupprimerMarseille);

console.log(results);

// Créer un tableau contenant la liste des pays représentés sans doublon.
let pays = [];

let fonctionObtenirListePays = ville => ville.country_code;
pays = villes.map(fonctionObtenirListePays);
pays = new Set(pays); // crée une collection à partir du tableau fourni en paramètre. Les élément en double sont supprimés.

console.log(pays);
/*for(let ville of villes) {
    pays.push(ville.country_code);
}
*/
