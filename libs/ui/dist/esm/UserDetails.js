import { Button, Paragraph, YStack } from "@nx-tamagui-example/ui";
import React from "react";
import { createParam } from "solito";
import { useLink } from "solito/link";
const { useParam } = createParam();
function UserDetails() {
  const [id] = useParam("id");
  const linkProps = useLink({ href: "/" });
  return /* @__PURE__ */ React.createElement(YStack, {
    f: 1,
    jc: "center",
    ai: "center",
    space: true
  }, /* @__PURE__ */ React.createElement(Paragraph, {
    ta: "center",
    fow: "800"
  }, `User ID: ${id}`), /* @__PURE__ */ React.createElement(Button, {
    ...linkProps
  }, "Go Home"));
}
var UserDetails_default = UserDetails;
export {
  UserDetails,
  UserDetails_default as default
};
//# sourceMappingURL=UserDetails.js.map
