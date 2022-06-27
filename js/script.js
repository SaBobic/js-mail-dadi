// Dichiaro i generatori di numeri (casuali da 1 a 6) di utente e computer
const userNumber = Math.floor(Math.random() * 6 + 1);
const computerNumber = Math.floor(Math.random() * 6 + 1);
console.log("Il tuo numero è " + userNumber);
console.log("Il numero del computer è " + computerNumber);

// Dichiaro il messaggio di vittoria, sconfitta o pareggio dell'utente
let resultMessage = "Complimenti, hai vinto!";

// Confronto i numeri, per vedere chi ha vinto
if (userNumber > computerNumber){
    console.log(resultMessage);
} else if (userNumber < computerNumber){
    resultMessage = "Peccato, hai perso!";
    console.log(resultMessage);
} else {
    resultMessage = "Pareggio!";
    console.log(resultMessage);
}