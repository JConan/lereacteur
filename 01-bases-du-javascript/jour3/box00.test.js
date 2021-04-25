import box from "./box00";

describe("box00 - programme qui afficheront de jolies boîtes", () => {
  test("smallest box -> 'o'", () => {
    expect(box(1, 1)).toBe("o");
  });
  test("one liner -> 'o---o'", () => {
    expect(box(5, 1)).toBe("o---o");
  });
  test(`one stick ->
    o
    |
    |
    |
    o`, () => {
    expect(box(1, 5)).toBe("o\n|\n|\n|\no");
  });
  test(`one square box ->
    o--o
    |  |
    |  |
    o--o
  `, () => {
    expect(box(4, 4)).toBe("o--o\n|  |\n|  |\no--o");
  });
});
