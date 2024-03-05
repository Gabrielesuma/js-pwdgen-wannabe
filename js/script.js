let userName = prompt('Qual è il tuo nome?');
let lastName = prompt('Qual è il tuo cognome?');
let favColor = prompt('Qual è il tuo colore preferito?');
let message = `${userName}${lastName}${favColor}`;
document.getElementById('person').innerHTML = message + '23';