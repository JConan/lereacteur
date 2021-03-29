const str = "le reacteur c'est super !";
let counter = 0; // stocke le nombre de e

// début de votre code
counter = str.split("").filter((v) => v === "e").length;

// fin de votre code

console.log(counter);
