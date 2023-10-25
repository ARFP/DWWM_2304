import { Db } from './Db.js';

const myButton = document.querySelector('#btnValid');
const myInput = document.getElementById('inputSearch');
const myDatalist = document.getElementById('zipCodesList');
const myResult = document.getElementById('divResult');

const apiURL = 'https://arfp.github.io/tp/web/html-css-js/03-zipcodes/zipcodes.json';

console.log(myButton, myInput);



let zipCodes = await Db.fetchJson(apiURL);

for (let zipCode of zipCodes) {   
    let option = document.createElement('option');
    option.value = zipCode.codePostal;
    option.innerText = zipCode.nomCommune;
    myDatalist.appendChild(option);
}

myButton.addEventListener('click', () => {
    let zipcode = myInput.value;

    let result = zipCodes.filter(city => city.codePostal == zipcode)
    //let result = zipCodes.filter(city => { return city.codePostal == zipcode})
    //let result = zipCodes.filter(function(city) { return city.codePostal == zipcode})

    console.log(result);

    /* equivalent de filter en version ALGO
    let result2 = []; 
    for (let city of zipCodes) {   
        if(city.codePostal == zipcode) {
            result2.push(city);
        }
    }*/

    myResult.innerText = "";

    for(let city of result) {
        let p = document.createElement('p');
        p.innerText = `Nom de la ville : ${city.nomCommune} . Code postal de la ville: ${city.codePostal}`
        myResult.appendChild(p);
    }

});