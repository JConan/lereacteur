import fc from "fast-check";
import { max } from "rxjs/operators";
import { pyramid } from "./pyramid";

describe("exercice pyramid", () => {
  const maxSize = 2048;

  test("when size if below 1 then it should return an empty string", () => {
    fc.assert(
      fc.property(
        fc.integer({ min: -maxSize, max: 0 }),
        (size) => pyramid(size) === ""
      )
    );
  });

  test("total of lines is equal to size", () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: maxSize }),
        (size) => pyramid(size).split("\n").length === size
      )
    );
  });

  test("every line should have length of size", () => {
    fc.assert(
      fc.property(
        fc.integer(1, maxSize),
        (size) =>
          pyramid(size)
            .split("\n")
            .map((line) => line.length)
            .filter((len) => len !== size).length === 0
      )
    );
  });
});
