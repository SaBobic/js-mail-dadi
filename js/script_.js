// Dichiaro la lista delle email
const emails = ["a@email.com", "b@email.com", "c@email.com", "d@email.com", "e@email.com", "f@email.com", "g@email.com"];

// Dichiaro l'input dell'utente
const emailInput = prompt("Inserisci la tua email per accedere", "a@email.com");

// Dichiaro il messaggio di benvenuto
let welcomeMessage = "Benvenuto";

// Confronto l'input dell'utente con l'array
if (emails.includes(emailInput)){
    console.log(welcomeMessage);
} else {
    welcomeMessage = "Spiacenti, la tua email non è presente nei nostri sistemi.";
    console.log(welcomeMessage);
}