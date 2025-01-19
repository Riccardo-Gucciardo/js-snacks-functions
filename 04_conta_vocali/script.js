/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
const vocali= "aeiouAEIOU"
let contatore = 0

// Dichiara la funzione qui.
function lettura(stringa){
    for(let i = 0; i < stringa.length; i++){

        for(let k = 0;k < vocali.length; k++){

        
        if(stringa[i] === vocali[k])
            contatore++
        }

    }
    
}


// Invoca la funzione qui e stampa il risultato in console
lettura(word)


//Risultato atteso se si passa 'javascript': 3 (a, a, i)
console.log(contatore);
