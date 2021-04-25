import tail from "./tail";

describe("exercice jour5 - tail function", () => {
  test("should return empty array from empty array", () => {
    expect(tail([])).toEqual([]);
  });
  test("should return empty array from array of one element", () => {
    expect(tail(["e"])).toEqual([]);
  });
  test("exemple 1", () => {
    expect(tail([1, 2, 3])).toEqual([2, 3]);
  });
});
