import { box } from "./box03";

describe("exercice 03 - boxing with rxjs", () => {
  const testBox = (dim, expectedValue) => (done) => {
    box(dim.w, dim.h).subscribe((data) => {
      expect(data).toEqual(expectedValue);
      done();
    });
  };

  test("box(1,1)", testBox({ w: 1, h: 1 }, "A"), 10);
  test("box(2,1)", testBox({ w: 2, h: 1 }, "AB"), 10);
  test("box(1,2)", testBox({ w: 1, h: 2 }, "A\nC"), 10);
  test("box(2,2)", testBox({ w: 2, h: 2 }, "AB\nCD"), 10);
  test("box(3,3)", testBox({ w: 3, h: 3 }, "A-B\n| |\nC-D"), 10);
  test("box(4,4)", testBox({ w: 4, h: 4 }, "A--B\n|  |\n|  |\nC--D"), 10);
  test("box(4,5)", testBox({ w: 4, h: 5 }, "A--B\n|  |\n*  *\n|  |\nC--D"), 10);
  test("box(5,4)", testBox({ w: 5, h: 4 }, "A-*-B\n|   |\n|   |\nC-*-D"), 10);
  test(
    "box(5,5)",
    testBox({ w: 5, h: 5 }, "A-*-B\n|   |\n*   *\n|   |\nC-*-D"),
    10
  );
  test(
    "box(7,6)",
    testBox(
      { w: 7, h: 6 },
      "A-***-B\n|     |\n*     *\n*     *\n|     |\nC-***-D"
    ),
    10
  );
});
