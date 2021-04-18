import size from "./size";

describe("jour6 - exercice size", () => {
  test("exemple 1 - size of string", () => {
    expect(size("pebbles")).toEqual(7);
  });
  test("exemple 2 - size of array", () => {
    expect(size([1, 2, 3])).toEqual(3);
  });
  test("exemple 3 - no parameter", () => {
    expect(size()).toEqual(0);
  });
  test("exemple 4 - null parameter", () => {
    expect(size(null)).toEqual(0);
  });
  test("exemple 5 - of number", () => {
    expect(size(10)).toEqual(0);
  });
  test("exemple 6 - of boolean", () => {
    expect(size(true)).toEqual(0);
  });
});
