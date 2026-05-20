const { getDefaultConfig } = require("expo/metro-config");
const { withFGDesignSystem } = require("@fg-design-system/mobile-ui/metro");

module.exports = withFGDesignSystem(getDefaultConfig(__dirname));
