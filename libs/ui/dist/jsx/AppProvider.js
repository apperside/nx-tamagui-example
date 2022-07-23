import { config as Tamagui } from "@nx-tamagui-example/config";
const AppProvider = ({ children }) => {
  return <Tamagui.Provider disableInjectCSS disableRootThemeClass defaultTheme="light">{children}</Tamagui.Provider>;
};
var AppProvider_default = AppProvider;
export {
  AppProvider,
  AppProvider_default as default
};
//# sourceMappingURL=AppProvider.js.map
