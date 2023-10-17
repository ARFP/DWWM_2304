let nombre = 1;

let start = new Date();
start = start.getTime();

for(let i = 0; i < 1000000000; i++) {
    nombre++;
    console.log(nombre);
}

let end = new Date();
end = end.getTime();

let duration = end - start;

console.log(duration);
/*
console.log("resultat = " + resultat);
console.log("resultat2 = " + resultat2);*/