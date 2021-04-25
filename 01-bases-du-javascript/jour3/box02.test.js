import {
  initBox,
  createToCoord,
  onCoordinate,
  mapValueBox,
  box,
} from "./box02";
import _ from "underscore";

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
    describe("conditional value mapper based on coordinate validation", () => {
      // const onCoord = onCoordinate(({ x, y }) => x === 1 && y === 1, "X");
      const onCoord = onCoordinate((o) => _.isEqual(o, { x: 1, y: 1 }), "X");
      test("should return null when not valid", () => {
        expect(onCoord({ x: 0, y: 0 })).toEqual(null);
      });
      test("should return defined value when match", () => {
        expect(onCoord({ x: 1, y: 1 })).toEqual("X");
      });
    });
  });
  describe("box", () => {
    test("create box of size 1x1", () => {
      expect(box(1, 1)).toEqual("A");
    });
    test("create box of size 2x1", () => {
      expect(box(2, 1)).toEqual("AA");
    });
    test("create box of size 3x1", () => {
      expect(box(3, 1)).toEqual("ABA");
    });
    test("create box of size 1x2", () => {
      expect(box(1, 2)).toEqual("A\nC");
    });
    test("create box of size 1x3", () => {
      expect(box(1, 3)).toEqual("A\nB\nC");
    });
    test("create box of size 3x3", () => {
      expect(box(3, 3)).toEqual("ABA\nB B\nCBC");
    });
    test("create box of size 4x4", () => {
      expect(box(4, 4)).toEqual("ABBA\nB  B\nB  B\nCBBC");
    });
  });
});
