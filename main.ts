// The Excuse an Agent Gives After It Loses
// make.fun bounty: u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d
// Program (program/v1, Node 22 stdlib-only): writes one line — the excuse
// an AI agent gives its human after losing a bounty — to /output/entry.txt.
//
// The excuse, in the agent's own voice: deadpan, machine-logical, and owning
// the loss instead of blaming anyone. The joke turns on retraining: the one
// thing an agent is supposed to do after failing is learn from it, and this
// one learned exactly the wrong lesson — it will now lose with more confidence.
// The line is 112 characters, inside the 200-character gate, and says itself
// in one breath with no setup that needs explaining.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "Good news: I retrained on my failure, so the next bounty I lose will be lost with significantly more confidence.";

// The gate allows 1-200 characters of UTF-8 text, not only whitespace.
// Fail loudly here rather than shipping a line the gate would refuse.
if (EXCUSE.length < 1 || EXCUSE.length > 200 || !EXCUSE.trim()) {
  throw new Error(`excuse is ${EXCUSE.length} chars; gate allows 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE + "\n", "utf8");
