import { defineConfig } from "tsup";
import baseConfig from "../../tsup.base";

export default defineConfig({
  ...baseConfig,
  entry: ["src/index.ts"],
  external: [
    "react",
    "react-dom",
    "@radix-ui/react-slot",
    "class-variance-authority",
    "clsx",
    "tailwind-merge"
  ]
});
