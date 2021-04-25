function reverseString(str) {
  let result = "";
  for (let i = 1; i <= str.length; i++) {
    result += str[str.length - i];
  }
  return result;
}

console.log(reverseString("Le Reacteur"));
console.log(reverseString("I Love Code"));
console.log(reverseString("Hello World and Coders"));
