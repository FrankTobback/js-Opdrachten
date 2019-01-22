// array

let tab = [-2, 1, 4];

/* display knop gelinkt aan functie, Math.floor returns value of x rounded down to its nearest integer, 
Math.random() returns random number between 0 en 1. 
tab.length makes calculation for every number in the array */

document.getElementById('optellen').onclick = function add() {
    let x = Math.floor(Math.random()*tab.length);
    alert(tab[x] + 2);
};

