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
var MyCard_exports = {};
__export(MyCard_exports, {
  MyCard: () => MyCard
});
module.exports = __toCommonJS(MyCard_exports);
var import_tamagui = require("tamagui");
var import_react = __toESM(require("react"));
function MyCard({ children }) {
  return /* @__PURE__ */ import_react.default.createElement(import_tamagui.Stack, {
    br: "$4",
    bc: "my",
    minHeight: 10
  }, children);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MyCard
});
//# sourceMappingURL=MyCard.js.map
