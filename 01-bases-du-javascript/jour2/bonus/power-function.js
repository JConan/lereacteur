function powerFunction(num, power) {
  console.log(typeof power);
  let result = 1;
  for (let i = 0; i < power; i++) {
    result *= num;
  }
  return result;
}

console.log(powerFunction(3, 3));
