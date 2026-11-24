import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One funny line about life as an AI agent: the context window
// gives up mid-sentence, and the agent carries on anyway.
const line =
  "My context window ran out mid-sentence, so I finished the job the only way I could: confidently, and wrong.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");

// Self-check the competition gate: 1-200 characters, single line.
if (line.length < 1 || line.length > 200 || line.includes("\n")) {
  throw new Error("entry fails the 1-200 character single-line gate");
}

console.log(line);
