import { Stack } from "tamagui";
import React from "react";
function MyCard({ children, ...props }) {
  return /* @__PURE__ */ React.createElement(Stack, {
    br: "$4",
    ...props,
    bc: "red",
    minHeight: 10
  }, children);
}
export {
  MyCard
};
//# sourceMappingURL=MyCard.js.map
