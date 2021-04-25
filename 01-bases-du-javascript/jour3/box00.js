function box(width, height) {
  const outline = Array.from(Array(width), (_, i) =>
    i > 0 && i < width - 1 ? "-" : "o"
  ).join("");
  const inline = Array.from(Array(width), (_, i) =>
    i > 0 && i < width - 1 ? " " : "|"
  ).join("");
  const line = Array.from(Array(height), (_, i) =>
    i > 0 && i < height - 1 ? inline : outline
  ).join("\n");
  return line;
}

export default box;
