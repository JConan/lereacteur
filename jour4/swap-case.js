export default (tab) => [
  ...tab.map((world) =>
    world
      .split("")
      .map((char) =>
        char.charCodeAt() >= 97 ? char.toUpperCase() : char.toLowerCase()
      )
      .join("")
  ),
];
