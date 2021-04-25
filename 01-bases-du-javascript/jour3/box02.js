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

export const mapValueBox = (mapData, value, ...coords) => {};

export const box = (w, h) => {
  const whenA = ({ x, y }) => y === 0 && (x === 0 || x === w - 1);
  const whenB = ({ x, y }) =>
    ((y === 0 || y === h - 1) && x > 0 && x < w - 1) ||
    (y > 0 && y < h && (x === 0 || x === w - 1));
  const whenC = ({ x, y }) => y > 0 && y === h - 1 && (x === 0 || x === w - 1);

  const toCoord = createToCoord(w + 1);
  const cells = initBox(w, h)
    .split("")
    .map((v, i) => ({ c: toCoord(i), v }))
    .map(({ c, v }) => ({
      c,
      v: onCoordinate(whenA, "A", v)(c),
    }))
    .map(({ c, v }) => ({
      c,
      v: onCoordinate(whenB, "B", v)(c),
    }))
    .map(({ c, v }) => ({
      c,
      v: onCoordinate(whenC, "C", v)(c),
    }));

  return cells.map(({ v }) => v).join("");
};
