//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.


//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

const user = prompt(" Vuole essere pari o dispari?")

if (user !== 'pari' && user !== 'dispari'){

    console.log("Scelta non valida, Riprova.")
}

//e inserisce un numero da 1 a 5

const numberUser = parseInt(prompt("inserisca una numero da 1 a 5"))

if (numberUser < 1 || numberUser > 5 ){

    console.log("Numero non valido, Inserisci un numero da 1 a 5.");
}

    console.log("il numero scelto è", numberUser);

//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

function numberCpu() {

    return Math.floor(Math.random() * 5) + 1;
    
}

const numberestrattodalpc = numberCpu();

console.log("il numero della cpu è", numberestrattodalpc);


//Sommiamo i due numeri

const sommanumeri = numberUser + numberestrattodalpc;

console.log("la somma è",sommanumeri);


//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

function pari( sommanumeri) {

    return sommanumeri % 2 === 0;

}

//Dichiariamo chi ha vinto.

if ((sommanumeri && user === 'pari' ) || ( !sommanumeri && user === 'dispari')) {

    console.log("hai vinto!");

}else{

    console.log('ritenta');

}