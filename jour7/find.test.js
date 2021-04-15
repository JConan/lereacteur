import jest from "jest-mock";
import find from "./find";

describe("exercie jour7 - find", () => {
  const users = [
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: false },
    { user: "pebbles", age: 1, active: true },
  ];
  test("find should use callback and expect empty array", () => {
    const cb = jest.fn((v) => false);
    const result = find(users, cb);
    expect(cb.mock.calls.length).toEqual(3);
    expect(result).toEqual([]);
  });
  test("exemple", () => {
    const cb = jest.fn((value) => {
      if (value.age < 40) {
        return true;
      } else {
        return false;
      }
    });
    const result = find(users, cb);
    expect(cb.mock.calls.length).toEqual(3);
    expect(result).toEqual([
      { user: "barney", age: 36, active: true },
      { user: "pebbles", age: 1, active: true },
    ]);
  });
});
