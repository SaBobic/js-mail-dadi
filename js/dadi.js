// Dichiaro i generatori di numeri (casuali da 1 a 6) di utente e computer
const userNumber = Math.floor(Math.random() * 6 + 1);
const computerNumber = Math.floor(Math.random() * 6 + 1);
console.log("Il tuo numero è " + userNumber);
console.log("Il numero del computer è " + computerNumber);

// Dichiaro il messaggio di vittoria
let resultMessage = "Complimenti, hai vinto!";

// Confronto i numeri, per modificare resultMessage se l'utente ha perso o pareggiato 
if (userNumber < computerNumber){
    resultMessage = "Peccato, hai perso!";
} else if (userNumber === computerNumber){
    resultMessage = "Pareggio!";
}

console.log(resultMessage);