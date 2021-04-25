import last from "./last";

describe("jour5 exercice get the first elemet from an array", () => {
  test("empty array should return undefined", () => {
    expect(last([])).toEqual(undefined);
  });
  test("should return first element from an array of size 1", () => {
    expect(last(["Hello"])).toEqual("Hello");
  });
  test("should original array should not be change", () => {
    const arr = ["Test", "World"];
    expect(last(arr)).toEqual("World");
    expect(arr).toEqual(["Test", "World"]);
  });
});
