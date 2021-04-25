function checkNums(num1, num2) {
  return num1 === num2
    ? "num1 et num2 sont équivalents"
    : num1 < num2
    ? "num2 est supérieur à num1"
    : "num2 est inférieur à num1";
}

console.log(checkNums(1, 122));
console.log(checkNums(67, 67));
