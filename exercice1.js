const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

/*supprission du premier élément "Banana" */

fruits.shift();
console.log(fruits);

/* trie du tableau par ordre alphabétique*/

fruits.sort();
console.log(fruits);

/* ajout de "Kiwi" dans le tableau */

fruits.push("Kiwi");

/* suppression "Apples" en utilisant une autre methode */

fruits.splice(0,1);
console.log(fruits);

/* trie du tableau dans l'ordre inverse */

fruits.reverse();
console.log(fruits);