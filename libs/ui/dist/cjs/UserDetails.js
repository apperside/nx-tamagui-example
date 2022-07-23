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
var UserDetails_exports = {};
__export(UserDetails_exports, {
  UserDetails: () => UserDetails,
  default: () => UserDetails_default
});
module.exports = __toCommonJS(UserDetails_exports);
var import_ui = require("@nx-tamagui-example/ui");
var import_react = __toESM(require("react"));
var import_solito = require("solito");
var import_link = require("solito/link");
const { useParam } = (0, import_solito.createParam)();
function UserDetails() {
  const [id] = useParam("id");
  const linkProps = (0, import_link.useLink)({ href: "/" });
  return /* @__PURE__ */ import_react.default.createElement(import_ui.YStack, {
    f: 1,
    jc: "center",
    ai: "center",
    space: true
  }, /* @__PURE__ */ import_react.default.createElement(import_ui.Paragraph, {
    ta: "center",
    fow: "800"
  }, `User ID: ${id}`), /* @__PURE__ */ import_react.default.createElement(import_ui.Button, {
    ...linkProps
  }, "Go Home"));
}
var UserDetails_default = UserDetails;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UserDetails
});
//# sourceMappingURL=UserDetails.js.map
