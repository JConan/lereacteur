import { createLine, box, boxFiller } from "./box01";

describe("box01 - un autre style de box", () => {
  describe("tools line generation", () => {
    test("simple line of length 1", () => {
      expect(createLine(1, "/\\")).toBe("/");
    });
    test("simple line of length 2", () => {
      expect(createLine(2, "/\\")).toBe("/\\");
    });
    test("simple line of lentgh 1 with different baseLine", () => {
      expect(createLine(1, "\\/")).toBe("\\");
    });
    test("simple line lentgh 2 with different baseLine", () => {
      expect(createLine(2, "\\/")).toBe("\\/");
    });
    test("simple line with filler length 3", () => {
      expect(createLine(5, "/\\", "*")).toBe("/***\\");
    });
    test("boxFiller", () => {
      expect(boxFiller(5, 1)).toEqual(["*   *"]);
    });
  });
  describe("box creation", () => {
    test("smallest box", () => {
      expect(box(1, 1)).toBe("/");
    });
    test("one horizontal line box", () => {
      expect(box(5, 1)).toBe("/***\\");
    });
    test("one vertical line box", () => {
      expect(box(1, 2)).toBe("/\n\\");
    });
    test("one vertical line box", () => {
      expect(box(1, 3)).toBe("/\n*\n\\");
    });
    test("big box", () => {
      expect(box(5, 3)).toBe("/***\\\n*   *\n\\***/");
    });
  });
});
