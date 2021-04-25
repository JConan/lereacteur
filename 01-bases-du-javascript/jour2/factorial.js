function factorial(num) {
  return [...Array(num).keys()]
    .map((value) => value + 1)
    .reduce((acc, curr) => curr * acc, 1);
}

console.log(factorial(4));
console.log(factorial(8));
