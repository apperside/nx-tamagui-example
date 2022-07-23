"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var AppProvider_exports = {};
__export(AppProvider_exports, {
  AppProvider: () => AppProvider,
  default: () => AppProvider_default
});
module.exports = __toCommonJS(AppProvider_exports);
var import_config = require("@nx-tamagui-example/config");
var import_react = __toESM(require("react"));
const AppProvider = ({
  theme,
  children
}) => {
  return /* @__PURE__ */ import_react.default.createElement(import_config.config.Provider, {
    disableInjectCSS: true,
    disableRootThemeClass: true,
    defaultTheme: theme
  }, children);
};
var AppProvider_default = AppProvider;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AppProvider
});
//# sourceMappingURL=AppProvider.js.map
