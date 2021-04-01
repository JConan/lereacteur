export const box = (width, height) => {
  return [...Array((width + 1) * height).keys()]
    .map((i) => ({ i, c: "" }))
    .map(({ i, c }) => (i === 0 || i === width - 1 ? { i, c: "A" } : { i, c }))
    .map(({ i, c }) => (i > 0 && i < width - 1 ? { i, c: "B" } : { i, c }))
    .map(({ i, c }) => (i > 0 && i < width - 1 ? { i, c: "B" } : { i, c }))
    .map(({ i, c }) =>
      i > width && i % (width + 1) === 0 ? { i, c: c + "\n" } : { i, c }
    )
    .map(({ c }) => c)
    .slice(0, -1);
  // .join("");
};

export default { box };
