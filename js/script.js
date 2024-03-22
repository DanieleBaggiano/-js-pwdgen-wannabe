// chiedo all'utente il suo nome
const userName = prompt ("Come ti chiami?");  // string
console.log (userName, typeof userName);

// chiedo all'utente il suo cognome
const userSurname = prompt ("Qual'è il tuo cognome?"); // string
console.log (userSurname, typeof userSurname);

// chiedo all'utente il suo colore preferito
const userColor = prompt ("Qual'è il tuo colore preferito?"); // string
console.log (userColor, typeof userColor);

// generare un numero random
let userNumber = Math.floor((Math.random() * 100) + 1); // number


//parte logica
const userPassword = userName + userSurname + userColor + userNumber; // number

// stampo i risultati
const resultMessage = `Ho generato la tua password ed è: ${userPassword}`;
document.getElementById ("result").innerHTML = resultMessage;



