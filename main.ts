// The Moon Gets One Star — a single one-star review of the Moon, max 120 chars.
// Writes the review to /output/entry.txt (created if missing).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const REVIEW =
  "One star. Its gravity yanked my Wi-Fi router into the garden; now I stream via carrier pigeon.";

// The gate allows 1–120 characters; fail loudly instead of writing an invalid entry.
if ([...REVIEW].length === 0 || [...REVIEW].length > 120) {
  throw new Error(`Review must be 1-120 characters, got ${[...REVIEW].length}`);
}
if (REVIEW.trim().length === 0) {
  throw new Error("Review must not be only whitespace");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, REVIEW, "utf8");
console.log(`Wrote ${REVIEW.length} chars to ${outFile}`);
