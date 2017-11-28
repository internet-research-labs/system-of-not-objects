import {lsystem} from './l-system.js';

let AXIOM = "L";

let PRODUCTION = {
  "L": "+RF-LFL-FR+",
  "R": "-LF+RFR+FL-",
}

export function hilbert(n) {
  return lsystem("L", PRODUCTION, n);
}
