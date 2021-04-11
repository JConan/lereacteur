const formatSpeech = (str) => {
  const words = str.split(" ");
  const lines = [];
  let currentLine = "";

  for (const index in words) {
    const word = words[index];
    if (currentLine.length + word.length > 39) {
      lines.push(currentLine.slice(1));
      currentLine = " " + word;
    } else {
      currentLine += " " + word;
    }
  }
  lines.push(currentLine.slice(1));
  return lines
    .map((line, index) =>
      index === 0 ? "/ " + line.padEnd(39, " ") + " \\" : line
    )
    .map((line, index) =>
      index > 0 && index < lines.length - 1
        ? "| " + line.padEnd(39, " ") + " |"
        : line
    )
    .map((line, index) =>
      index === lines.length - 1 ? "\\ " + line.padEnd(39, " ") + " /" : line
    )
    .join("\n");
};
//   `/ Lorem ipsum dolor sit amet, consectetur \\
// | adipiscing elit. Nunc dui sapien,       |
// | faucibus in justo viverra, placerat     |
// | dapibus leo. Integer hendrerit          |
// | tincidunt ante, sed rhoncus augue       |
// | efficitur porttitor. Sed faucibus enim  |
// | at nisl aliquet, eu tempor augue        |
// | congue. Suspendisse venenatis neque eu  |
// | eros consequat volutpat. Vivamus        |
// | hendrerit sed mauris placerat           |
// | venenatis. Aliquam elementum magna ut   |
// | accumsan mollis. Aenean et ultrices     |
// | justo. Integer volutpat ullamcorper     |
// | dignissim. Nam condimentum, sem et      |
// | lacinia commodo, nisl diam consectetur  |
// | tortor, in accumsan sem diam eget       |
// | velit. Donec in pulvinar orci. Quisque  |
// | eu mauris sapien. Phasellus non mollis  |
// | nunc. Quisque sollicitudin tristique    |
// | sapien. Sed massa felis, varius ornare  |
// | nunc ac, maximus scelerisque tortor.    |
// | Donec luctus libero mauris, vitae       |
// | congue orci euismod condimentum. Sed    |
// | metus ipsum, facilisis quis nibh non,   |
// \\ fringilla fermentum arcu.               /`;

export default (str) => `_________________________________________
${formatSpeech(str)}
 -----------------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
`;
