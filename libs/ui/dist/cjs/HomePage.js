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
var HomePage_exports = {};
__export(HomePage_exports, {
  HomeScreen: () => HomeScreen
});
module.exports = __toCommonJS(HomePage_exports);
var import_tamagui = require("tamagui");
var import_link = require("solito/link");
const HomeScreen = () => {
  return /* @__PURE__ */ React.createElement(import_tamagui.YStack, null, /* @__PURE__ */ React.createElement(import_tamagui.H5, null, "HOME"), /* @__PURE__ */ React.createElement(import_tamagui.Button, {
    onPress: () => {
    }
  }, "toggle"), /* @__PURE__ */ React.createElement(import_link.TextLink, {
    href: "/user/simo",
    style: { backgroundColor: "red" }
  }, /* @__PURE__ */ React.createElement(import_tamagui.H5, {
    selectable: false,
    fontSize: 16,
    color: "black",
    fontWeight: "bold"
  }, "Moti Link")));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  HomeScreen
});
//# sourceMappingURL=HomePage.js.map
