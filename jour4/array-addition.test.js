import arrayAddition from "./array-addition";

describe("exercice array-addition", () => {
  test("should return false with empty array", () => {
    expect(arrayAddition([])).toEqual(false);
  });
  test("should return false with array of 1 element", () => {
    expect(arrayAddition([1])).toEqual(false);
  });
  test("should return true only equal when both is of same value", () => {
    expect(arrayAddition([1, 1])).toEqual(true);
  });
  test("true only sum of all element except the maximul is equal to the maximum - exemple 1", () => {
    expect(arrayAddition([1, 2, 3, 12, 6])).toEqual(true);
  });
  test("true only sum of all element except the maximul is equal to the maximum - exemple 2", () => {
    expect(arrayAddition([1, 2, 3, 4])).toEqual(false);
  });
});
