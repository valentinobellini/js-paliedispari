//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.





//let prompt per chidere all'utente di scegleire tra pari o dispari
let userChoice = prompt("scegli tra pari o dispari");
console.log("User Choice: ", userChoice);


//let prompt per chidere all'utente di scegliere un numero da 1 a 5
let userNumber = parseInt(prompt("scegli un numero da 1 a 5"));
console.log("User Number: ", userNumber);


//dichiara la funzione per generare un numero random da 1 a 5 per il computer
function randomNumber() {
    let machineNumber = Math.floor(Math.random() * 5) + 1;
    console.log("Machine Number: ", machineNumber);

    return machineNumber;
}

let machineNumber = randomNumber();

let sum = userNumber + machineNumber;
console.log("Sum: ", sum);

//funzione per stabilire se la somma è pari o dispari
function isEvenOrOdd(sum) {
    if (sum % 2 === 0) {
        return "pari";
    } else {
        return "dispari";
    }
}

console.log("La somma è: ", isEvenOrOdd(sum));


//dichiariamo il vincitore
if (isEvenOrOdd(sum) === userChoice) {
    console.log("Hai vinto!");
} else {
    console.log("Hai perso!");
}