/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
let nomiEstratti = []

// Dichiara la funzione qui.
function nomi(array,lettera){
    for(let i=0; i < array.length; i++){
        if(array[i][0].toUpperCase() === lettera.toUpperCase()){
            nomiEstratti.push(names[i])
        }

    }


}


// Invoca la funzione qui e stampa il risultato in console
nomi(names,"L")


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
console.log(nomiEstratti);
