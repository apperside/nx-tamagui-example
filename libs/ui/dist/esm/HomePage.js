import {
  Anchor,
  H1,
  MyComponent,
  Paragraph,
  Separator,
  XStack,
  YStack
} from "@nx-tamagui-example/ui";
import { SheetDemo } from "@nx-tamagui-example/ui/src/SheetDemo";
import React from "react";
import { TextLink } from "solito/link";
import { Label } from "tamagui";
const HomeScreen = () => {
  return /* @__PURE__ */ React.createElement(YStack, {
    f: 1,
    jc: "center",
    ai: "center",
    p: "$4",
    space: true
  }, /* @__PURE__ */ React.createElement(YStack, {
    space: "$4",
    maw: 600
  }, /* @__PURE__ */ React.createElement(H1, {
    ta: "center"
  }, "Welcome to Tamagui."), /* @__PURE__ */ React.createElement(Paragraph, {
    ta: "center"
  }, "Here is a basic starter to show navigating from one screen to another. This screen uses the same code on Next.js and React Native."), /* @__PURE__ */ React.createElement(MyComponent, null), /* @__PURE__ */ React.createElement(SheetDemo, null), /* @__PURE__ */ React.createElement(Separator, null), /* @__PURE__ */ React.createElement(Paragraph, {
    ta: "center"
  }, "Tamagui is made by", " ", /* @__PURE__ */ React.createElement(Anchor, {
    href: "https://twitter.com/natebirdman",
    target: "_blank"
  }, "Nate Wienert"), ", give it a star", " ", /* @__PURE__ */ React.createElement(Anchor, {
    href: "https://github.com/tamagui/tamagui",
    target: "_blank",
    rel: "noreferrer"
  }, "on Github"), "."), /* @__PURE__ */ React.createElement(Paragraph, {
    ta: "center"
  }, "This app is made by", " ", /* @__PURE__ */ React.createElement(Anchor, {
    href: "https://apperside.com",
    target: "_blank"
  }, "Apperside"), ", give it a star", " ", /* @__PURE__ */ React.createElement(Anchor, {
    href: "https://github.com/apperside/nx-tamagui-example",
    target: "_blank",
    rel: "noreferrer"
  }, "on Github"), ".")), /* @__PURE__ */ React.createElement(XStack, null, /* @__PURE__ */ React.createElement(Label, {
    color: "$blue10",
    cursor: "pointer"
  }, /* @__PURE__ */ React.createElement(TextLink, {
    style: { color: "white" },
    href: "/user/apperside"
  }, "Link to user detail screen"))));
};
var HomePage_default = HomeScreen;
export {
  HomeScreen,
  HomePage_default as default
};
//# sourceMappingURL=HomePage.js.map
