#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const FILES = [
  "tailwind.config.js",
  "global.css",
  "metro.config.js",
  "babel.config.js",
  "nativewind-env.d.ts",
];

function main() {
  const args = process.argv.slice(2);
  const force = args.includes("--force") || args.includes("-f");
  const cwd = process.cwd();
  const templatesDir = path.resolve(__dirname, "..", "templates");

  if (!fs.existsSync(templatesDir)) {
    console.error(`[fg-mobile-ui] templates directory not found: ${templatesDir}`);
    process.exit(1);
  }

  const created = [];
  const skipped = [];
  const overwritten = [];

  for (const file of FILES) {
    const src = path.join(templatesDir, file);
    const dest = path.join(cwd, file);
    const exists = fs.existsSync(dest);

    if (exists && !force) {
      skipped.push(file);
      continue;
    }

    fs.copyFileSync(src, dest);
    (exists ? overwritten : created).push(file);
  }

  console.log("\n[fg-mobile-ui] init complete\n");
  if (created.length) console.log("  created:    ", created.join(", "));
  if (overwritten.length) console.log("  overwrote:  ", overwritten.join(", "));
  if (skipped.length) {
    console.log("  skipped:    ", skipped.join(", "));
    console.log("              (use --force to overwrite)");
  }

  console.log("\nNext steps:");
  console.log('  1. Add to your root layout (e.g. app/_layout.tsx):');
  console.log('       import "../global.css";');
  console.log("  2. Wrap your app with <FGUIProvider mode=\"light\"> ... </FGUIProvider>");
  console.log("  3. Restart Metro with a clean cache: npx expo start -c\n");
}

try {
  main();
} catch (err) {
  console.error("[fg-mobile-ui] init failed:", err.message);
  process.exit(1);
}
