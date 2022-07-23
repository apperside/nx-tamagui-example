import { config as Tamagui } from "@nx-tamagui-example/config";
import React from "react";
const AppProvider = ({
  theme,
  children
}) => {
  return /* @__PURE__ */ React.createElement(Tamagui.Provider, {
    disableInjectCSS: true,
    disableRootThemeClass: true,
    defaultTheme: theme
  }, children);
};
var AppProvider_default = AppProvider;
export {
  AppProvider,
  AppProvider_default as default
};
//# sourceMappingURL=AppProvider.js.map
