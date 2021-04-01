export const createLine = (length, baseLine, fillerChar) => {
  const fillerLength = length - 2;
  const filler = fillerLength > 0 ? "".padStart(fillerLength, fillerChar) : "";
  return `${baseLine[0]}${filler}${baseLine[1]}`.substr(0, length);
};

export const boxFiller = (widht, height) => {
  if (height > 0) {
    return Array.from(Array(height), () => createLine(widht, "**", " "));
  } else return [];
};

export const box = (width, height) => {
  const lines = [
    createLine(width, "/\\", "*"),
    ...boxFiller(width, height - 2),
    createLine(width, "\\/", "*"),
  ];

  return lines.slice(0, height).join("\n");
};

export default { createLine, box, boxFiller };
