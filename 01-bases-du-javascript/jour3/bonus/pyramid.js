import { range } from "rxjs";
import { map, scan, last } from "rxjs/operators";

export const pyramid = (size) => {
  if (size < 1) return "";
  return Array.from(Array(size), () => ".".repeat(size)).join("\n");
};
