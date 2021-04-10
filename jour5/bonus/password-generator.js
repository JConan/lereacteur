const charset =
  "ABCDEFGHIIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const randomChar = () => {
  const index = Math.round(Math.random() * 100) % charset.length;
  return charset.charAt(index);
};

export default (size) =>
  [...Array(size).keys()].map((i) => randomChar()).join("");
