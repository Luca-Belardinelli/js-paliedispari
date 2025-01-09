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

 function numbercpu(min,max) {

    return  Math.floor(Math.random() * (max- min +1) + min);
    
}

const numbercpu = numberCpuRandom(1,5);

console.log("il numero della cpu è", numbercpu);


 // somma 

const sommaNumeri = numberUser + numbercpu;

console.log("la somma dei numeri è:", sommaNumeri );

// Funzione per verificare se un numero è pari

function pari(sommaNumeri) {
    return sommaNumeri % 2 === 0;
}


//Dichiariamo chi ha vinto.

if ((somma && user === 'pari') || ( !somma && user === 'dispari')) {

    console.log("Complimenti, hai vinto!");

} else {

    console.log("Peccato, ritenta sarai più");
}