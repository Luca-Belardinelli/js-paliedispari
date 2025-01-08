//Palidroma
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma


// Chiedi all'utente di inserire una parola

let user = prompt("Inserisci una parola per verificare se è palindroma:");


// Funzione per verificare se una parola è palindroma
function palindrome(word) {

    // Confronta la parola  invertita
    
    return word === word.split('').reverse().join('');

}



// Verifica se la parola è palindroma
if (palindrome(user)) {

    console.log('La parola è palindroma');

} else {

    console.log('La parola non è palindroma');

}
