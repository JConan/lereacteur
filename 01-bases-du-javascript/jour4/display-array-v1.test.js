import displayArray from "./display-array-v2";

describe("exercice jour 4 - fonction d'affichage de tableau", () => {
  test("affichage d'un tableau vide", () => {
    expect(displayArray([])).toEqual("");
  });
  test("affichage d'un element", () => {
    expect(displayArray(["Hello"])).toEqual("Hello");
  });
  test("affichage de plusieurs element", () => {
    expect(displayArray(["Hello", "Hello", "Hello"])).toEqual(
      "Hello Hello Hello"
    );
  });
  test("affichage de plusieurs element - exemple 1", () => {
    expect(displayArray(["Xavier", "Farid", "Kévin"])).toEqual(
      "Xavier Farid Kévin"
    );
  });
  test("affichage de plusieurs element - exemple 2", () => {
    expect(displayArray(["Pomme", "Banane", "Abricot", "Cerise"])).toEqual(
      "Pomme Banane Abricot Cerise"
    );
  });
});
