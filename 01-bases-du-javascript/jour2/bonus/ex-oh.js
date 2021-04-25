function exOh(str) {
  const counter = str
    .split("")
    .map((c) => (c === "x" ? { x: 1, o: 0 } : { x: 0, o: 1 }))
    .reduce((arr, curr) => ({ x: arr.x + curr.x, o: arr.o + curr.o }), {
      x: 0,
      o: 0,
    });
  return counter.x === counter.o;
}

console.log(exOh("xooxxxxooxo"));
console.log(exOh("xooxxo"));
console.log(exOh("x"));
