const str = "le reacteur c'est super !";
let counter = 0;

// début de votre code
counter = str.split("").filter((char) => char === "e" || char === "r").length;
// fin de votre code

console.log(counter);
