let var1 = 10;
let var2 = 20;

// Début de votre code
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// destructuring assignement
// https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/
[var1, var2] = [var2, var1];
// Fin de votre code

console.log(var1); // Doit afficher 20
console.log(var2); // Doit afficher 10
