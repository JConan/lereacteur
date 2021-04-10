import head from "./head";

describe("jour5 exercice get the first elemet from an array", () => {
  test("empty array should return undefined", () => {
    expect(head([])).toEqual(undefined);
  });
  test("should return first element from an array of size 1", () => {
    expect(head(["Hello"])).toEqual("Hello");
  });
  test("should original array should not be change", () => {
    const arr = ["Test", "World"];
    expect(head(arr)).toEqual("Test");
    expect(arr).toEqual(["Test", "World"]);
  });
});
