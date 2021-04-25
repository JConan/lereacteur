const isLowerCaseLetter = /[a-z]/;
const isUpperCaseLetter = /[A-Z]/;
const rotateCharCode = (char, startCode) =>
  startCode + ((char.charCodeAt(0) - startCode + 13) % 26);

const rotateChar = (char) =>
  isLowerCaseLetter.test(char)
    ? String.fromCharCode(rotateCharCode(char, "a".charCodeAt(0)))
    : isUpperCaseLetter.test(char)
    ? String.fromCharCode(rotateCharCode(char, "A".charCodeAt(0)))
    : char;

export default (str) => str.split("").map(rotateChar).join("");
