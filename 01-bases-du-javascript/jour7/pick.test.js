import pick from "./pick";

describe("exercie jour7 - function pick", () => {
  test("test filter by 0 items should return emtpy object", () => {
    expect(pick({ a: 1, b: "2", c: 3 }, [])).toEqual({});
  });
  test("test filter by non-existing item should return empty object", () => {
    expect(pick({ a: 1, b: "2", c: 3 }, ["d"])).toEqual({});
  });
  test("test filter by non-existing 1 item", () => {
    expect(pick({ a: 1, b: "2", c: 3 }, ["a"])).toEqual({ a: 1 });
  });
  test("test existing and non existing", () => {
    expect(pick({ a: 1, b: "2", c: 3 }, ["b", "d"])).toEqual({ b: "2" });
  });
  test("exemple", () => {
    expect(pick({ a: 1, b: "2", c: 3 }, ["a", "c"])).toEqual({ a: 1, c: 3 });
  });
});
