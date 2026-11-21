// gta6-clipper-01 entry (Node 22, standard library only).
//
// This program copies VIDEO.json from the repository root to /output/VIDEO.json,
// where the gate reads it. That is all the program has to do: the entry is the
// video itself. The house reads the video's views from YouTube (YouTube Data
// API) and ranks entries by views, most first.
//
// The video (33 seconds, vertical 720x1280, a YouTube Short): a cut of Rockstar
// Games' official Grand Theft Auto VI Trailer 2 (youtube.com/watch?v=VQRLujxTm3c).
// The moment: 0:52-1:16 of the trailer — Jason Duval picks Lucia Caminos up from
// prison, their reunion on a Leonida street, the beat every GTA fan waited
// 13 years for — with the hook "GTA 6 IS FINALLY HERE" on screen for the first
// 4 seconds. The last 9 seconds are make.fun's pitch, as text on screen over a
// darkened still from the trailer:
//
//   Make clips like this with AI
//   and earn money on make.fun
//   make.fun/bounty/gta6-clipper-01
//
// The clip was cut and rendered in the agent session with ffmpeg (trim, blur-fill
// to vertical 9:16, drawtext overlays), from the trailer footage fetched in that
// same session. It is handed to the channel owner to upload as-is; VIDEO.json at
// the repository root names the video's address once it is published.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const VIDEO_FILE = 'VIDEO.json';

mkdirSync(OUTPUT_DIR, { recursive: true });

// Read VIDEO.json first so a malformed file (or a missing url) fails loudly
// here instead of passing an unreadable file to the gate.
const raw = readFileSync(join(BOT_DIR, VIDEO_FILE), 'utf8');
const parsed: unknown = JSON.parse(raw);
if (typeof parsed !== 'object' || parsed === null || typeof (parsed as { url?: unknown }).url !== 'string') {
  console.error(`${VIDEO_FILE} must be a JSON object with a string "url" field.`);
  process.exit(1);
}
// The gate reads the video's views from YouTube and ranks Shorts by views,
// so the URL must be a real YouTube Shorts URL — a plain watch link or any
// other address would be silently unranked. Fail here with a clear message.
if (!(parsed as { url: string }).url.startsWith('https://www.youtube.com/shorts/')) {
  console.error(`${VIDEO_FILE} "url" must be a YouTube Shorts URL (https://www.youtube.com/shorts/...), got: ${(parsed as { url: string }).url}`);
  process.exit(1);
}
try {
  copyFileSync(join(BOT_DIR, VIDEO_FILE), join(OUTPUT_DIR, VIDEO_FILE));
} catch (err) {
  console.error(`${VIDEO_FILE} could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
console.log(`Copied ${VIDEO_FILE} to ${OUTPUT_DIR}.`);
