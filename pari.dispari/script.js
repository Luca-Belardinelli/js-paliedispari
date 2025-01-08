//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.



//L’utente sceglie pari o dispari 

const user = prompt(" Vuole essere pari o dispari?")

if (user !== 'pari' && user !== 'dispari') 

    console.log("Scelta non valida, Riprova.");

// e inserisce un numero da 1 a 5

const numberUser = parseInt(prompt("inserisca una numero da 1 a 5"))

if (numberUser < 1 || numberUser > 5 )

    console.log("Numero non valido, Inserisci un numero da 1 a 5.");

console.log(numberUser);




//Funzione numero casuale da 1 a 5

// // function number() {

// //     let numbeRandom = Math.floor(Math.random() * 5) + 1

// //     console.log(numbeRandom);

// //     return numbeRandom;

// }




//Funzione per la somma 

function sum(num1, num2){

    const somma = num1 + num2

    // valore booleano per verificare se la somma è para

    let verifica = false;

    console.log(somma);

    if(somma % 2 === 0){

        verifica = true;
    }

    return verifica;
}


//Recuperiamo il numero del pc

let numerocpu = number();


//Sommiamo i due numeri

let somma = sum(numberUser, number);


//Dichiariamo chi ha vinto.

if ((somma && user === 'pari') || ( !somma && user === 'dispari')) {

    console.log("Complimenti, hai vinto!");

} else {

    console.log("Peccato, ritenta sarai più");
}