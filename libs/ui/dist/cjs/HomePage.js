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
var HomePage_exports = {};
__export(HomePage_exports, {
  HomeScreen: () => HomeScreen,
  default: () => HomePage_default
});
module.exports = __toCommonJS(HomePage_exports);
var import_ui = require("@nx-tamagui-example/ui");
var import_SheetDemo = require("@nx-tamagui-example/ui/src/SheetDemo");
var import_react = __toESM(require("react"));
var import_link = require("solito/link");
var import_tamagui = require("tamagui");
const HomeScreen = () => {
  return /* @__PURE__ */ import_react.default.createElement(import_ui.YStack, {
    f: 1,
    jc: "center",
    ai: "center",
    p: "$4",
    space: true
  }, /* @__PURE__ */ import_react.default.createElement(import_ui.YStack, {
    space: "$4",
    maw: 600
  }, /* @__PURE__ */ import_react.default.createElement(import_ui.H1, {
    ta: "center"
  }, "Welcome to Tamagui."), /* @__PURE__ */ import_react.default.createElement(import_ui.Paragraph, {
    ta: "center"
  }, "Here is a basic starter to show navigating from one screen to another. This screen uses the same code on Next.js and React Native."), /* @__PURE__ */ import_react.default.createElement(import_ui.MyComponent, null), /* @__PURE__ */ import_react.default.createElement(import_SheetDemo.SheetDemo, null), /* @__PURE__ */ import_react.default.createElement(import_ui.Separator, null), /* @__PURE__ */ import_react.default.createElement(import_ui.Paragraph, {
    ta: "center"
  }, "Tamagui is made by", " ", /* @__PURE__ */ import_react.default.createElement(import_ui.Anchor, {
    href: "https://twitter.com/natebirdman",
    target: "_blank"
  }, "Nate Wienert"), ", give it a star", " ", /* @__PURE__ */ import_react.default.createElement(import_ui.Anchor, {
    href: "https://github.com/tamagui/tamagui",
    target: "_blank",
    rel: "noreferrer"
  }, "on Github"), "."), /* @__PURE__ */ import_react.default.createElement(import_ui.Paragraph, {
    ta: "center"
  }, "This app is made by", " ", /* @__PURE__ */ import_react.default.createElement(import_ui.Anchor, {
    href: "https://apperside.com",
    target: "_blank"
  }, "Apperside"), ", give it a star", " ", /* @__PURE__ */ import_react.default.createElement(import_ui.Anchor, {
    href: "https://github.com/apperside/nx-tamagui-example",
    target: "_blank",
    rel: "noreferrer"
  }, "on Github"), ".")), /* @__PURE__ */ import_react.default.createElement(import_ui.XStack, null, /* @__PURE__ */ import_react.default.createElement(import_tamagui.Label, {
    color: "$blue10",
    cursor: "pointer"
  }, /* @__PURE__ */ import_react.default.createElement(import_link.TextLink, {
    style: { color: "white" },
    href: "/user/apperside"
  }, "Link to user detail screen"))));
};
var HomePage_default = HomeScreen;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  HomeScreen
});
//# sourceMappingURL=HomePage.js.map
