import initial from "./initial";

describe("exercice jour5 - tail function", () => {
  test("should return empty array from empty array", () => {
    expect(initial([])).toEqual([]);
  });
  test("should return empty array from array of one element", () => {
    expect(initial(["e"])).toEqual([]);
  });
  test("exemple 1", () => {
    expect(initial([1, 2, 3])).toEqual([1, 2]);
  });
});
