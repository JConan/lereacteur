const sum = (num) =>
  [...Array(num + 1).keys()].reduce((acc, curr) => acc + curr, 0);

console.log(sum(4));
console.log(sum(12));
console.log(sum(140));
