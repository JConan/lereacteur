import { initBox } from "./box02";

describe("exercice 02", () => {
  describe("tooling", () => {
    describe("initialize box", () => {
      test("box(1,1)", () => {
        expect(initBox(1, 1)).toBe(" ");
      });
      test("initBox(2,1)", () => {
        expect(initBox(2, 1)).toBe("  ");
      });
      test("initBox(1,2)", () => {
        expect(initBox(1, 2)).toBe(" \n ");
      });
      test("initBox(3,3)", () => {
        expect(initBox(3, 3)).toBe("   \n   \n   ");
      });
    });
  });
});
