import { range } from "rxjs";

const w = 2;
const h = 1;

range(w * h).subscribe(console.log);
