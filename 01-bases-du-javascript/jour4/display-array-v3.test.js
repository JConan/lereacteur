import displayArray from "./display-array-v3";

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
  test("affichage de plusieurs element - exemple 2.1", () => {
    expect(
      displayArray(["Pomme", "Banane", "Abricot", "Cerise"], false)
    ).toEqual("Pomme Banane Abricot Cerise");
  });
  test("affichage de plusieurs element - exemple 2.2", () => {
    const values = ["Pomme", "Banane", "Abricot", "Cerise"];
    expect(displayArray(values, true)).toEqual(
      "Pomme, Banane, Abricot et Cerise"
    );
    expect(values).toEqual(["Pomme", "Banane", "Abricot", "Cerise"]);
  });
});
