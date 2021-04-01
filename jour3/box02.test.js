import { box } from "./box02";

describe("exercice 02", () => {
  describe("tooling", () => {});
  describe("create box", () => {
    test("horizontal", () => {
      expect(box(5, 1)).toBe("ABBBA");
    });
    test("horizontal", () => {
      expect(box(3, 1)).toBe("ABA");
    });
    test("vertical", () => {
      expect(box(1, 5)).toBe("A\nB\nB\nB\nA");
    });
  });
});
