import { range } from "rxjs";
import { map, scan, tap, last } from "rxjs/operators";
import _ from "underscore";

export const box = (w, h) => {
  const when = (condition, newValue) => (value) =>
    condition(value) ? newValue : value;

  return range((w + 1) * h - 1).pipe(
    map((i) => ({ x: i % (w + 1), y: Math.trunc(i / (w + 1)) })),
    map(when(({ x, y }) => x === w, "\n")),
    map(when(({ x, y }) => x === 0 && y === 0, "A")),
    map(when(({ x, y }) => x === w - 1 && y === 0, "B")),
    map(when(({ x, y }) => x === 0 && y === h - 1, "C")),
    map(when(({ x, y }) => x === w - 1 && y === h - 1, "D")),
    map(
      when(({ x, y }) => x > 1 && x < w - 2 && (y === 0 || y === h - 1), "*")
    ),
    map(
      when(({ x, y }) => (x === 0 || x === w - 1) && y > 1 && y < h - 2, "*")
    ),
    map(
      when(({ x, y }) => x > 0 && x < w - 1 && (y === 0 || y === h - 1), "-")
    ),
    map(
      when(({ x, y }) => (x === 0 || x === w - 1) && y > 0 && y < h - 1, "|")
    ),
    map(when(_.isObject, " ")),
    scan((acc, curr) => `${acc}${curr}`, ""),
    last()
  );
};
