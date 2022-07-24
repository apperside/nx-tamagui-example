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
var Modal_exports = {};
__export(Modal_exports, {
  SheetDemo: () => SheetDemo
});
module.exports = __toCommonJS(Modal_exports);
var import_feather_icons = require("@tamagui/feather-icons");
var import_sheet = require("@tamagui/sheet");
var import_react = __toESM(require("react"));
var import_tamagui = require("tamagui");
const SheetDemo = () => {
  const [position, setPosition] = (0, import_react.useState)(0);
  const [open, setOpen] = (0, import_react.useState)(false);
  const [modal, setModal] = (0, import_react.useState)(import_tamagui.isWeb ? false : true);
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(import_tamagui.XStack, {
    space: true
  }, /* @__PURE__ */ import_react.default.createElement(import_tamagui.Button, {
    onPress: () => setOpen(true)
  }, "Open"), import_tamagui.isWeb && /* @__PURE__ */ import_react.default.createElement(import_tamagui.Button, {
    onPress: () => setModal((x) => !x)
  }, modal ? "Modal" : "Inline")), /* @__PURE__ */ import_react.default.createElement(import_sheet.Sheet, {
    modal,
    open,
    onChangeOpen: setOpen,
    snapPoints: [80, 10],
    position,
    onChangePosition: setPosition
  }, /* @__PURE__ */ import_react.default.createElement(import_sheet.Sheet.Overlay, null), /* @__PURE__ */ import_react.default.createElement(import_sheet.Sheet.Frame, {
    ai: "center",
    jc: "center"
  }, /* @__PURE__ */ import_react.default.createElement(import_sheet.Sheet.Handle, null), /* @__PURE__ */ import_react.default.createElement(import_tamagui.Button, {
    size: "$6",
    circular: true,
    icon: import_feather_icons.ChevronDown,
    onPress: () => {
      setOpen(false);
    }
  }))));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SheetDemo
});
//# sourceMappingURL=Modal.js.map
