var villes = [
    { "city_id": 2, "city_name": "Paris",       "country_code": "BE" },
    { "city_id": 1, "city_name": "Lyon",        "country_code": "FR" }, 
    { "city_id": 3, "city_name": "Toulouse",    "country_code": "FR" },
    { "city_id": 4, "city_name": "Marseille",   "country_code": "FR" },
    { "city_id": 5, "city_name": "Mulhouse",    "country_code": "FR" }
];

// expression lambda pour le tri des identifiants par ordre croissant
var fonctiontri = (a,b) => a.city_id - b.city_id;

// fonction lambda permettant le tri des objets par nom de ville et par ordre croissant
var fonctiontriNomVille = (a,b) => {
    if(a.city_name > b.city_name) {
        return 1; 
    } else if(a.city_name < b.city_name) {
        return -1;
    } else {
        return 0;
    }
};

var villestriées = villes.sort(fonctiontriNomVille);

console.log(villestriées);

console.log("Mulhouse" < "Mulhausen");
