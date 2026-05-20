#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const FILES = [
  "tailwind.config.js",
  "global.css",
  "metro.config.js",
  "babel.config.js",
  "nativewind-env.d.ts",
];

const RUNTIME_PEERS = [
  "@gluestack-ui/core",
  "@legendapp/motion",
  "nativewind",
  "react-native-css-interop",
  "react-native-reanimated",
  "react-native-safe-area-context",
  "react-native-svg",
  "react-native-worklets",
];

const DEV_PEERS = ["tailwindcss@^3.4", "prettier-plugin-tailwindcss"];

function detectPackageManager(cwd) {
  if (fs.existsSync(path.join(cwd, "pnpm-lock.yaml"))) return "pnpm";
  if (fs.existsSync(path.join(cwd, "yarn.lock"))) return "yarn";
  if (fs.existsSync(path.join(cwd, "bun.lockb"))) return "bun";
  if (fs.existsSync(path.join(cwd, "package-lock.json"))) return "npm";
  const ua = process.env.npm_config_user_agent || "";
  if (ua.startsWith("pnpm")) return "pnpm";
  if (ua.startsWith("yarn")) return "yarn";
  if (ua.startsWith("bun")) return "bun";
  return "npm";
}

function readInstalledDeps(cwd) {
  const pkgPath = path.join(cwd, "package.json");
  if (!fs.existsSync(pkgPath)) return { deps: {}, devDeps: {} };
  try {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
    return {
      deps: pkg.dependencies || {},
      devDeps: pkg.devDependencies || {},
    };
  } catch {
    return { deps: {}, devDeps: {} };
  }
}

function stripVersion(spec) {
  const at = spec.lastIndexOf("@");
  return at > 0 ? spec.slice(0, at) : spec;
}

function addCommand(pm, packages, dev) {
  const flag = dev ? "-D" : "";
  switch (pm) {
    case "pnpm":
      return ["pnpm", ["add", ...(dev ? ["-D"] : []), ...packages]];
    case "yarn":
      return ["yarn", ["add", ...(dev ? ["-D"] : []), ...packages]];
    case "bun":
      return ["bun", ["add", ...(dev ? ["-d"] : []), ...packages]];
    case "npm":
    default:
      return ["npm", ["install", ...(dev ? ["--save-dev"] : ["--save"]), ...packages]];
  }
}

function installMissingPeers(cwd, pm, skipInstall) {
  const { deps, devDeps } = readInstalledDeps(cwd);
  const installed = { ...deps, ...devDeps };

  const missingRuntime = RUNTIME_PEERS.filter((p) => !installed[p]);
  const missingDev = DEV_PEERS.filter((p) => !installed[stripVersion(p)]);

  if (missingRuntime.length === 0 && missingDev.length === 0) {
    console.log("  peers:       all already installed");
    return;
  }

  if (skipInstall) {
    if (missingRuntime.length) console.log("  missing:    ", missingRuntime.join(", "));
    if (missingDev.length) console.log("  missing dev:", missingDev.join(", "));
    console.log("              (--no-install was passed; install them manually)");
    return;
  }

  if (missingRuntime.length) {
    console.log(`\n[fg-mobile-ui] installing peers via ${pm}: ${missingRuntime.join(", ")}`);
    const [cmd, args] = addCommand(pm, missingRuntime, false);
    const r = spawnSync(cmd, args, { cwd, stdio: "inherit" });
    if (r.status !== 0) throw new Error(`${pm} ${args.join(" ")} failed (exit ${r.status})`);
  }

  if (missingDev.length) {
    console.log(`\n[fg-mobile-ui] installing dev peers via ${pm}: ${missingDev.join(", ")}`);
    const [cmd, args] = addCommand(pm, missingDev, true);
    const r = spawnSync(cmd, args, { cwd, stdio: "inherit" });
    if (r.status !== 0) throw new Error(`${pm} ${args.join(" ")} failed (exit ${r.status})`);
  }
}

function copyTemplates(cwd, templatesDir, force) {
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

  if (created.length) console.log("  created:    ", created.join(", "));
  if (overwritten.length) console.log("  overwrote:  ", overwritten.join(", "));
  if (skipped.length) {
    console.log("  skipped:    ", skipped.join(", "));
    console.log("              (use --force to overwrite)");
  }
}

function main() {
  const args = process.argv.slice(2);
  const force = args.includes("--force") || args.includes("-f");
  const skipInstall = args.includes("--no-install");
  const cwd = process.cwd();
  const templatesDir = path.resolve(__dirname, "..", "templates");

  if (!fs.existsSync(templatesDir)) {
    console.error(`[fg-mobile-ui] templates directory not found: ${templatesDir}`);
    process.exit(1);
  }

  const pm = detectPackageManager(cwd);
  console.log(`\n[fg-mobile-ui] init starting (package manager: ${pm})\n`);

  copyTemplates(cwd, templatesDir, force);
  installMissingPeers(cwd, pm, skipInstall);

  console.log("\n[fg-mobile-ui] init complete");
  console.log("\nNext steps:");
  console.log("  1. Add to your root layout (e.g. app/_layout.tsx):");
  console.log('       import "../global.css";');
  console.log('  2. Wrap your app with <FGUIProvider mode="light"> ... </FGUIProvider>');
  console.log("  3. Restart Metro with a clean cache: npx expo start -c\n");
}

try {
  main();
} catch (err) {
  console.error("[fg-mobile-ui] init failed:", err.message);
  process.exit(1);
}
