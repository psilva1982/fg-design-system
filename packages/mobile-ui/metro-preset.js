const { withNativeWind } = require("nativewind/metro");

function withFGDesignSystem(config, options = {}) {
  const input = options.input || require.resolve("@fg-design-system/mobile-ui/global.css");
  return withNativeWind(config, { input, ...options });
}

module.exports = { withFGDesignSystem };
