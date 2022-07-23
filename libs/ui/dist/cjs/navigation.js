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
var navigation_exports = {};
__export(navigation_exports, {
  NativeNavigation: () => NativeNavigation
});
module.exports = __toCommonJS(navigation_exports);
var import_native_stack = require("@react-navigation/native-stack");
var import_ui = require("@nx-tamagui-example/ui");
var import_react = __toESM(require("react"));
var import_link = require("solito/link");
var Linking = __toESM(require("expo-linking"));
var import_native = require("@react-navigation/native");
const HomeScreen = () => {
  const navigation = (0, import_native.useNavigation)();
  return /* @__PURE__ */ import_react.default.createElement(import_ui.YStack, null, /* @__PURE__ */ import_react.default.createElement(import_ui.H5, null, "HOME"), /* @__PURE__ */ import_react.default.createElement(import_ui.Button, {
    onPress: () => {
      navigation.navigate("user-detail");
    }
  }, "toggle"), /* @__PURE__ */ import_react.default.createElement(import_link.TextLink, {
    href: "/user/simo",
    style: { backgroundColor: "red" }
  }, /* @__PURE__ */ import_react.default.createElement(import_ui.H5, {
    selectable: false,
    fontSize: 16,
    color: "black",
    fontWeight: "bold"
  }, "Moti Link")));
};
const UserDetails = () => {
  return /* @__PURE__ */ import_react.default.createElement(import_ui.H5, null, "User detail");
};
const Stack = (0, import_native_stack.createNativeStackNavigator)();
function NativeNavigation() {
  return /* @__PURE__ */ import_react.default.createElement(import_native.NavigationContainer, {
    onUnhandledAction: () => alert("unhandled"),
    linking: {
      prefixes: [Linking.createURL("myapp://")],
      config: {
        initialRouteName: "user-detail",
        screens: {
          home: "",
          "user-detail": "user/:id"
        }
      }
    }
  }, /* @__PURE__ */ import_react.default.createElement(Stack.Navigator, null, /* @__PURE__ */ import_react.default.createElement(Stack.Screen, {
    name: "home",
    component: HomeScreen,
    options: {
      title: "Home"
    }
  }), /* @__PURE__ */ import_react.default.createElement(Stack.Screen, {
    name: "user-detail",
    component: UserDetails,
    options: {
      title: "User"
    }
  })));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  NativeNavigation
});
//# sourceMappingURL=navigation.js.map
