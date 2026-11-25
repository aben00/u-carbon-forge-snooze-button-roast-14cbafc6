// Snooze Button Roast — make.fun entry (program/v1).
// Writes one single-line roast of an alarm clock ringing at 6 AM on a
// Saturday to /output/entry.txt, deterministically.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "My alarm clock rang at 6 AM on a Saturday like a debt collector my dreams never borrowed from \u2014 and it still came to collect.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Validation: read the file back and confirm it is byte-identical to ENTRY.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== ENTRY) {
  throw new Error("entry.txt does not match the expected entry text");
}
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error("entry fails the 1-200 character gate");
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}
