function wordCount(str) {
  //   return str.split(" ").length;
  let counter = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") counter++;
  }
  return counter;
}

console.log(wordCount("Hello world"));
console.log(wordCount("one 22 three"));
