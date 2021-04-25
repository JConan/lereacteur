import alphabetSoup from "./alphabet-soup";

describe("excerice alphabet soup", () => {
  test("should sort letters - exemple 1", () => {
    expect(alphabetSoup("hello")).toEqual("ehllo");
  });
  test("should sort letters - exemple 2", () => {
    expect(alphabetSoup("thereactor")).toEqual("aceehorrtt");
  });
  test("should sort letters - exemple 3", () => {
    expect(alphabetSoup("hooplah")).toEqual("ahhloop");
  });
});
