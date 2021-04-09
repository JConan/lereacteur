import swapCase from "./swap-case";

describe("exercie swap case", () => {
  test("swap empty array", () => {
    expect(swapCase([])).toEqual([]);
  });
  test("swapcase of multiple single char", () => {
    expect(swapCase(["A", "b", "C"])).toEqual(["a", "B", "c"]);
  });
  test("swapcase single word", () => {
    expect(swapCase(["AbC"])).toEqual(["aBc"]);
  });
  test("swapcase multiple word - example", () => {
    expect(swapCase(["Hello", "Le Reacteur"])).toEqual([
      "hELLO",
      "lE rEACTEUR",
    ]);
  });
});
