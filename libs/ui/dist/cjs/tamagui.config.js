"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var tamagui_config_exports = {};
__export(tamagui_config_exports, {
  config: () => config,
  default: () => tamagui_config_default
});
module.exports = __toCommonJS(tamagui_config_exports);
var import_tamagui = require("tamagui");
var import_font_inter = require("@tamagui/font-inter");
var import_shorthands = require("@tamagui/shorthands");
var import_theme_base = require("@tamagui/theme-base");
const headingFont = (0, import_font_inter.createInterFont)({
  size: {
    6: 15
  },
  transform: {
    6: "uppercase",
    7: "none"
  },
  weight: {
    6: "400",
    7: "700"
  },
  color: {
    6: "$colorFocus",
    7: "$color"
  },
  letterSpacing: {
    5: 2,
    6: 1,
    7: 0,
    8: -1,
    9: -2,
    10: -3,
    12: -4,
    14: -5,
    15: -6
  }
});
const bodyFont = (0, import_font_inter.createInterFont)({}, {
  sizeSize: (size) => Math.round(size * 1.1),
  sizeLineHeight: (size) => Math.round(size * 1.1 + (size > 20 ? 10 : 10))
});
const config = (0, import_tamagui.createTamagui)({
  defaultTheme: "light",
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  shorthands: import_shorthands.shorthands,
  fonts: {
    heading: headingFont,
    body: bodyFont
  },
  themes: import_theme_base.themes,
  tokens: {
    ...import_theme_base.tokens,
    color: {
      myColor: "yellow"
    }
  },
  media: {
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: "none" },
    pointerCoarse: { pointer: "coarse" }
  }
});
var tamagui_config_default = config;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  config
});
//# sourceMappingURL=tamagui.config.js.map
