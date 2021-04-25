import find from "./find-v2";

describe("excercice jour7 - find v2", () => {
  const users = [
    { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
    { firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
    { firstName: "John", lastName: "Doe", age: 28, gender: "male" },
    { firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" },
  ];
  test("find return null no property provided", () => {
    expect(find(users, {})).toEqual(null);
  });
  test("find return the fisrt matching item", () => {
    expect(find(users, { lastName: "Doe" })).toEqual({
      firstName: "Jane",
      lastName: "Doe",
      age: 5,
      gender: "female",
    });
  });
});
