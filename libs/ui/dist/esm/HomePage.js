import {
  Button,
  H5,
  YStack
} from "tamagui";
import { TextLink } from "solito/link";
const HomeScreen = () => {
  return /* @__PURE__ */ React.createElement(YStack, null, /* @__PURE__ */ React.createElement(H5, null, "HOME"), /* @__PURE__ */ React.createElement(Button, {
    onPress: () => {
    }
  }, "toggle"), /* @__PURE__ */ React.createElement(TextLink, {
    href: "/user/simo",
    style: { backgroundColor: "red" }
  }, /* @__PURE__ */ React.createElement(H5, {
    selectable: false,
    fontSize: 16,
    color: "black",
    fontWeight: "bold"
  }, "Moti Link")));
};
export {
  HomeScreen
};
//# sourceMappingURL=HomePage.js.map
