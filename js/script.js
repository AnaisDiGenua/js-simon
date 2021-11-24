// Descrizione:
// Visualizzare in pagina 5 numeri casuali.
//  Da lì parte un timer di 30 secondi. 
//  Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.




// array che conterrà i 5 numeri random
let numArray = [];
// array che conterrà i numeri inseriti dall'utente
const userNumArray = [];




// ciclo 5 numeri random
while (numArray.length < 5) {
    const numRandom = Math.floor(Math.random() * 100) + 1;
    
    if (!numArray.includes(numRandom)) {
        numArray.push(numRandom);
    }
}

console.log(numArray);
// stampo i numeri nella pagina
document.getElementById('numeri-random').innerHTML = numArray;


// richiamo la funzione timer
const clock = setInterval(myTimer, 1000);






let second = 3;
// funzione countdown
function myTimer () {
    const timer = document.getElementById('timer');
    timer.innerHTML = second;
        if(second == 0) {
            clearInterval(clock);
            alert('tempo scaduto!');
            timer.innerHTML = '';
            document.getElementById('numeri-random').innerHTML = '';

            for(let i = 0; i <numArray.length; i++) {
                const num = parseInt(prompt('inserisci i numeri uno alla volta'));
            
                userNumArray.push(num);
            }
            console.log(userNumArray);
        }
        second--;
}





