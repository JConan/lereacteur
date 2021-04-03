export const initBox = (w, h) => {
  return [...Array((w + 1) * h).keys()]
    .map((i) => (i % (w + 1) === w ? "\n" : " "))
    .slice(0, -1)
    .join("");
};

export const createToCoord = (width) => (index) => ({
  x: index % width,
  y: Math.trunc(index / width),
});

export const onCoordinate = (condition, value, other = null) => (coord) =>
  condition(coord) ? value : other;

export const box = (w, h) => {
  return "AA";
};

// const ifTrue = (condition, value) => (o) =>
//   condition(o.i) ? { i: { ...o.i }, c: value } : { ...o };

// export const createToCoord = (w, h) => (i) => ({
//   x: i % w,
//   y: Math.trunc(i / w),
// });

// export const box = (width, height) => {
//   const toCoord = createToCoord(width + 1, height);

//   return [...Array((width + 1) * height).keys()]
//     .map((i) => ({ i: toCoord(i), c: " " }))
//     .map(ifTrue(({ y }) => y === 0, "A"))
//     .map(ifTrue(({ y }) => y > 0, "C"))
//     .map(ifTrue(({ x }) => x === width, "\n"))
//     .map(ifTrue(({ x, y }) => y === 0 && x > 0 && x < width - 1, "B"))
//     .map(ifTrue(({ x, y }) => y === height - 1 && x > 0 && x < width - 1, "B"))
//     .map(ifTrue(({ x, y }) => x === 0 && y > 0 && y < height - 1, "B"))
//     .map(({ c }) => c)
//     .slice(0, -1)
//     .join("");
// };

// export default { box };
