var toto;
var prenoms = ['Pierre', 'Paul', 'Jacques', 'Béatrice', 'Beatrice', 'Julia', 'Julia'];

prenoms.push('Guillaume'); // ajoute un élément à la fin du tableau

//console.log(prenoms);

var toto = prenoms.pop(); // supprime le dernier élément du tableau et le retourne dans la variable toto

prenoms.unshift("Olivier"); // ajoute l'élément au début du tableau

console.log(toto, prenoms);

toto = prenoms.shift(); // supprime le premier élément du tableau et le retourne dans la variable toto

console.log(toto, prenoms);
