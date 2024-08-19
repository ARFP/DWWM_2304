const apiUrl = "https://arfp.github.io/tp/web/html-css-js/02-cardgame/cardgame.json";

fetch(apiUrl).then((reponse) => {
    return reponse.json();
}).then((json) => {
    console.log(json);
}).catch((error) => {
    console.error(error);
});

async function fetchUrl() {
    let reponse = await fetch(apiUrl);
    let json = await reponse.json();
    
    console.log(json);
    console.log("Bonjour");
}

fetchUrl();
