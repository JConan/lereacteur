function formatInputStr(str) {
  return str
    .toLowerCase()
    .split("")
    .filter((char) => [" "].indexOf(char) < 0)
    .join("");
}

function reverseStr(str) {
  let result = "";
  for (let i = 1; i <= str.length; i++) {
    result += str.charAt(str.length - i);
  }
  return result;
}

function palindrome(str) {
  const formattedStr = formatInputStr(str);
  return reverseStr(formattedStr) === formattedStr;
}

console.log(palindrome("Aromate et Amora"));
console.log(palindrome("Un bon snob nu"));
