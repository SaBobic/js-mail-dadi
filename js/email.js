// Dichiaro la lista delle email
const emails = ["a@email.com", "b@email.com", "c@email.com", "d@email.com", "e@email.com", "f@email.com", "g@email.com"];

// Dichiaro l'input dell'utente
const emailInput = prompt("Inserisci la tua email per accedere", "a@email.com");

// Dichiaro il messaggio di benvenuto
let welcomeMessage;

// Confronto l'input dell'utente con l'array

let isValid = true;

for (let i = 0; i < emails.length && isValid; i++){
    if (emailInput === emails[i]){
        welcomeMessage = "Benvenuto";
        isValid = false;
    } else{
        welcomeMessage = "Spiacenti, la tua email non è presente nei nostri sistemi.";
    }
}
console.log(welcomeMessage);