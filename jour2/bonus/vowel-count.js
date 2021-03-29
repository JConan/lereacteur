function vowelCount(str) {
  const vowel = ["a", "e", "i", "o", "u", "y"];
  return str
    .split("")
    .map((c) => vowel.indexOf(c) >= 0)
    .filter((r) => r === true).length;
}

console.log(vowelCount("hello"));
console.log(vowelCount("thereactor"));
