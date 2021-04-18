import jest from "jest-mock";
import foreach from "./foreach";

describe("jour6 - exercice foreach", () => {
  test("apply callback for each element from an array", () => {
    const cb = jest.fn((v) => v);
    foreach([1, 2], cb);
    expect(cb.mock.calls.length).toBe(2);
    expect(cb.mock.calls[0][0]).toBe(1);
    expect(cb.mock.calls[1][0]).toBe(2);
  });
  test("apply callback for each element from an empty array", () => {
    const cb = jest.fn((v) => v);
    foreach([], cb);
    expect(cb.mock.calls.length).toBe(0);
  });
});
