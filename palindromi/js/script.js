//Palidroma
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma




//let prompt per chidere parola all'utente
let userWord = prompt("inserisci una parola");
console.log(userWord);


//dichiara la funzione isPalindrome
function isPalindrome(word) {

    //ne splitta i caratteri creando un array, reversa e riunisce i caratteri creando una nuova stringa
    let reverseWord = userWord.split("").reverse().join("");
    console.log(reverseWord);

    //verifica se la parola inversa è palindroma o no comparandola alla parola orginiale e stampa un console log
    if (userWord === reverseWord) {
        console.log("la parola è palindroma");
    } else {
        console.log("la parola non è palindroma");
    }
}

isPalindrome(userWord);




