module.exports = function (api) {
  api.cache(true);
  return {
    presets: [require("@fg-design-system/mobile-ui/babel")],
  };
};
