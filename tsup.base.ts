import type { Options } from "tsup";

const baseConfig: Options = {
  clean: true,
  dts: true,
  format: ["esm"],
  sourcemap: true,
  treeshake: true,
  target: "es2020",
};

export default baseConfig;
