import { mkdirSync, writeFileSync } from "node:fs";

// One Star for Monday — a one-star restaurant review of Monday itself.
// 23 words: a real diner's complaint (table, waiter, bill) that could
// only be about Monday — booked for Saturday, seated on Monday instead.
const review =
  "One star. Booked a table for Saturday, got seated on Monday instead, and the waiter charged me for a week I never ordered.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review, "utf8");
