// chiedo all'utente il suo nome
const userName = prompt ("Qual'è il tuo nome?");  // string
console.log (userName, typeof userName);

// chiedo all'utente il suo cognome
const userSurname = prompt ("Qual'è il tuo cognome?"); // string
console.log (userSurname, typeof userSurname);

// chiedo all'utente il suo colore preferito
const userColor = prompt ("Qual'è il tuo colore preferito?"); // string
console.log (userColor, typeof userColor);

// generare un numero random
let userNumber = Math.floor((Math.random() * 100) + 1); // number
console.log (userNumber, typeof userNumber);

//parte logica
const userPassword = userName + userSurname + userColor + userNumber; // number
console.log (userPassword, typeof userPassword);

// preparo i risultati
const resultMessage = `Ho generato la tua password ed è: ${userPassword}`;
console.log (resultMessage, typeof resultMessage);

// stampo i risultati in pagina
document.getElementById ("result").innerHTML = resultMessage;



