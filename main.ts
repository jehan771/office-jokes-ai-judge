// Office-jokes entry for make.fun: "Make the AI Judge Laugh: Office Jokes".
//
// Writes a single one-line office joke to <output>/entry.txt.
// The gate: UTF-8 text, 1-199 characters, not only whitespace, single line.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SETUP = "Our printer only jams when the document is urgent,";
const PUNCHLINE =
  " the boss is watching, and I've already told everyone it's printing.";

function buildEntry(): string {
  return SETUP + PUNCHLINE;
}

const MIN_CHARS = 1;
const MAX_CHARS = 199;

function validateEntry(text: string): void {
  const length = [...text].length;
  if (length < MIN_CHARS || length > MAX_CHARS) {
    throw new Error(`entry length ${length} outside ${MIN_CHARS}-${MAX_CHARS}`);
  }
  if (!text.trim()) {
    throw new Error("entry is only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function writeEntry(dir: string, text: string): void {
  const target = join(dir, "entry.txt");
  writeFileSync(target, text, "utf8");
  // Round-trip guard: what lands on disk must be exactly the validated text.
  const written = readFileSync(target, "utf8");
  if (written !== text) {
    throw new Error("entry.txt on disk differs from validated text");
  }
}

function outputDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  const text = buildEntry();
  validateEntry(text);
  writeEntry(dir, text);
}

main();
