import { initBox, createToCoord } from "./box02";

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
    describe("index to coordinate", () => {
      describe("width = 1", () => {
        const toCoord = createToCoord(1);
        test("index 0 => {0; 0}", () =>
          expect(toCoord(0)).toEqual({ x: 0, y: 0 }));
        test("index 1 => {0; 1}", () =>
          expect(toCoord(1)).toEqual({ x: 0, y: 1 }));
        test("index 2 => {0; 2}", () =>
          expect(toCoord(2)).toEqual({ x: 0, y: 2 }));
      });
      describe("width = 3", () => {
        const toCoord = createToCoord(3);
        test("index 0 => {0; 0}", () =>
          expect(toCoord(0)).toEqual({ x: 0, y: 0 }));
        test("index 1 => {1; 0}", () =>
          expect(toCoord(1)).toEqual({ x: 1, y: 0 }));
        test("index 2 => {2; 0}", () =>
          expect(toCoord(2)).toEqual({ x: 2, y: 0 }));
        test("index 3 => {0; 1}", () =>
          expect(toCoord(3)).toEqual({ x: 0, y: 1 }));
      });
    });
  });
});
