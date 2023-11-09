var notes = [12.12, 12.15, 9.09, 14, 15]; // tableau d'entiers

console.log(notes);

// les 3 fonctions suivantes sont équivalentes.
var fonctionTri = (a,b) => a - b; // expression lambda
var fonctionTri2 = (a,b) => { return a - b }; // fonction lambda
var fonctionTri3 = function(a,b) { return  a - b }; // fonction anonyme

notes.sort(fonctionTri); // tri des vlauers par ordre croissant
console.log(notes);

notes.sort(fonctionTri2); // tri des vlauers par ordre croissant
console.log(notes);

notes.sort(fonctionTri3); // tri des vlauers par ordre croissant
console.log(notes);



var valeurDeDepart = 0;

// expression lambda permettant d'effectuer un calcul sur tous les éléments d'un tableau.
// accumulateur = stocke le résultat
// valuerCourante = valeur courante dans le tableau
var fonctionSomme = (accumulateur, valeurCourante) => accumulateur + valeurCourante;

// https://www.youtube.com/watch?v=snhaYhafUXE
// calcule la somme de tous les éléments du tableau.
var somme = notes.reduce(fonctionSomme, valeurDeDepart);

// calcul de la moyenne des valeurs du tableau
var moyenne = somme / notes.length;
console.log(somme, moyenne);
