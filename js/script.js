// Descrizione:
// Visualizzare in pagina 5 numeri casuali.
//  Da lì parte un timer di 30 secondi. 
//  Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.



// array che conterrà i 5 numeri random
const numArray = [];
// array che conterrà i numeri inseriti dall'utente
const userNumArray = [];
// array che conterrà i numeri indovinati dall'utente
const guessedNum = [];
// contatore timer
let second = 3;
// variabile timer
const timer = document.getElementById('timer');


//richiamo la funzione per generare i numeri random
numGenerator(numArray);
console.log(numArray);

// stampo i numeri nella pagina
document.getElementById('numeri-random').innerHTML = numArray;

// richiamo la funzione timer
const clock = setInterval(myTimer, 1000);



// funzione countdown
function myTimer() {
    timer.innerHTML = second;
    if (second == 0) {
        clearInterval(clock);
        alert('tempo scaduto!');
        timer.innerHTML = '';
        document.getElementById('numeri-random').innerHTML = '';

        for (let i = 0; i < numArray.length; i++) {
            const num = parseInt(prompt('inserisci i numeri uno alla volta'));
            userNumArray.push(num);

            if (numArray.includes(userNumArray[i]) ) {
                guessedNum.push(num);
            }
        }
        console.log(guessedNum);
        console.log(userNumArray);

        // richiamo la funzione
        score();
    }
    second--;
}


// funzione per generare 5 numeri casuali
function numGenerator (array) {
    while (array.length < 5) {
        const numRandom = Math.floor(Math.random() * 100) + 1;
    
        if (!array.includes(numRandom)) {
            array.push(numRandom);
        }
    }
}


// funzione punteggio
function score () {
    if(guessedNum.length == numArray.length) {
        alert('complimenti! hai vinto!');
    } else if (guessedNum.length < 1) {
        alert('non hai indovinato nessun numero. Ritenta')
    } else {
        alert(`Hai indovinato ${guessedNum.length} numeri. I numeri indovinati sono ${guessedNum}.`);
    }
}