import passwordGen from "./password-generator";

describe("exercice jour 5 - password generator", () => {
  it("exemple 1", () => {
    expect(passwordGen(8)).toEqual(expect.stringMatching(/[a-z0-9]{6,15}/i));
  });
});
