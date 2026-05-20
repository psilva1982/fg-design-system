import { defineConfig } from "tsup";
import baseConfig from "../../tsup.base";

export default defineConfig({
  ...baseConfig,
  format: ["cjs", "esm"],
  entry: ["src/index.ts"],
  external: [
    "react",
    "react-native",
    "@gluestack-ui/core",
    "@gluestack-ui/themed",
    "@gluestack-style/react",
    "@legendapp/motion",
    "nativewind",
    "react-native-reanimated",
    "react-native-safe-area-context",
    "react-native-svg",
    "react-native-worklets"
  ]
});
