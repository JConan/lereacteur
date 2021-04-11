import rot13 from "./rot13";

describe("exercie jour 5 - bonus/rot13", () => {
  it("should ignore all non-letter char", () => {
    const listOfCharacter = " ?./§,;:!ù*$^$*¨&'(-è_çà)=0123456789";
    expect(rot13(listOfCharacter)).toEqual(listOfCharacter);
  });
  it("should give 'n' when provide 'a'", () => {
    expect(rot13("a")).toEqual("n");
  });
  it("should give 'm' when provide 'z'", () => {
    expect(rot13("z")).toEqual("m");
  });
  it("should give 'N' when provide 'A'", () => {
    expect(rot13("A")).toEqual("N");
  });
  it("should give 'M' when provide 'Z'", () => {
    expect(rot13("Z")).toEqual("M");
  });

  test("exemple 1", () => {
    expect(rot13("abc")).toEqual("nop");
  });
  test("exemple 2", () => {
    expect(rot13("My horse is Amazing.")).toEqual("Zl ubefr vf Nznmvat.");
  });
  test("exemple 3", () => {
    expect(rot13("AkjhZ zLKIJz , 23y")).toEqual("NxwuM mYXVWm , 23l");
  });
  test("exemple 4", () => {
    expect(rot13("-12")).toEqual("-12");
  });
});
